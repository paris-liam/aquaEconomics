import ContentfulImage from "../ContentfulImage";
import { Hero } from "../hero";
import { aquaBlueHex } from "../../lib/constants"
import { SlideInfo } from "@/lib/types";

export const ContactSlide = ({backgroundImage, title }: SlideInfo) => (<Hero className="min-h-90vh" overlayColor={aquaBlueHex} background={backgroundImage && <ContentfulImage
  className='object-cover w-full h-full'
  src={backgroundImage?.url}
  width={backgroundImage?.width}
  height={backgroundImage?.height}
  alt={backgroundImage?.title}
/>}>
  <div className='flex flex-col items-center w-full h-75vh'>
    <h2 className='my-12 text-4xl leading-4 font-bold text-white uppercase md:text-6xl'>
      {title || ''}
    </h2>
    <form className="flex flex-col w-3/4 p-4 h-3/4">
      <div className="flex flex-col md:flex-row justify-between h-auto gap-3 grow-0">
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
