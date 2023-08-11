
import { WaveBackground } from "../WaveBackground";
import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { executeScroll } from '../../lib/constants'
export const LandingSlide = ({scrollRef, slideInfo}) => {
  const title = slideInfo?.title || ''
  const contentImagesCollection = slideInfo?.contentImagesCollection || {}
  return (<Hero background={<WaveBackground></WaveBackground>}>
<div className='flex flex-col items-center justify-center w-full h-3/4 md:h-auto md:justify-evenly'>
  <h1 className='w-4/5 m-5 text-2xl leading-8 text-center uppercase md:text-4xl text-aqua-green md:m-10 lg:w-3/4 md:leading-11'>{title}</h1>
  <div className='flex flex-row justify-around w-4/5'>
    {contentImagesCollection?.items?.map((image,index) => (
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
      Learn More
      <svg className='inline-block ml-2' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6754 14.4753L16.6307 13.4507L13.2255 16.9226L13.1606 4.87892L11.6955 4.89945L11.7604 16.9432L8.31824 13.5671L7.28478 14.6208L12.5081 19.7438L17.6754 14.4753Z" fill="white" />
      </svg>
    </button>
  </div>
</div>
</Hero>)}