import React from 'react'
import heroVid from './assets/video.mp4'

function Hero():JSX.Element {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay loop muted/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-[#f5d629] px-4 text-center'>
          <h1 className='text-8xl font-bold tracking-widest'><span className='orange'>ProFit</span></h1>
          <h1 className='text-5xl py-2 tracking-wider mt-10'><span className='blue'>Training Video Area</span></h1>
          <p className='text-4xl font-semibold'><div className='wrapper'><div className='typing-demo'><span className='blue'>Sport, Style, Video...</span></div></div></p>
      </div>
    </div>
  )
}

export default Hero