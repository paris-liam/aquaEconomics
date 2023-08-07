import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const AboutSlide = ({ slideInfo }) => {
  const { slideInfo: { contentImagesCollection, title, description } } = slideInfo

  return (<Hero className={"h-90vh md:h-75vh"}><div className='flex flex-col w-4/5 h-full py-5 m-auto mb-12 about-panel md:flex-row justify-evenly'>
    <div className='grid grid-cols-2 gap-4 image-container md:w-1/2 grid-rows-8'>
      {contentImagesCollection?.items?.map((image, index) => (
        <ContentfulImage
          key={`about image ${index}`}
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.title}
          className={`object-cover w-full h-full col-span-${index === 0 ? '2' : 1} row-span-${index === 2 ? '4' : '3'}`}
        />
      ))}
    </div>
    <div className='md:ml-10 text-container md:w-1/2 md:my-10'>
      <h2 className='my-5 text-4xl leading-8 uppercase text-aqua-green'>{title}</h2>
      <p className='my-5 text-xl'>
        {documentToHtmlString(description)}
      </p>
    </div>
  </div></Hero>)
}