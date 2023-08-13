import { useEffect } from 'react'
import Footer from '../components/footer'
import Meta from '../components/meta'
import {Header} from './header'

type LayoutProps = { children: React.ReactNode}

export default function Layout({ children }: LayoutProps) {
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
