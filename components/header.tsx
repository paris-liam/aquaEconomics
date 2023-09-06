import { useEffect, useState, useRef, RefObject } from 'react';
import { Logo } from '../lib/svgs/Logo'
import Link from 'next/link';

export const headerNavLinkClasses = `block px-4 py-2 text-lg font-sans font-bold hover:text-aqua-green`
export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [stickyHeader, setStickyheader] = useState(false);

  const [hideNav, sethideNav] = useState(true); 

  const [isMobile, setIsMobile] = useState(true)

  const headerRef: RefObject<HTMLElement> = useRef(null)
  
  useEffect(() => {
    const mobileBreakPoint = headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth  <= 700
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setIsMobile(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700));
    sethideNav(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700))
    const onResize = () => {
      setIsMobile(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700))
    }

    const onScroll = () => {
      setStickyheader(window.scrollY >= headerHeight)
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);

    }
  },[]) 

  useEffect(() => {
    const mainElem = document.querySelector('main');
    if(mainElem) {
      mainElem.style.marginTop = `${stickyHeader ? headerHeight : 0}px`
    }
  }, [stickyHeader])


  useEffect(() => {
    sethideNav(isMobile)
  },[isMobile])

  return (
    <header ref={headerRef} className={`bg-white z-50 ${stickyHeader ? 'fixed top-0 left-0 right-0' : ''}`}>
      <nav
        className="flex flex-wrap items-center justify-between w-full px-6 py-6 text-lg text-gray-700 bg-white md:px-30"
      >
        <div>
          <Link href="/">
            <Logo></Logo>
          </Link>
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
            className="pt-4 text-base text-black-700 text-bold md:flex md:justify-between md:pt-0"
          >
            <li>
              <Link className={headerNavLinkClasses} href="/about">About Us</Link>
            </li>
            <li>
              <Link className={headerNavLinkClasses} href="/projects">Projects</Link>
            </li>
            <li>
              <Link className={headerNavLinkClasses} href="/services">Services</Link>
              <Link className={`${headerNavLinkClasses} md:hidden`} href="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className={`${headerNavLinkClasses} hidden md:block uppercase border-2 border-black border-solid`}>contact us</Link>
      </nav>
    </header>
  )
}