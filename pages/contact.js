import Layout from '../components/layout'
import { ContactSlide } from '../components/Slides/ContactSlide'
import { getSlideInfo } from '../lib/api'
import { CONTACT_SLIDE_CONTENT_ID } from '../lib/constants'

export default function Contact({ contactSlideInfo }) {
  return (
    <>
      <Layout>
          <ContactSlide slideInfo={contactSlideInfo}></ContactSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const contactSlideInfo = (await getSlideInfo(CONTACT_SLIDE_CONTENT_ID)) ?? {}

  return {
    props: {
      contactSlideInfo,
    }
  }
}
