import { useEffect, useState } from 'react';
import { Logo } from '../lib/logo'

export const headerNavLinkClasses = `block px-4 py-2 text-lg font-sans font-bold hover:text-aqua-green`

export const Header = () => {

  const [hideMobile, setHideMobile] = useState(true); 

  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 700);
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  },[])

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-6
          md:px-30
          px-6
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <a href="#">
            <Logo></Logo>
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => (setHideMobile(!hideMobile))}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div style={{'height': !isMobile ? '100%' : (hideMobile && isMobile ? '0px' : '13rem')}} className={`transition-all duration-500 overflow-hidden block w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="
              pt-4
              text-base text-black-700 text-bold
              md:flex
              md:justify-between 
              md:pt-0
              "
          >
            <li>
              <a className={headerNavLinkClasses} href="about">About Us</a>
            </li>
            <li>
              <a className={headerNavLinkClasses} href="projects">Projects</a>
            </li>
            <li>
              <a className={headerNavLinkClasses} href="services">Services</a>
              <a className={`${headerNavLinkClasses} md:hidden`} href="contact">Contact Us {isMobile ? 'true':'false'}</a>
            </li>
          </ul>
        </div>
        <a href="contact" className={`${headerNavLinkClasses} hidden md:block uppercase border-2 border-black border-solid`}>contact us {isMobile ? 'true':'false'}</a>
      </nav>
    </header>
  )
}