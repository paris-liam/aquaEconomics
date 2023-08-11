import Layout from '../../components/layout'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'
import { getHighlightedProjects, getSlideInfo } from '../../lib/api'
import { PROJECTS_SLIDE_CONTENT_ID } from '../../lib/constants'

export default function ProjectIndex({ projectSlideInfo, highlightedProjects }) {
    return (
      <>
        <Layout>
            <ProjectsSlide highlightedProjects={highlightedProjects} slideInfo={projectSlideInfo}></ProjectsSlide>
        </Layout>
      </>
    )
  }
  
  export async function getStaticProps() {
    const projectSlideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {}
    const highlightedProjects = (await getHighlightedProjects()) ?? {}

    return {
      props: {
        projectSlideInfo,
        highlightedProjects
      }
    }
  }
  