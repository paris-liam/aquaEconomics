
import ContentfulImage from "../ContentfulImage";
import { Hero } from "../hero";
import { aquaGreenHex, aquaBlueHex } from "../../lib/constants"
import { Card } from '../Card'
import { Survey } from "../../lib/svgs/Survey";
import { Pipe } from "../../lib/svgs/Pipe";
import { Shovel } from "../../lib/svgs/Shovel";
import { Service, ServiceCategory, SlideInfo } from "@/lib/types";

type ServicesSlideProps = {
  slideInfo: SlideInfo,
  serviceCategories: ServiceCategory[]
}
export const ServicesSlide = ({ slideInfo, serviceCategories }: ServicesSlideProps) => {
  const title = slideInfo?.title || ''
  const backgroundImage = slideInfo?.backgroundImage || {}
  const categoryOne = serviceCategories[0] || {};
  const categoryTwo = serviceCategories[1] || {};
  const categoryThree = serviceCategories[2] || {};

  return (<Hero className={'min-h-75vh'} overlayColor={'black'} background={slideInfo?.backgroundImage && <ContentfulImage
    className='object-cover w-full h-full'
    src={backgroundImage?.url}
    width={backgroundImage?.width}
    height={backgroundImage?.height}
    alt={backgroundImage?.title}
  />}>
    <div id="services" className='flex flex-col w-full h-full'>
      <h2 className='m-10 text-4xl font-bold leading-8 text-center text-white uppercase md:text-6xl'>
        {title}
      </h2>
      <div className='flex flex-col items-center w-full h-auto m-auto md:items-stretch md:flex-row justify-evenly '>
        {categoryOne && <Card className={'service-card bg-white hover:bg-aqua-green text-aqua-green hover:text-white'} bgColor={'white'} titleColor={'aqua-green'} title={categoryOne.title}
          body={categoryOne.shortDescription}
          link={"construction"}
          //link={`services#${categoryOne?.anchor}`}
          icon={<Survey className='w-full h-full'></Survey>} />
        }
        {categoryTwo && <Card className={'service-card bg-aqua-green hover:bg-white text-white hover:text-aqua-green'} bgColor={'aqua-green'} titleColor={'white'} title={categoryTwo.title}
          body={categoryTwo.shortDescription}
          link={"construction"}
          //link={`services#${categoryTwo?.anchor}`}
          icon={<Shovel className='w-full h-full'></Shovel>} />
        }
        {categoryThree && <Card className={'service-card bg-aqua-blue hover:bg-white text-white hover:text-aqua-blue'} bgColor={'aqua-blue'} titleColor={'white'} title={categoryThree.title}
          body={categoryThree.shortDescription}
          link={"construction"}
          //link={`services#${categoryThree?.anchor}`}
          icon={<Pipe className='w-full h-full'></Pipe>} />
        }
      </div>
    </div>
  </Hero>)
}