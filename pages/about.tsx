import { SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import {AboutSlide} from '../components/Slides/AboutSlide'
import { getSlideInfo } from '../lib/api'
import { ABOUT_SLIDE_CONTENT_ID } from '../lib/constants'

export default function About({ slideInfo }: { slideInfo: SlideInfo }) {
  return (
    <>
      <Layout>
          <AboutSlide {...slideInfo}></AboutSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() { 
  const slideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}

  return {
    props: {
      slideInfo
    }
  }  
}
