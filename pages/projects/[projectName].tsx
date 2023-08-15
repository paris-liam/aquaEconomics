import { Project, SlideInfo } from '@/lib/types';
import Layout from '../../components/layout'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'
import { generateProjectPaths, getHighlightedProjects, getProjectData, getSlideInfo } from '../../lib/api'
import { customMarkdownOptions, PROJECTS_SLIDE_CONTENT_ID } from '../../lib/constants';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Project({ projectData, slideInfo, highlightedProjects }: {projectData: Project; slideInfo: SlideInfo; highlightedProjects: Project[]}) {
  return (
    <>
      <Layout>
        <div>
          <h1 className='text-2xl'>{projectData?.title}</h1>
          <h2>{projectData?.date}</h2>
          <div>
              {
                //@ts-ignore
                documentToReactComponents(projectData?.description?.json, customMarkdownOptions(projectData?.description))
              }

        </div>
        </div>
        <div>
              {
                //@ts-ignore
                documentToReactComponents(projectData?.description?.json, customMarkdownOptions(projectData?.description))
              }
          
        </div>
      <ProjectsSlide slideInfo={slideInfo} highlightedProjects={highlightedProjects}></ProjectsSlide>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }: any) { 
  const projectData = await getProjectData(params.projectName) || {};
  const slideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {}
  const highlightedProjects = (await getHighlightedProjects()) ?? {}
  return {
    props: {
      projectData,
      slideInfo,
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
