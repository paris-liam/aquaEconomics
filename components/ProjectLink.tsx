import { ContentfulImagePayload } from "@/lib/types";
import ContentfulImage from "./ContentfulImage";
import Link from "next/link";

type ProjectLinkComponentProps = {
  className: string;
  title: string;
  link: string;
  picture: ContentfulImagePayload;
}


export const ProjectLink = ({ className, picture, title, link }: ProjectLinkComponentProps) => (
  <Link className={`project-link relative block ${className}`} href={link}><ContentfulImage
    className='object-cover w-full h-full'
    src={picture.url}
    width={picture.width}
    height={picture.height}
    alt={picture.title}
  />

    <div className='absolute top-0 bottom-0 left-0 right-0 z-20 bg-black opacity-60 md:opacity-0 project-link-overlay'>    
    </div>
    <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center w-full h-full md:hidden project-title"><h4 className="text-xl text-center font-bold text-white uppercase">{title}</h4></div>
  </Link>

)