import { Quote, SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import {AboutSlide} from '../components/Slides/AboutSlide'
import { getAllQuotes, getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID } from '../lib/constants'
import { QuoteContainer } from '@/components/QuoteContainer'

export default function About({ slideInfo, quotes  }: { slideInfo: SlideInfo; quotes: string[] }) {
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
  //const teamMembers = (await getTeamMembers()) ?? []
  return {
    props: {
      slideInfo,
      quotes
    }
  }  
}
