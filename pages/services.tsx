import { Service, ServiceCategory, SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { getAllServices, getSlideInfo } from '../lib/api'
import { SERVICES_SLIDE_CONTENT_ID, customMarkdownOptions } from '../lib/constants'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ServiceList from '@/components/ServiceList'
import { useEffect, useRef, useState } from 'react'
//@ts-ignore
export default function Services({ slideInfo, services }: { slideInfo: SlideInfo; services: ServiceCategory[] }) {
  const createServiceRefMap = (services: ServiceCategory[]) => {
    let result: { [key: string]: any } = {} as { [key: string]: any }
    let keySet: Set<string> = new Set();
    services.forEach((category: ServiceCategory) => {
      result[category.anchor] = { current: null }
      keySet.add(category.anchor)
      category.services?.forEach((service) => {
        result[service.anchor] = { current: null }
        keySet.add(service.anchor)
      })
    })
    return result
  }

  const serviceSlideRef = useRef(null)
  const [serviceListFixed, setServiceListFixed] = useState(false)
  const [highlightedService, setHighlightedService] = useState('');
  const [serviceSectionRefs, setServiceSectionRefs] = useState(createServiceRefMap(services))
  useEffect(() => {
    const highlightSlide = () => {
      Object.keys(serviceSectionRefs).forEach((serviceKey) => {
        if (serviceSectionRefs[serviceKey] && serviceSectionRefs[serviceKey].current && serviceSectionRefs[serviceKey].current.offsetTop <= window.scrollY) {
          setHighlightedService(serviceKey)
        }
      })
    }
    
    const setFixedServiceList = () => {
      //@ts-ignore
      setServiceListFixed(!!(serviceSlideRef && serviceSlideRef.current && window.scrollY > (serviceSlideRef.current.offsetTop + serviceSlideRef.current.offsetHeight)))
    }

    window.addEventListener("scroll", highlightSlide);
    window.addEventListener("scroll", setFixedServiceList);

    return () => {
      window.removeEventListener("scroll", highlightSlide);
      window.removeEventListener("scroll", setFixedServiceList)
    }

  }, [serviceSectionRefs])
  return (
    <Layout>
      <div ref={serviceSlideRef}><ServicesSlide slideInfo={slideInfo} serviceCategories={services}></ServicesSlide></div>
      <div className='relative flex flex-row mr-20 ml-10 my-10 gap-4'>
        <div className={`w-auto hidden md:block ${serviceListFixed ? 'fixed top-10 left-10': ''}`}><ServiceList highlightedService={highlightedService} serviceList={services}></ServiceList></div>
        <div className='ml-auto w-full md:w-3/5 lg:w-4/5 rich-text unreset'>
          {services && services.map(({ title, categoryDescription, services, anchor }) => (
            <div
              //@ts-ignore
              ref={serviceSectionRefs[anchor]} key={anchor} id={anchor}>
              <h2>{title}</h2>
              <div>
                {
                  documentToReactComponents(categoryDescription.json, customMarkdownOptions(categoryDescription))
                }
              </div>
              {
                services && services.map((service: Service) => (
                  <div
                    //@ts-ignore
                    ref={serviceSectionRefs[service.anchor]} id={service.anchor} key={service.anchor}>
                    <h2>{service.title}</h2>
                    <div>
                      {
                        documentToReactComponents(service?.description?.json, customMarkdownOptions(service?.description))
                      }

                    </div>
                  </div>
                ))
              }</div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export async function getStaticProps() {
  const slideInfo = (await getSlideInfo(SERVICES_SLIDE_CONTENT_ID)) ?? {}
  const services = (await getAllServices()) ?? {}

  return {
    props: {
      slideInfo,
      services
    }
  }
}
