import { SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import {AboutSlide} from '../components/Slides/AboutSlide'
import { getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID } from '../lib/constants'
import { MeetTheTeam } from '@/components/MeetTheTeam'
import { QuotesContainer } from '@/components/QuotesContainer'

export default function About({ slideInfo  }: { slideInfo: SlideInfo; }) {
  return (
    <>
      <Layout>
          <AboutSlide {...slideInfo}></AboutSlide>
          <MeetTheTeam></MeetTheTeam>
          <QuotesContainer></QuotesContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps() { 
  const slideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}
  //const teamMembers = (await getTeamMembers()) ?? []
  return {
    props: {
      slideInfo,
    }
  }  
}
