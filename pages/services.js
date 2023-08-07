import Container from '../components/container'
import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { getAllPostsForHome, getHeroText } from '../lib/api'
import Header from '../components/header'
import { ServicesSlide } from '../components/Slides/ServicesSlide'

export default function Services({ allPosts, heroText }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
      <>
        <Layout>
            <ServicesSlide></ServicesSlide>
            <h1>big list of services</h1>
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
  