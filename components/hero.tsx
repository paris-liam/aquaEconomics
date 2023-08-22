
type HeroProps = {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
  background?: JSX.Element[] | JSX.Element;
  overlayColor?: string;
}

export const Hero = ({ className, children, background, overlayColor }: HeroProps) => {
    
  return (
    <div className={`relative block w-full overflow-hidden pb-10 h-auto ${className}`}>
      <div className='w-full h-full hero-main-text'>
        {children}
      </div>
      <div className='absolute -z-20 top-0 bottom-0 left-0 right-0 w-full h-full hero-background'>
          {background}
      </div>
      {overlayColor && <div style={{'backgroundColor': overlayColor}} className='absolute top-0 bottom-0 left-0 right-0 -z-10 shade opacity-80'></div>}
    </div>
  )
}