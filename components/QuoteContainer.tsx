import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true }

export const QuoteContainer = ({ quotes }: { quotes: string[] }) => (
      <div className='w-full bg-aqua-blue'>
            <div id="quote" className='relative bg-aqua-blue text-white px-10 py-24 w-11/12 md:w-4/5 m-auto'>
                  <EmblaCarousel quotes={quotes} options={OPTIONS} />
            </div></div>
)
