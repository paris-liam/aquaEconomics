import { Service, ServiceCategory, SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { getAllServices, getSlideInfo } from '../lib/api'
import { SERVICES_SLIDE_CONTENT_ID } from '../lib/constants'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
//@ts-ignore
export default function Services({ slideInfo, services }: { slideInfo: SlideInfo; services: ServiceCategory[] }) {
  return (
    <>
      <Layout>
        <ServicesSlide slideInfo={slideInfo} serviceCategories={services}></ServicesSlide>
        {services && services.map(({ category, services }) => (
          <ul key={`${category}`}>
            <li><h2 >{category}</h2></li>
            {
              services && services.map((service: Service) => (
                <li key={`${service}`}><h3 key={`${service.title}`}>{service.title}</h3></li>
              ))
            }
          </ul>))}
        {services && services.map(({ category, categoryDescription, services }) => (
          <div key={`${category}`}>
            <div>
              <h2 >{category}</h2>
              <div
                //@ts-ignore
                dangerouslySetInnerHTML={{ __html: documentToReactComponents(categoryDescription.json) }}>
              </div>
              {
                services && services.map((service: Service) => (
                  <div key={`${service}`}>
                    <h2 key={`${service.title}`}>{service.title}</h2>
                    <div
                      //@ts-ignore
                      dangerouslySetInnerHTML={{ __html: documentToReactComponents(service.description.json) }}>
                    </div>
                  </div>
                ))
              }</div></div>
        ))}
      </Layout>
    </>
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
