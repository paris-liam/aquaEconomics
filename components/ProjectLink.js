import ContentfulImage from "./contentful-image";

export const ProjectLink = ({className, picture, title, link}) => (
    <a className={`relative block ${className}`} href={link}><ContentfulImage
    className='object-cover w-full h-full'
    src={picture.url}
    width={picture.width}
    height={picture.height}
    alt={picture.description}
  />
    <h4 >{title}</h4>
    <div className='absolute top-0 bottom-0 left-0 right-0 z-20 opacity-0 bg-aqua-blue hover:opacity-60'></div>
  </a>

  )