import React from 'react';

export const Hero = ({ children, background }) => {
    
  return (
    <div className='relative w-full h-75vh block overflow-hidden'>
      <div className='hero-main-text z-2 w-full h-full absolute top-0'>
        {children}
      </div>
      <div className='hero-background z-0 w-full h-full'>
          {background}
      </div>
    </div>
  )
}