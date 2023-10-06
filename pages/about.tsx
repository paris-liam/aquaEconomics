import { Quote, SlideInfo, TeamMember } from '@/lib/types'
import Layout from '../components/layout'
import { AboutSlide } from '../components/Slides/AboutSlide'
import { getAllQuotes, getAllTeamMembers, getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID, customMarkdownOptions } from '../lib/constants'
import { QuoteContainer } from '@/components/QuoteContainer'
import ContentfulImage from '@/components/ContentfulImage'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useState } from 'react'

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

  return (
    <>
      <Layout>
        <AboutSlide {...slideInfo}></AboutSlide>
        <QuoteContainer quotes={quotes}></QuoteContainer>
        <ul className='grid w-4/5 grid-cols-3 gap-6 m-auto h-3/4 '>
          {teamMembers.map((teamMember) =>
          (<li key={teamMember.name} onClick={() => { setHighlightedMember(teamMember) }}>
            <ContentfulImage
              key={`teammate ${teamMember.name}`}
              src={teamMember.headshot.url}
              width={teamMember.headshot.width}
              height={teamMember.headshot.height}
              alt={teamMember.headshot.title}
              className={``}
            />
            <h3>{teamMember.name}</h3>
            <h4>{teamMember.role}</h4>
          </li>))}
        </ul>
        <div className='teamMemberModal'>
          <h1>!!!!!!!</h1>
          {
            !Object.is(highlightedMember, {}) && (
              <div>
                {highlightedMember.name}
              </div>
            )
          }
        </div>
        <div className='overlay'></div>
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
