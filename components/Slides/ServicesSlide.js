
import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaGreenHex, aquaBlueHex } from "../../lib/constants"
import { Card } from '../Card'
import Survey from "../../lib/svgs/Survey";
import Pipe from "../../lib/svgs/Pipe";
import Shovel from "../../lib/svgs/Shovel";

export const ServicesSlide = ({ slideInfo = {}, serviceCategories = [] }) => {
  const title = slideInfo?.title || ''
  const backgroundImage = slideInfo?.backgroundImage || {}
  const categoryOne = serviceCategories[0] || {};
  const categoryTwo = serviceCategories[1] || {};
  const categoryThree = serviceCategories[2] || {};

  return (<Hero  overlayColor={'black'} background={<ContentfulImage
    className='object-cover w-full h-full'
    src={backgroundImage?.url}
    width={backgroundImage?.width}
    height={backgroundImage?.height}
    alt={backgroundImage?.title}
  />}>
    <div className='flex flex-col w-full h-full'>
      <h2 className='m-10 text-4xl font-bold leading-8 text-center text-white uppercase md:text-left md:text-6xl'>
        {title}
      </h2>
      <div className='flex flex-col items-center w-full h-auto m-auto md:items-stretch md:flex-row justify-evenly '>
        {categoryOne && <Card className={'service-card'} bgColor={'white'} titleColor={aquaGreenHex} title={categoryOne.category} 
            body={categoryOne.description} 
            link={`services#${categoryOne.category.trim().split(' ').join('-')}`}
            icon={<Survey className='w-full h-full' fill={aquaGreenHex}></Survey>}>
                            
            </Card>
        }
        {categoryTwo && <Card className={'service-card'} bgColor={aquaGreenHex} titleColor={'white'}  title={categoryTwo.category} 
            body={categoryTwo.description} 
            link={`services#${categoryTwo.category.trim().split(' ').join('-')}`}
            icon={<Shovel className='w-full h-full' stroke={'white'}></Shovel>}>
              
            </Card>
        }
        {categoryThree && <Card className={'service-card'} bgColor={aquaBlueHex} titleColor={'white'}  title={categoryThree.category} 
            body={categoryThree.description} 
            link={`services#${categoryThree.category.trim().split(' ').join('-')}`}
            icon={<Pipe className='w-full h-full' fill={'white'}></Pipe>}>
              
            </Card>
        }
      </div>
    </div>
  </Hero>)
}