import Layout from '../components/layout'
import { getAllPostsForHome, getHeroText } from '../lib/api'
import { ContactSlide } from '../components/Slides/ContactSlide'

export default function Contact({ allPosts, heroText }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
          <ContactSlide></ContactSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) ?? []
  const heroText = (await getHeroText()) ?? {}  
  return {
    props: { allPosts, heroText },
  }
}
