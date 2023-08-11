import Layout from '../components/layout'
import {AboutSlide} from '../components/Slides/AboutSlide'
import { getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID } from '../lib/constants'

export default function About({ aboutSlideInfo }) {
  return (
    <>
      <Layout>
          <AboutSlide slideInfo={aboutSlideInfo}></AboutSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() { 
  const aboutSlideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}

  return {
    props: {
      aboutSlideInfo
    }
  }  
}
