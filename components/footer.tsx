import Link from 'next/link'
import { Logo } from '../lib/svgs/Logo'

export const footerNavLinkClasses = `block px-4 py-2 text-xs font-sans hover:text-aqua-green`

export default function Footer() {
  return (
    <footer className="bg-white border-t border-accent-2">
        <div className="flex flex-col py-14 space-evenly">
          <div className='flex justify-center'><Logo></Logo></div>
          <ul className="flex flex-row justify-center py-5 lg:pl-4">
            <li>
              <Link className={`${footerNavLinkClasses} md:text-lg`} href="about">About Us</Link>
            </li>
            <li>
              <Link className={`${footerNavLinkClasses} md:text-lg`} href="projects">Projects</Link>
            </li>
            <li>
              <Link className={`${footerNavLinkClasses} md:text-lg`} href="services">Services</Link>
            </li>
            <li><Link className={`${footerNavLinkClasses} md:text-lg`} href="contact">Contact Us</Link></li>
          </ul>
          <ul className="flex flex-row justify-center py-5">
            <li>
              <Link className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`} href="tel:267-885-9875">+1 (267) 885-9875</Link>
            </li>
            <li>
              <Link className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`} href="mailto:aqua@aquaeconomics.com">aqua@aquaeconomics.com</Link>
            </li>
            <li>
              <span className={`${footerNavLinkClasses} text-[.5rem] md:text-sm`}>address address address</span>
            </li>
          </ul>
        </div>
    </footer>
  )
}
