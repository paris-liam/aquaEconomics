import { aquaGreenHex } from "../lib/constants"


export const Card = ({ className, icon, title, body, link, bgColor, titleColor, }) => {
  return (<a className={` block w-8/12 h-full md:w-1/4 ${className}`} href={link}><div style={{ backgroundColor: bgColor }} className='flex flex-col items-start w-full h-auto p-3 mx-auto mb-4 shadow-2xl'>
      <div className="w-1/3 m-auto md:w-1/2 md:mb-5">{icon}</div>
      <h3 style={{ color: titleColor }} className='w-full text-2xl text-center md:text-left md:mb-2'>{title}</h3>
      <p className='hidden md:block md:mb-2'>{body}</p>
      <button className={`py-1 px-3 text-l hidden md:block border border-white ${bgColor === 'white' ? 'bg-aqua-green text-white' : bgColor === aquaGreenHex ? 'bg-white text-aqua-green' : 'bg-aqua-blue text-white'}`}>Read more 
      <svg className='inline-block ml-2 rotate-220' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6754 14.4753L16.6307 13.4507L13.2255 16.9226L13.1606 4.87892L11.6955 4.89945L11.7604 16.9432L8.31824 13.5671L7.28478 14.6208L12.5081 19.7438L17.6754 14.4753Z" fill="currentColor" />
      </svg></button>
    </div></a>)
}