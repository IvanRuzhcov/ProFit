import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Subscribe } from './type/Subscribe';
import { RootState } from '../../store';
import User from '../auth/types/User';

function SliderSportsmen(): JSX.Element {
  const coachSub = useSelector((store: RootState) => store.user.subscribe);

  const { coach: slides } = coachSub ?? {};

  console.log(slides);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex =
      isFirstSlide && slides?.length ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = slides?.length
      ? currentIndex === slides.length - 1
      : false;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      {slides?.map((el) => (
        <img src={el.profilePicture} style={{width:'100px'}} alt="trainers" />
      ))}
    </div>
    // <div className="black_s">
    //   <div className="max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group">
    //     <div
    //       // style={{ backgroundImage: `url(${slides[0]?.profilePicture})` }}
    //       className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
    //     />
    //     {/* Left Arrow */}
    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    //       <BsChevronCompactLeft onClick={prevSlide} size={35} />
    //     </div>
    //     {/* Right Arrow */}
    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    //       <BsChevronCompactRight onClick={nextSlide} size={35} />
    //     </div>
    //     <div className="flex top-4 justify-center py-2">
    //       {slides?.map((slide, slideIndex) => (
    //         <div
    //           key={slide.id}
    //           onClick={() => goToSlide(slideIndex)}
    //           className="text-2xl cursor-pointer"
    //         >
    //           <img src={slide.profilePicture} alt="trainers" />
    //           <RxDotFilled />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default SliderSportsmen;
