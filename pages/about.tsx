import { Quote, SlideInfo, TeamMember } from '@/lib/types'
import Layout from '../components/layout'
import {AboutSlide} from '../components/Slides/AboutSlide'
import { getAllQuotes, getAllTeamMembers, getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID } from '../lib/constants'
import { QuoteContainer } from '@/components/QuoteContainer'

export default function About({ slideInfo, quotes, teamMembers  }: { slideInfo: SlideInfo; quotes: string[]; teamMembers: TeamMember[] }) {
  return (
    <>
      <Layout>
          <AboutSlide {...slideInfo}></AboutSlide>
          <QuoteContainer quotes={quotes}></QuoteContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps() { 
  const slideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}
  const quotes =(await getAllQuotes()) ?? {}
  const teamMembers = (await getAllTeamMembers()) ?? []
  return {
    props: {
      slideInfo,
      quotes,
      teamMembers
    }
  }  
}
