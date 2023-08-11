import Layout from '../../components/layout'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'
import { generateProjectPaths, getHighlightedProjects, getProjectData, getSlideInfo } from '../../lib/api'
import { PROJECTS_SLIDE_CONTENT_ID } from '../../lib/constants';

export default function Project({ projectData, projectSlideInfo, highlightedProjects }) {
  return (
    <>
      <Layout>
        <h1>{projectData?.title}</h1>
        <ProjectsSlide highlightedProjects={highlightedProjects} slideInfo={projectSlideInfo}></ProjectsSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.projectName) || {};
  const projectSlideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {}
  const highlightedProjects = (await getHighlightedProjects()) ?? {}

  return {
    props: {
      projectData,
      projectSlideInfo,
      highlightedProjects
    }
  }
}

export async function getStaticPaths() {
  const pathsArr = await generateProjectPaths();
  return {
    paths: pathsArr,
    fallback: true
  }
}
