import { Project, SlideInfo } from '@/lib/types';
import Layout from '../../components/layout'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'
import { generateProjectPaths, getHighlightedProjects, getProjectData, getSlideInfo } from '../../lib/api'
import { CONTACT_SLIDE_CONTENT_ID, customMarkdownOptions, PROJECTS_SLIDE_CONTENT_ID } from '../../lib/constants';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContentfulImage from '@/components/ContentfulImage';
import { ContactSlide } from '@/components/Slides/ContactSlide';
import { Hero } from '@/components/hero';


export default function Project({ projectData, projectSlideInfo, contactSlideInfo, highlightedProjects }: { projectData: Project; projectSlideInfo: SlideInfo; contactSlideInfo: SlideInfo; highlightedProjects: Project[] }) {
  return (
    <>
      <Layout>
        <Hero className={`min-h-45vh h-45vh`} overlayColor={'#000'} background={   
              <ContentfulImage
                className='object-fill'
                height={projectData?.headerImage.height}
                width={projectData?.headerImage.width}
                alt={projectData?.headerImage.title}
                src={projectData?.headerImage.url}
              ></ContentfulImage>}>

<div className='header-text-container w-1/3 m-auto'>
              <h1 className='text-3xl text-aqua-green font-bold mb-1'>{projectData?.title}</h1>
              <h2 className='text-gray-700 font-bold italic mb-3'>{projectData?.date}</h2>
              <div className='rich-text'>{
                //@ts-ignore
                documentToReactComponents(projectData?.shortSummary?.json, customMarkdownOptions(projectData?.shortSummary))
              }</div>
            </div>
              </Hero>
        <div className='m-auto max-w-4xl my-10 '>
          <div className='rich-text'>
            {
              //@ts-ignore
              documentToReactComponents(projectData?.description?.json, customMarkdownOptions(projectData?.description))
            }
          </div>
        </div>
        <ProjectsSlide slideInfo={projectSlideInfo} highlightedProjects={highlightedProjects}></ProjectsSlide>
        <ContactSlide {...contactSlideInfo} ></ContactSlide>
    </Layout >
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const projectData = await getProjectData(params.projectName) || {};
  const projectSlideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {};
  const contactSlideInfo = (await getSlideInfo(CONTACT_SLIDE_CONTENT_ID)) ?? {}

  const highlightedProjects = (await getHighlightedProjects()) ?? {}
  return {
    props: {
      projectData,
      projectSlideInfo,
      contactSlideInfo,
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
