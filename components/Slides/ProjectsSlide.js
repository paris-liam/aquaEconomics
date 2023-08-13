
import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaGreenHex } from "../../lib/constants"
import { ProjectLink } from "../ProjectLink";

export const ProjectsSlide = ({slideInfo, highlightedProjects}) => (<Hero overlayColor={aquaGreenHex} background={slideInfo?.backgroundImage && <ContentfulImage
    className='object-cover w-full h-full'
    src={slideInfo?.backgroundImage?.url}
    width={slideInfo?.backgroundImage?.width}
    height={slideInfo?.backgroundImage?.height}
    alt={slideInfo?.backgroundImage?.title}
  />}>
    <div className='flex flex-col items-center w-full h-full'>
      <h2 className='m-auto text-4xl leading-8 text-white uppercase md:text-6xl'>
        {slideInfo?.title || ''}
      </h2>
    <div className='grid w-4/5 grid-cols-1 grid-rows-5 gap-6 m-auto md:grid-cols-3 md:grid-rows-2 h-3/4 '>
    {highlightedProjects?.map((project, index) => (
      <ProjectLink key={`project ${index}`} className={index === 0 ? 'md:row-span-3' : ''} picture={project.headerImage} title={project.title} link={`/projects/${project?.title?.trim().split(' ').join('-')}`}></ProjectLink>
    ))}
    </div>
    </div>
  </Hero>)