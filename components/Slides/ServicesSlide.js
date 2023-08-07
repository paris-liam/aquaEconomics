
import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaGreenHex } from "../../lib/constants"
import { Card } from '../Card'

export const ServicesSlide = () => (<Hero className={'md:h-65vh'} overlayColor={'black'} background={<ContentfulImage
    className='object-cover w-full h-full'
    src="/test.jpeg"
    width={400}
    height={400}
    alt="Picture of the author"
  />}>
    <div className='flex flex-col w-full h-full'>
      <h2 className='m-10 text-4xl leading-8 text-white uppercase md:text-6xl'>
        SERVICES
      </h2>
      <div className='flex flex-col items-center w-full h-auto m-auto md:flex-row justify-evenly xl:w-4/5'>
        {<Card theme='white' fill={aquaGreenHex} title='Stormwater Bill Reduction' body='some body will be placed here as i type and type and tpye' link='/about'></Card>}
        {<Card theme='aquaGreen' fill={'white'} title='Zoning and Division Plans' body='some body will be placed here as i type and type and tpye' link='/about'></Card>}
        {<Card theme='aquaBlue' title='Land and Survey Engineering' body='some body will be placed here as i type and type and tpye' link='/about'></Card>}
      </div>
    </div>
  </Hero>)