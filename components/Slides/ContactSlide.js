import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaBlueHex } from "../../lib/constants"

export const ContactSlide = ({ slideInfo = {} }) => (<Hero overlayColor={aquaBlueHex} background={<ContentfulImage
  className='object-cover w-full h-full'
  src={slideInfo?.backgroundImage?.url}
  width={slideInfo?.backgroundImage?.width}
  height={slideInfo?.backgroundImage?.height}
  alt={slideInfo?.backgroundImage?.title}
/>}>
  <div className='flex flex-col items-center w-full h-full'>
    <h2 className='my-12 text-4xl leading-4 text-white uppercase md:text-6xl'>
      {slideInfo?.title || ''}
    </h2>
    <form className="flex flex-col w-3/4 p-4 h-3/4">
      <div className="flex flex-row justify-between h-auto gap-3 grow-0">
        <div className="flex flex-col"><label className="text-lg text-white">Name</label>
          <input type='name' className="w-full p-1 text-white bg-transparent border border-white"></input></div>
          <div className="flex flex-col"><label className="text-lg text-white">Email</label>
          <input type='name' className="w-full p-1 text-white bg-transparent border border-white"></input></div>
          <div className="flex flex-col"><label className="text-lg text-white">Number</label>
          <input type='name' className="w-full p-1 text-white bg-transparent border border-white"></input></div>
      </div>
      <div className="flex flex-col mt-4 grow"><label className="text-lg text-white">Message</label>
        <textarea className="w-full p-1 text-white bg-transparent border border-white grow" ></textarea></div>
      <div className="mt-4"><button className="w-full p-3 text-white bg-aqua-green">Send Message</button></div>
    </form>
  </div>

</Hero>)
