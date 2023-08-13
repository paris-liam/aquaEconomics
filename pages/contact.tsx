import { SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import { ContactSlide } from '../components/Slides/ContactSlide'
import { getSlideInfo } from '../lib/api'
import { CONTACT_SLIDE_CONTENT_ID } from '../lib/constants'

export default function Contact({ slideInfo }: { slideInfo: SlideInfo }) {
  return (
    <>
      <Layout>
          <ContactSlide {...slideInfo}></ContactSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const slideInfo = (await getSlideInfo(CONTACT_SLIDE_CONTENT_ID)) ?? {}

  return {
    props: {
      slideInfo,
    }
  }
}
