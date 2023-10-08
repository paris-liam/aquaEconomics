import { Quote, SlideInfo, TeamMember } from '@/lib/types'
import Layout from '../components/layout'
import { AboutSlide } from '../components/Slides/AboutSlide'
import { getAllQuotes, getAllTeamMembers, getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID, customMarkdownOptions } from '../lib/constants'
import { QuoteContainer } from '@/components/QuoteContainer'
import ContentfulImage from '@/components/ContentfulImage'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useEffect, useState } from 'react'

export default function About({ slideInfo, quotes, teamMembers }: { slideInfo: SlideInfo; quotes: string[]; teamMembers: TeamMember[] }) {

  const [highlightedMember, setHighlightedMember] = useState({} as TeamMember)
  const [showHighlight, setShowHighlight] = useState(false);

  const teamMemberClicked = (teamData: TeamMember) => {
    setShowHighlight(false);
    if (teamData !== highlightedMember) {
      setHighlightedMember(teamData)
      setShowHighlight(true)
    }
  }

  useEffect(() => {
    const modal = document.querySelector('.modal-overlay') as HTMLDivElement;
    const body = document.querySelector('body');
    console.warn(modal)
    if (body) {


      if (modal) {
        console.warn('in initial');
        console.warn(highlightedMember);
        if (highlightedMember.name) {
          body.classList.add('scroll-lock');
          modal.style.display = 'block';
        } else {
          console.warn('in here');
          body.classList.remove('scroll-lock');
          modal.style.display = 'none';
        }
      } else {
        body.classList.remove('scroll-lock');
      }
    }
  }, [highlightedMember])

  return (
    <>
      <Layout>
        <AboutSlide {...slideInfo}></AboutSlide>
        <QuoteContainer quotes={quotes}></QuoteContainer>
        <h2 className='m-10 text-center text-4xl  text-aqua-green font-bold uppercase'>
          MEET THE TEAM
        </h2>
        <ul className='grid w-4/5 md:grid-cols-3 gap-10 m-auto h-3/4 pt-5'>
          {teamMembers.map((teamMember, index) =>
          (<li className='relative team-mate-item' key={`${teamMember.name} list item ${index}`} onClick={() => { setHighlightedMember(teamMember) }}>
            <ContentfulImage
              key={`${teamMember.name} list picture`}
              src={teamMember.headshot.url}
              width={teamMember.headshot.width}
              height={teamMember.headshot.height}
              alt={teamMember.headshot.title}
              className='w-full h-2/3 m-auto object-cover'
            />
            <h3 className='text-3xl text-aqua-blue font-bold mb-1'>{teamMember.name}</h3>
            <h4 className='font-bold italic mb-3'>{teamMember.role}</h4>
          </li>))}
        </ul>
        {
          highlightedMember.name && (
            <>
              <div onClick={() => setHighlightedMember({} as TeamMember)} className='p-8 teamMemberModal z-50 fixed top-0 bottom-0 left-0 right-0 md:top-50vh md:left-15vw md:right-15vw md:bottom-15vh md:mt-n25vh md:min-w-25vw md:max-h-50vh overflow-scroll bg-white'>
                <h1><img className="w-7 pb-3 ml-auto" src="images/cross.png" /></h1>
                <div className='flex flex-col md:flex-row'>
                  <ContentfulImage
                    src={highlightedMember?.headshot?.url}
                    width={highlightedMember?.headshot?.width}
                    height={highlightedMember?.headshot?.height}
                    alt={highlightedMember?.headshot?.title}
                    className='w-1/2 md:w-1/3 h-auto m-auto md:m-0 md:mr-auto object-cover'
                  />
                  <div className='flex flex-col md:pl-4'><h3 className='text-3xl text-aqua-blue font-bold mb-1'>{highlightedMember.name}</h3>
                    <h4 className='font-bold italic mb-3'>{highlightedMember.role}</h4>
                    {documentToReactComponents(highlightedMember?.description?.json, customMarkdownOptions(highlightedMember?.description))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'none' }} onClick={() => setHighlightedMember({} as TeamMember)} className=' modal-overlay fixed top-0 bottom-0 left-0 right-0 z-40 bg-black shade opacity-80'></div>

            </>
          )
        }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const slideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}
  const quotes = (await getAllQuotes()) ?? {}
  const teamMembers = (await getAllTeamMembers()) ?? []
  return {
    props: {
      slideInfo,
      quotes,
      teamMembers
    }
  }
}
