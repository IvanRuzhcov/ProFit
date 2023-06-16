import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { Subscribe } from './type/Subscribe';
import { RootState } from '../../store';

function SliderSportsmen():JSX.Element {
  
  const coachSub = useSelector((store:RootState)=> store.user.subscribe)
    
      const slides: Subscribe[] = coachSub

      console.log(slides);
      

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = ():void => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = ():void => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex:number):void => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div className='black_s'>
      <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      />
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={35} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={35} />
      </div>
      <div className="flex top-4 justify-center py-2">
          {/* {slides.map((slide, slideIndex) => (
            <div
              // key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))} */}
        </div>
        </div>
    </div>
  )
}

export default SliderSportsmen