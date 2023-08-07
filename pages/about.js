import Layout from '../components/layout'
import { getAllPostsForHome, getHeroText } from '../lib/api'
import {AboutSlide} from '../components/Slides/AboutSlide'

export default function About({ allPosts, heroText }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
          <AboutSlide></AboutSlide>
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
