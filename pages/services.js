import Layout from '../components/layout'
import { ServicesSlide } from '../components/Slides/ServicesSlide'
import { getAllServiceCategories, getSlideInfo } from '../lib/api'
import { SERVICES_SLIDE_CONTENT_ID } from '../lib/constants'

export default function Services({ slideInfo, serviceCategories  }) {
    return (
      <>
        <Layout>
            <ServicesSlide slideInfo={slideInfo} serviceCategories={serviceCategories}></ServicesSlide>
            <h1>big list of services</h1>
        </Layout>
      </>
    )
  }
  
  export async function getStaticProps() {
    const servicesSlideInfo = (await getSlideInfo(SERVICES_SLIDE_CONTENT_ID)) ?? {}
    const serviceCategories = (await getAllServiceCategories()) ?? {}
  
    return {
      props: {
        servicesSlideInfo,
        serviceCategories
      }
    }
  }
  