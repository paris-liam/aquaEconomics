import Layout from '../components/layout'
import { Hero } from '../components/hero'
import { getAllPostsForHome, getHeroText } from '../lib/api'
import { WaveBackground } from '../components/WaveBackground'
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
            <h1 className='text-2xl md:text-4xl text-aqua-green text-center uppercase m-5 md:m-10  w-4/5 lg:w-3/4  leading-8 md:leading-11'>Your Philadelphia Solution for Stormwater Cost Reduction,
              Site Engineering, Surveying, Planning and Zoning</h1>
            <div className='flex flex-row justify-around'>
              <ContentfulImage
                className='hidden md:block w-4/5 md:w-1/3 lg:w-1/4'
                src="/test.jpeg"
                width={400}
                height={400}
                alt="Picture of the author"
              />
              <ContentfulImage
                className='hidden w-4/5 md:block md:w-1/3 lg:w-1/4'
                src="/test.jpeg"
                width={400}
                height={400}
                alt="Picture of the author"
              />
              <ContentfulImage
                className='hidden w-4/5 md:block md:w-1/3 lg:w-1/4'
                src="/test.jpeg"
                width={400}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div>
              <button className='text-white font-sans font-bold p-5 my-10 bg-aqua-green'>
                Learn More
                <svg className='ml-2 inline-block' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6754 14.4753L16.6307 13.4507L13.2255 16.9226L13.1606 4.87892L11.6955 4.89945L11.7604 16.9432L8.31824 13.5671L7.28478 14.6208L12.5081 19.7438L17.6754 14.4753Z" fill="white" />
                </svg>
              </button>
            </div>
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
