import { Project, SlideInfo } from '@/lib/types';
import Layout from '../../components/layout'
import { ProjectsSlide } from '../../components/Slides/ProjectsSlide'
import { getHighlightedProjects, getSlideInfo } from '../../lib/api'
import { CONTACT_SLIDE_CONTENT_ID, PROJECTS_SLIDE_CONTENT_ID } from '../../lib/constants'
import { ContactSlide } from '@/components/Slides/ContactSlide';

export default function ProjectIndex({ projectSlideInfo, contactSlideInfo, highlightedProjects }: { projectSlideInfo: SlideInfo; contactSlideInfo: SlideInfo; highlightedProjects: Project[] }) {
  return (
    <Layout>
      <ProjectsSlide slideInfo={projectSlideInfo} highlightedProjects={highlightedProjects}></ProjectsSlide>
      <ContactSlide {...contactSlideInfo}></ContactSlide>
    </Layout>
  )
}

export async function getStaticProps() {
  const projectSlideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {}
  const contactSlideInfo = (await getSlideInfo(CONTACT_SLIDE_CONTENT_ID)) ?? {}
  const highlightedProjects = (await getHighlightedProjects()) ?? {}
  return {
    props: {
      highlightedProjects,
      projectSlideInfo,
      contactSlideInfo
    }
  }
}
