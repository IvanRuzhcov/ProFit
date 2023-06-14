import React from 'react'
import About from './About'
import Carousel from './Carousel'
import Hero from './Hero'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainPage():JSX.Element {
  return (
    <div>
      <Hero />
      <Carousel />
      <About />
    </div>
  )
}

export default MainPage