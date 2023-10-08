import { MutableRefObject, Ref, useEffect } from 'react'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { Header } from './header'

type LayoutProps = {
  children: React.ReactNode;
  aboutSlideRef?: MutableRefObject<null>;
}

export default function Layout({ aboutSlideRef, children }: LayoutProps) {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add('smooth-scroll')
  }, [])
  return (
    <>
      <Meta />
      <div className="min-h-screen antialiased scroll-smooth">
        <main className='relative'>
          <Header aboutSlideRef={aboutSlideRef} />
          <div className='relative'>{children}</div>
          <Footer />
        </main>
      </div>

    </>
  )
}
