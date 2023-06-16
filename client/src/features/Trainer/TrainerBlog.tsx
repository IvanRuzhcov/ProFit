import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RootState, useAppDispatch } from '../../store';
import { addSubscribeTr } from './TrainerSlice';
import VideoLineTrainer from './VideoLineTrainer';
import PhotoLineTrainer from './PhotoLineTrainer';
import styles from './style.module.css';

function TrainerBlog(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const user = useSelector((store: RootState) => store.coach.trenerState);
  const user2 = useSelector((store: RootState) => store.coach.trenerState);
  console.log('====>>>>', user2);

  const coach = user.filter((el) => el.id === Number(id));

  function handelsubscribe(): void {
    dispatch(addSubscribeTr(Number(id)));
  }

  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <div>
      {coach[0] && (
        <>
          <div className={styles.trener_container}>
            <div className={styles.trener_ava_name}>
              <div className={styles.img_container}>
                <img src={coach[0].profilePicture} alt="" />
              </div>
              <div className={styles.info_trainer}>
                <div>
                  <div className={styles.name_trainer}>
                    <h1>{coach[0].login}</h1>
                    <div className="">
                      {coach[0].vertification && <AiOutlineCheckCircle />}
                    </div>
                  </div>
                </div>
                <h2>Обо мне</h2>
                <div>
                  <div>
                    <div>
                      
                      <h2>{coach[0].description}</h2>
                      <h2 className={styles.info_trainer_main}>Город: {coach[0].city}</h2>
                      {coach[0].online && <h2 className={styles.info_trainer_main}>Принимаю онлайн</h2>}
                      <div className={`${styles.btn_margin} `}>
                      <button
                        type="button"
                        onClick={handelsubscribe}
                        className={`${styles.btn_upd} `}
                      >
                        Подписаться
                      </button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {coach[0].Files && (
            <div className={styles.container_post}>
              {coach[0].Files?.map((file) =>
                file.type === 'video' ? (
                  <VideoLineTrainer key={file.id} file={file} />
                ) : (
                  <PhotoLineTrainer key={file.id} file={file} />
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TrainerBlog;
