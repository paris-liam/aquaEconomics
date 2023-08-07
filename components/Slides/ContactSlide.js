import ContentfulImage from "../contentful-image";
import { Hero } from "../hero";
import { aquaBlueHex } from "../../lib/constants"

export const ContactSlide = () => (<Hero overlayColor={aquaBlueHex} background={<ContentfulImage
    className='object-cover w-full h-full'
    src="/test.jpeg"
    width={400}
    height={400}
    alt="Picture of the author"
  />}>
    <div className='flex flex-col items-center w-full h-full'>
      <h2 className='m-auto text-4xl leading-8 text-white uppercase md:text-6xl'>
        Ready To Make A Change?
      </h2>
      <form>
        <div><label>Name</label>
        <input></input></div>
        <div><label>Email</label>
        <input></input></div>
        <div><label>Phone</label>
        <input></input></div>
        <div><label>Message</label>
        <input></input></div>
        <div><button>Send Message</button></div>
      </form>
    </div>

  </Hero>)
