import Footer from '../components/footer'
import Meta from '../components/meta'
import {Header} from './header'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen antialiased">
        <Header></Header>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
