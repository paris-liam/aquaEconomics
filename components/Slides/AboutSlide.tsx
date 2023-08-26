import { ContentfulImagePayload, SlideInfo } from "@/lib/types";
import ContentfulImage from "../ContentfulImage";
import { Hero } from "../hero"; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { customMarkdownOptions } from "@/lib/constants";

export const AboutSlide = ({ contentImagesCollection, title, description }: SlideInfo) => {

    return (<Hero className="min-h-90vh"><div className='flex flex-col w-4/5 h-full py-12 m-auto mb-12 about-panel md:flex-row justify-evenly'>
    <div className='grid grid-cols-2 gap-4 h-1/2 md:h-full image-container md:w-1/2 grid-rows-8'>
    {contentImagesCollection?.items?.map((image: ContentfulImagePayload, index: number) => (
      <ContentfulImage
        key={`about image ${index}`}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.title}
        className={`shadow-xl object-cover w-full h-full ${index === 0 ? "col-span-full row-span-full md:col-span-2 " : "col-span-1 hidden md:block"} ${index === 2 ? "md:row-span-3" : "md:row-span-4"}`}
      />
    ))}
    </div>
    <div className='md:ml-10 text-container md:w-1/2 md:my-10'>
        <h2 className='my-5 text-3xl md:text-4xl leading-8 uppercase text-aqua-green'>{title}</h2>
        <div className='my-5 text-xl unreset'>
        {
                documentToReactComponents(description.json, customMarkdownOptions(description))
        }
        </div>
    </div>  
</div></Hero>)}