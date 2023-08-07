import { useEffect, useState, useRef } from 'react';
import { Logo } from '../lib/logo'

export const headerNavLinkClasses = `block px-4 py-2 text-lg font-sans font-bold hover:text-aqua-green`
export const Header = () => {

  const [hideNav, sethideNav] = useState(false); 

  const [isMobile, setIsMobile] = useState(true)

  const headerRef = useRef(null)
  
  useEffect(() => {
    const mobileBreakPoint = headerRef.current.offsetWidth <= 700
    setIsMobile(headerRef.current.offsetWidth <= 700);
    sethideNav(headerRef.current.offsetWidth <= 700)
    const onResize = () => {
      setIsMobile(headerRef.current.offsetWidth <= 700)
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  },[])

  return (
    <header ref={headerRef}>
      <nav
        className="flex flex-wrap items-center justify-between w-full px-6 py-6 text-lg text-gray-700 bg-white  md:px-30"
      >
        <div>
          <a href="/">
            <Logo></Logo>
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="block w-6 h-6 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => (sethideNav(!hideNav))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div style={{'height': !isMobile ? '100%' : (hideNav && isMobile ? '0px' : '13rem')}} className={`transition-all duration-500 overflow-hidden block w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="pt-4 text-base  text-black-700 text-bold md:flex md:justify-between md:pt-0"
          >
            <li>
              <a className={headerNavLinkClasses} href="about">About Us</a>
            </li>
            <li>
              <a className={headerNavLinkClasses} href="projects">Projects</a>
            </li>
            <li>
              <a className={headerNavLinkClasses} href="services">Services</a>
              <a className={`${headerNavLinkClasses} md:hidden`} href="contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <a href="contact" className={`${headerNavLinkClasses} hidden md:block uppercase border-2 border-black border-solid`}>contact us</a>
      </nav>
    </header>
  )
}