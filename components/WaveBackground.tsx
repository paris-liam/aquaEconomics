import styled from 'styled-components'

const Ocean = styled.div`
  height: 5%;
  width:100%;
  position: absolute;
  bottom:0;
  left:0;
`
const Wave = styled.div`
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg') repeat-x; 
  position: absolute;
  ${
    //@ts-ignore
    ({header}) => header ?  `top:60px;` : `top:-198px;`
  }
  width: 6400px;
  height: 158px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  
  &:nth-of-type(2) {
    ${
      //@ts-ignore
      ({header, show}) => header ?  `
        top: ${show ? `-50px;`:`50px;`}
        transition: top 2s ease-in-out;`
        : `top:-175px;`
    }
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }
`

export const WaveBackground = ({header=false, show=true}: {header?:boolean; show?:boolean;}) => (
<>
    {/* @ts-ignore */}
    <Ocean header={header}>
      {/* @ts-ignore*/}
      <Wave show={show} header={header}></Wave>
      {/* @ts-ignore*/}
      <Wave show={show} header={header}></Wave>
    </Ocean>
  </>
)