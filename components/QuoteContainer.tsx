import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true }

export const QuoteContainer = ({quotes}:{quotes: string[]} ) => (
<div>
      <EmblaCarousel quotes={quotes} options={OPTIONS} />
</div>
)
