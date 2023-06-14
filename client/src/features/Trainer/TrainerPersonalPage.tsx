import React, { useEffect, useState } from 'react';
// AiOutlineCheckCircle
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VideoLineTrainer from './VideoLineTrainer';
import PhotoLineTrainer from './PhotoLineTrainer';
import FormAddPost from './FormAddPost';
import Modal from '../Modal/Modal';
import { RootState } from '../../store';
// import { style } from '@mui/system';
import styles from './style.module.css';

function TrainerPersonalPage(): JSX.Element {
  const navigate = useNavigate();
  const [showCertificates, setshowCertificates] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);

  const showForm = (value: boolean): void => {
    setShowFormAdd(value);
  };

  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    if (user?.status === 'sportsman') {
      navigate('/sportsmanpage');
    }
  }, [navigate, user]);

  return (
    <div className={styles.trener_container}>
      <div className={styles.trener_ava_name}>
        <div>
          <img src={user?.profilePicture} alt="avatar" />
        </div>
        <div className={styles.info_trainer}>
          {user?.vertification && <AiOutlineCheckCircle />}
          <div>
            <h3>{user?.login}</h3>
          </div>
            <h2>Обо мне</h2>
            <div>
              <div>
                <div>{user?.description}</div>
                <div>{user?.city}</div>
                {/* <div>
              {user?.map((sport) => (
                <div>{sport.sport}</div>
              ))}
            </div> */}
                {/* <div>
              {user?.?.map((exp) => (
                <div>
                  <p>{exp.date}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div> */}
                {user?.online && <div>Принимаю онлайн</div>}
                {!showFormAdd && (
                  <div>
                    <button type="button" onClick={() => setShowFormAdd(true)}>
                      Добавить пост
                    </button>
                  </div>
                )}
                {showFormAdd && (
                  <Modal active={showFormAdd} setActive={setShowFormAdd}>
                    <FormAddPost showForm={showForm} />
                  </Modal>
                )}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setshowCertificates(!showCertificates);
                    }}
                  >
                    Посмотреть сертификаты
                  </button>
                  {showCertificates && (
                    <Modal
                      active={showCertificates}
                      setActive={setshowCertificates}
                    >
                      <div>
                        {user?.Certificates?.map((el) => (
                          <div>
                            <img src={el.url_cert} alt="certificate" />
                          </div>
                        ))}
                        <button type="button">Добавить сертификат</button>
                      </div>
                    </Modal>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>

      {user?.Files && (
        <div>
          {user.Files?.map((file) =>
            file.type === 'video' ? (
              <VideoLineTrainer key={file.id} file={file} />
            ) : (
              <PhotoLineTrainer key={file.id} file={file} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default TrainerPersonalPage;

// запрос в базу на получение всех файлов этого тренера по айдишнику/логину - параметризированный запрос
// модалка и проваливание в видео - комментарии, форма добавления коммента, само видео, слайдер в бок
// видео строго фиксированного размера
// сделать норм фото с аватаркой
// в шапке навбара должен быть логин
// страница редактирования профиля - принимаю онлайн через чекед
// исправить ссылки в видео - сделать мап
