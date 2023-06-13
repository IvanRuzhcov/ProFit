import React from 'react'
import heroVid from "./assets/video.mp4"

function Hero():JSX.Element {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay loop muted/>
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-[#ffb084] px-4 text-center'>
          <h1 className='text-5xl font-bold tracking-widest'><span className='orange'>PROFIT.</span></h1>
          <h1 className='py-2 tracking-wider mt-10'><span className='blue'>Training</span> Video Area</h1>
          <p className='text-2xl font-bold tracking-wider text-white'>Stories, style, and sporting video for you!</p>
          <div>
          <button className='bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-3 px-7 rounded-3xl mt-10 text-white'>Find your coach</button>
      </div>
      </div>
    </div>
  )
}

export default Hero