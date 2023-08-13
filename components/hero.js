import React from 'react';

export const Hero = ({ className, children, background, overlayColor }) => {
    
  return (
    <div className={`relative block w-full overflow-hidden h-90vh ${className}`}>
      <div className='absolute top-0 z-20 w-full h-full hero-main-text'>
        {children}
      </div>
      <div className='z-0 w-full h-full hero-background'>
          {background}
          
      </div>
      {overlayColor && <div style={{'backgroundColor': overlayColor}} className='absolute top-0 bottom-0 left-0 right-0 z-10 shade opacity-80'></div>}
    </div>
  )
}