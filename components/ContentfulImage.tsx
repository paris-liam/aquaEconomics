import Image from 'next/image'
type contentfulLoaderProps = {
  src: string;
  width?: string;
  quality?: number;
  alt?: string;
}

const contentfulLoader = ({ src, width, quality }: contentfulLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props: any) => {
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />
}

export default ContentfulImage
