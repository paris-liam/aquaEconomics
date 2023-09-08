import { useEffect, useState, useRef, RefObject, MutableRefObject } from 'react';
import { Logo } from '../lib/svgs/Logo'
import Link from 'next/link';
import { WaveBackground } from './WaveBackground';
import { useRouter } from 'next/router';

export const headerNavLinkClasses = `block px-4 py-2 text-lg font-sans font-bold hover:text-aqua-green`
export const Header = ({aboutSlideRef}: {aboutSlideRef?: MutableRefObject<null>}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [stickyHeader, setStickyheader] = useState(false);
  const [showWaves, setShowWaves] = useState(true)
  const [hideNav, sethideNav] = useState(true); 

  const [isMobile, setIsMobile] = useState(true)

  const headerRef: RefObject<HTMLElement> = useRef(null)
  const router = useRouter();

  useEffect(() => {
    
    const mobileBreakPoint = headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth  <= 700
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setIsMobile(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700));
    sethideNav(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700))
    
    const onResize = () => {
      setIsMobile(!!(headerRef?.current?.offsetWidth && headerRef?.current?.offsetWidth <= 700))
    }

    const onScrollSticky = () => {
      setStickyheader(window.scrollY >= headerHeight)

    }

    const onScrollWaves = () => {
      //@ts-ignore
      setShowWaves(!!(aboutSlideRef && aboutSlideRef.current && window.scrollY > aboutSlideRef.current.offsetTop))
    
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScrollSticky);
    console.warn(router.asPath);
    if(router.asPath === '/newIndex') {
      setShowWaves(false);
      window.addEventListener("scroll", onScrollWaves);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollSticky);
      if(router.asPath === '/newIndex') {
        window.removeEventListener("scroll", onScrollWaves);
  
      }
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
    <header ref={headerRef} className={`${ !isMobile ? 'overflow-hidden' : ''} bg-white z-30 ${stickyHeader ? 'fixed top-0 left-0 right-0' : 'relative'}`}>
        {!isMobile &&(<div className='absolute w-full h-full h-min-4 z-40'>
          <WaveBackground show={showWaves} header={true}></WaveBackground>
        </div>)}
      <nav
        className={`flex relative overflow-hidden flex-wrap items-center justify-between w-full px-6 py-6 text-lg z-50 text-gray-700 ${isMobile ? `bg-white` : `bg-transparent`} md:px-30`}
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