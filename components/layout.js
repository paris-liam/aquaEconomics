import { useEffect } from 'react'
import Footer from '../components/footer'
import Meta from '../components/meta'
import {Header} from './header'

export default function Layout({ children }) {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add('smooth-scroll')
  },[])
  return (
    <>
      <Meta />
      <div className="min-h-screen antialiased scroll-smooth">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
      
    </>
  )
}
