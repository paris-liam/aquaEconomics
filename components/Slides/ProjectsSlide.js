
import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaGreenHex } from "../../lib/constants"
import { ProjectLink } from "../ProjectLink";

export const ProjectsSlide = () => (<Hero className={'md:h-65vh'} overlayColor={aquaGreenHex} background={<ContentfulImage
    className='object-cover w-full h-full'
    src="/test.jpeg"
    width={400}
    height={400}
    alt="Picture of the author"
  />}>
    <div className='flex flex-col items-center w-full h-full'>
      <h2 className='m-auto text-4xl leading-8 text-white uppercase md:text-6xl'>
        PROJECTS
      </h2>
    <div className='grid w-4/5 grid-cols-3 grid-rows-2 gap-6 m-auto'>
      <ProjectLink className={'row-span-3'} picture={'/test.jpeg'} title={"project one"} link={'/about'}></ProjectLink>
      <ProjectLink picture={'/test.jpeg'} title={"project one"} link={'/about'}></ProjectLink>
      <ProjectLink picture={'/test.jpeg'} title={"project one"} link={'/about'}></ProjectLink>
      <ProjectLink picture={'/test.jpeg'} title={"project one"} link={'/about'}></ProjectLink>
      <ProjectLink picture={'/test.jpeg'} title={"project one"} link={'/about'}></ProjectLink>
    </div>
    </div>
  </Hero>)