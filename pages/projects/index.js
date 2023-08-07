import Container from '../../components/container'
import Layout from '../../components/layout'
import { Hero } from '../../components/hero'
import { getAllPostsForHome, getHeroText } from '../../lib/api'
import Header from '../../components/header'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'

export default function ProjectIndex({ allPosts, heroText }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
      <>
        <Layout>
            <ProjectsSlide></ProjectsSlide>
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
  