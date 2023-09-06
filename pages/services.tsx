import { Service, ServiceCategory, SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { getAllServices, getSlideInfo } from '../lib/api'
import { SERVICES_SLIDE_CONTENT_ID, aquaBlueHex, aquaGreenHex, customMarkdownOptions } from '../lib/constants'
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
        <div className={` hidden md:block  ${serviceListFixed ? 'ml-5 mt-5 fixed top-32 left-5 bottom-0 w-72' : 'w-80'}`}><ServiceList highlightedService={highlightedService} serviceList={services}></ServiceList></div>
        <div className={`ml-auto w-full md:w-3/4 lg:w-4/5 xl:w-11/12 rich-text unreset ${serviceListFixed ? 'pl-44  mt-44':''}`}>
          {services && services.map(({ title, categoryDescription, services, anchor }) => (
            <div
              //@ts-ignore
              ref={serviceSectionRefs[anchor]} key={anchor} id={anchor}>
              <h2 style={{fontSize: '2.5rem', margin: '2rem 0', color: aquaGreenHex, borderBottom: `1px solid`}}>{title}</h2>
              <div className='pl-6'>
                {
                  documentToReactComponents(categoryDescription.json, customMarkdownOptions(categoryDescription))
                }
              </div>
              {
                services && services.map((service: Service) => (
                  <div className='pl-6'
                    //@ts-ignore
                    ref={serviceSectionRefs[service.anchor]} id={service.anchor} key={service.anchor}>
                    <h2 style={{fontSize: '1.75rem', margin: '1.5rem 0', color: aquaBlueHex, borderBottom: `1px solid`}}>{service.title}</h2>
                    <div className=' ml-12 mt-3'>
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
