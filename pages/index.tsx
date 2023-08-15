import Layout from '../components/layout'
import { getHighlightedProjects, getSlideInfo, getAllServices } from '../lib/api'
import { useRef } from 'react'
import { ABOUT_SLIDE_CONTENT_ID, CONTACT_SLIDE_CONTENT_ID, LANDING_SLIDE_CONTENT_ID, PROJECTS_SLIDE_CONTENT_ID, SERVICES_SLIDE_CONTENT_ID } from '../lib/constants'
import { AboutSlide } from '../components/Slides/AboutSlide'
import { LandingSlide } from '../components/Slides/LandingSlide'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { ProjectsSlide } from '../components/Slides/ProjectsSlide'
import { ContactSlide } from '../components/Slides/ContactSlide'
import { Project, ServiceCategory, SlideInfo } from '@/lib/types'

type IndexPageProps = {
  landingSlideInfo: SlideInfo;
  aboutSlideInfo: SlideInfo;
  projectSlideInfo: SlideInfo;
  servicesSlideInfo: SlideInfo;
  contactSlideInfo: SlideInfo;
  highlightedProjects: Project[];
  serviceCategories: ServiceCategory[];
}
export default function Index({ landingSlideInfo,
  aboutSlideInfo,
  projectSlideInfo,
  servicesSlideInfo,
  contactSlideInfo,
  highlightedProjects,
  serviceCategories  }: IndexPageProps) {
  const aboutSlide = useRef(null)
  return (
    <Layout>
      <LandingSlide  slideInfo={landingSlideInfo} scrollRef={aboutSlide}></LandingSlide>
      <span ref={aboutSlide}><AboutSlide {...aboutSlideInfo} ></AboutSlide></span>
      <ServicesSlide serviceCategories={serviceCategories} slideInfo={servicesSlideInfo} ></ServicesSlide>
      <ProjectsSlide slideInfo={projectSlideInfo} highlightedProjects={highlightedProjects}></ProjectsSlide>
      <ContactSlide {...contactSlideInfo} ></ContactSlide>
    </Layout>
  )
}

export async function getStaticProps() {
  const landingSlideInfo = (await getSlideInfo(LANDING_SLIDE_CONTENT_ID)) ?? {}
  const aboutSlideInfo = (await getSlideInfo(ABOUT_SLIDE_CONTENT_ID)) ?? {}
  const projectSlideInfo = (await getSlideInfo(PROJECTS_SLIDE_CONTENT_ID)) ?? {}
  const servicesSlideInfo = (await getSlideInfo(SERVICES_SLIDE_CONTENT_ID)) ?? {}
  const contactSlideInfo = (await getSlideInfo(CONTACT_SLIDE_CONTENT_ID)) ?? {}
 const highlightedProjects = (await getHighlightedProjects()) ?? {}
  const serviceCategories = (await getAllServices()) ?? {}
   return {
    props: { landingSlideInfo,
      aboutSlideInfo,
      projectSlideInfo,
      servicesSlideInfo,
      contactSlideInfo,
      highlightedProjects,
      serviceCategories,
    },
  }
}
