import Layout from '../components/layout'
import { ContactSlide } from '../components/Slides/ContactSlide'

export default function Contact({  }) {
  return (
    <>
      <Layout>
          <ContactSlide></ContactSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      a: "1"
    }
  }
}
