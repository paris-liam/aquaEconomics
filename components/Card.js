export const Card = ({ icon, title, body, link, bgColor, titleColor, }) => {
  return (<div style={{ backgroundColor: bgColor }} className='flex flex-col w-1/2 h-auto pl-4 mb-10 md:w-1/4'>
    <a href={link}>
      <div>{icon}</div>

      <h3 style={{ color: titleColor }} className='text-2xl text-aqua-green'>{title}</h3>
      <p className='hidden md:block'>{body}</p>
      <button>Read more        <svg className='inline-block ml-2' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6754 14.4753L16.6307 13.4507L13.2255 16.9226L13.1606 4.87892L11.6955 4.89945L11.7604 16.9432L8.31824 13.5671L7.28478 14.6208L12.5081 19.7438L17.6754 14.4753Z" fill="white" />
      </svg></button>
    </a></div>)
}