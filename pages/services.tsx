import { Service, ServiceCategory, SlideInfo } from '@/lib/types'
import Layout from '../components/layout'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { getAllServices, getSlideInfo } from '../lib/api'
import { SERVICES_SLIDE_CONTENT_ID } from '../lib/constants'
//@ts-ignore
export default function Services({ slideInfo, services }: { slideInfo: SlideInfo; services: ServiceCategory[] }) {
  return (
    <>
      <Layout>
        <ServicesSlide slideInfo={slideInfo} serviceCategories={services}></ServicesSlide>
        <h1>big list of services</h1>
        {services && services.map(({category, services}) => (
          <>
            <h2 key={`${category}`}>{category}</h2>
            {
              services && services.map((service: Service) => (
                <p key={`${service.title}`}>{service.title}</p>
              ))
            }
          </>))}
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const servicesSlideInfo = (await getSlideInfo(SERVICES_SLIDE_CONTENT_ID)) ?? {}
  const services = (await getAllServices()) ?? {}

  return {
    props: {
      servicesSlideInfo,
      services
    }
  }
}
