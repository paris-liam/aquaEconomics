import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { getAllPostsForHome, getHeroText } from '../lib/api'
import {WaveBackground} from '../components/WaveBackground'
import test from '../public/test.jpeg'
import Image from 'next/image'
import ContentfulImage from '../components/contentful-image'
export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
          <Hero background={<WaveBackground></WaveBackground>}>
            <div className='flex w-full h-auto flex-col justify-evenly items-center'>
              <h1 className='text-6xl text-aqua-green uppercase'>title</h1>
              <div className='flex flex-row justify-around'>
                <ContentfulImage
                className='margin-x:8'
                  src="/test.jpeg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
                              <ContentfulImage
                  src="/test.jpeg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
                              <ContentfulImage
                  src="/test.jpeg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
              </div>
              <div>button</div>
            </div>
          </Hero>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) ?? []
  const heroText = (await getHeroText()) ?? {}  
  return {
    props: { allPosts, heroText },
  }
}
