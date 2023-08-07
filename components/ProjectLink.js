import ContentfulImage from "./contentful-image";

export const ProjectLink = ({className, picture, title, link}) => (
    <a className={`relative block ${className}`} href={link}><ContentfulImage
    className='object-cover w-full h-full'
    src={picture}
    width={400}
    height={400}
    alt="Picture of the author"
  />
    <h4 >{title}</h4>
    <div class='z-20 absolute top-0 left-0 right-0 bottom-0 bg-aqua-blue opacity-0 hover:opacity-60'></div>
  </a>

  )