import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { Logo } from '../lib/logo'
import { navLinkClasses } from './header'

export const footerNavLinkClasses = `block px-4 py-2 text-xs font-sans hover:text-aqua-green`

export default function Footer() {
  return (
    <footer className="bg-white border-t border-accent-2">
        <div className="flex flex-col py-14 space-evenly">
          <div className='flex justify-center'><Logo></Logo></div>
          <ul className="flex flex-row justify-center py-5 lg:pl-4">
            <li>
              <a className={`${footerNavLinkClasses} md:text-lg`} href="about">About Us</a>
            </li>
            <li>
              <a className={`${footerNavLinkClasses} md:text-lg`} href="projects">Projects</a>
            </li>
            <li>
              <a className={`${footerNavLinkClasses} md:text-lg`} href="services">Services</a>
            </li>
            <li><a className={`${footerNavLinkClasses} md:text-lg`} href="contact">Contact Us</a></li>
          </ul>
          <ul className="flex flex-row justify-center py-5">
            <li>
              <a className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`} href="tel:267-885-9875">+1 (267) 885-9875</a>
            </li>
            <li>
              <a className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`} href="mailto:aqua@aquaeconomics.com">aqua@aquaeconomics.com</a>
            </li>
            <li>
              <span className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`}>address address address</span>
            </li>
          </ul>
        </div>
    </footer>
  )
}
