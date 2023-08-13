import '../styles/index.css'
import {Roboto_Condensed} from "next/font/google"
import { Open_Sans } from "next/font/google"

const roboto = Roboto_Condensed({
  subsets:['latin'],
  variable: '--font-roboto',
  weight: ['300','400','700'],
  style: ['italic', 'normal']
})
const open_sans = Open_Sans({
  subsets:['latin'],
  variable: '--font-open-sans',
  weight: ["300", "400", "700", "500", "600", "800"],
  style: ['italic', 'normal']
})

function MyApp({ Component, pageProps }: any) {
  return <main className={`${roboto.variable} ${open_sans.variable} font-roboto`}><Component {...pageProps} /></main>
}

export default MyApp
