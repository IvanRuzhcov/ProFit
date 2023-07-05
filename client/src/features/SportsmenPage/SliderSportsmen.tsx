import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Subscribe } from './type/Subscribe';
import { RootState } from '../../store';
import User from '../auth/types/User';
import style from './SportsmenPage.module.css';

function SliderSportsmen(): JSX.Element {
  const navigate = useNavigate();
  const coachSub = useSelector((store: RootState) => store.user.subscribe);

  const { coach: slides } = coachSub ?? {};

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="">
        {slides?.[0] && <div className={style.title_sub}>Подписки</div>}
      </div>
      <div className={style.container_sub_trainer}>
        {slides?.map((el) => (
          <div
            className={style.container_trainerCard}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/trainerBlog/${el.id}`);
            }}
          >
            <div className={style.img_container_sub}>
              <img
                className={style.img_photo_trainer}
                src={el.profilePicture}
                alt="trainers"
              />
            </div>
            <div className={style.name_trainer_sub}>{el.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SliderSportsmen;
