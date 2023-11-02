
import { WaveBackground } from "../WaveBackground";
import ContentfulImage from "../ContentfulImage";
import { Hero } from "../hero";
import { executeScroll } from '../../lib/constants'
import { SlideInfo } from "@/lib/types";
import { RefObject } from "react";
import { Arrow } from "@/lib/svgs/Arrow";

type LandingSlideProps = {
  slideInfo: SlideInfo,
  scrollRef: RefObject<HTMLElement>
}
export const LandingSlide = ({ scrollRef, slideInfo }: LandingSlideProps) => {
  const title = slideInfo?.title || ''
  const contentImagesCollection = slideInfo?.contentImagesCollection || {}
  return (<Hero className="min-h-90vh" background={<WaveBackground></WaveBackground>}>
    <div className='flex flex-col items-center justify-center w-full h-3/4 md:h-auto md:justify-evenly'>
      <h1 className='w-4/5 m-5 text-2xl leading-8 text-center uppercase md:text-4xl text-aqua-green md:m-10 lg:w-3/4 md:leading-11'>{title}</h1>
      <div className='flex flex-row justify-around w-4/5'>
        {contentImagesCollection?.items?.map((image, index) => (
          <ContentfulImage
            key={`landing image ${index}`}
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.title}
            className={`${index === 1 ? 'block' : 'hidden'} w-4/5 md:block md:w-1/3 lg:w-1/4`}
          />
        ))}
      </div>
      <div>
        <button onClick={() => executeScroll(scrollRef)} className='p-5 my-10 font-sans font-bold text-white bg-aqua-green'>
          Read More
          {<Arrow className={'rotate-180 w-2 inline-block mb-2 mt-1 ml-2'}></Arrow>}
        </button>
      </div>
    </div>
  </Hero>)
}