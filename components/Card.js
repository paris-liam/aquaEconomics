import Pipe from "../lib/Pipe"
import { aquaGreenHex, aquaBlueHex } from "../lib/constants"

export const Card = ({ theme, title, body, link }) => {
    const themeMap = {
      'white': {
        bgColor: 'white',
        fill: aquaGreenHex,
        title: aquaGreenHex
      },
      'aquaGreen': {
        bgColor: aquaGreenHex,
        fill: 'white',
        title: 'white'
      },
      'aquaBlue': {
        bgColor: aquaBlueHex,
        fill: 'white',
        title: 'white'
      }
    }
     return (<div style={{ backgroundColor: themeMap[theme].bgColor }} className='flex flex-col w-1/2 h-auto pl-4 mb-10 md:w-1/4'><a href={link}>
      {<Pipe className='w-1/2 h-1/2 md:h-auto md:w-auto' fill={themeMap[theme].fill}></Pipe>}
      <h3 style={{color: themeMap[theme].title }} className='text-2xl text-aqua-green'>{title}</h3>
      <p className='hidden md:block'>{body}</p>
      <button>Read more ˆ</button>
    </a></div>)
  }