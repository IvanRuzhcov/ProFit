import React, { useEffect, useState } from 'react';
// AiOutlineCheckCircle
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VideoLineTrainer from './VideoLineTrainer';
import PhotoLineTrainer from './PhotoLineTrainer';
import FormAddPost from './FormAddPost';
import Modal from '../Modal/Modal';
import { RootState, useAppDispatch } from '../../store';
// import { style } from '@mui/system';
import styles from './style.module.css';
import { upSportsmen } from '../auth/authSlice';

function TrainerPersonalPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [showCertificates, setshowCertificates] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showFormAddInfo, setShowFormAddInfo] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);

  const sportsmen = useSelector((store: RootState) => store.auth.user);
  const [modalUpdat, setModalUpdat] = useState(false);
  const [name, setName] = useState(sportsmen ? sportsmen.name : '');
  const [email, setEmail] = useState(sportsmen ? sportsmen.email : '');
  const [modalActive, setModalActive] = useState(true);
  const [description, setDescription] = useState(
    sportsmen ? sportsmen.description : ''
  );
  const [city, setCity] = useState(sportsmen ? sportsmen.city : '');

  const showForm = (value: boolean): void => {
    setShowFormAdd(value);
  };

  function handlerUpData(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    dispatch(
      upSportsmen({ id: sportsmen?.id, name, email, description, city })
    );

    setShowFormAddInfo(!showFormAddInfo);
  }

  useEffect(() => {
    if (user?.status === 'sportsman') {
      navigate('/sportsmanpage');
    }
  }, [navigate, user]);


  return (
    <div className={styles.trener_container}>
      <div className={styles.trener_ava_name}>
        <div className={styles.img_container}>
          <img src={user?.profilePicture} alt="avatar" />
        </div>
        <div className={styles.info_trainer}>
          {user?.vertification && <AiOutlineCheckCircle />}
          <div>
            <h1>{user?.login}</h1>
          </div>
          <h2>Обо мне</h2>
          <div>
            <div>

              <div>
                <h2>{user?.description}</h2>
                <h2>{user?.city}</h2>
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

                {user?.online && <h2>Принимаю онлайн</h2>}
                {!showFormAdd && (
                  <div>
                    <button className={styles.bn5} type="button" onClick={() => setShowFormAdd(true)}>
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
                  <button className={styles.bn5} type="button" onClick={() => {
                      setshowCertificates(!showCertificates);
                    }}
                  >
                    Cертификаты
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
                        <button className={styles.bn5} type="button">Cертификат</button>
                      </div>
                    </Modal>
                  )}
                </div>
              <div>
                {!showFormAddInfo && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowFormAddInfo(true)}
                    >
                      Редактировать профиль
                    </button>
                  </div>
                )}
                {showFormAddInfo && (
                  <Modal
                    active={showFormAddInfo}
                    setActive={setShowFormAddInfo}
                  >
                    <div className={styles.info_form_container}>
                        <div>
                          <div>
                            <input type="file" id="file" />
                          </div>
                          <div>
                            <button type="button">Загрузить фото</button>
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Изменить/добавить имя"
                            defaultValue={sportsmen?.name}
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            className={styles.input}
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            defaultValue={sportsmen?.email}
                            placeholder="Изменить/добавить почту"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            className={styles.input}
                            onChange={(event) =>
                              setDescription(event.target.value)
                            }
                            value={description}
                            placeholder="Изменить/добавить Описание"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            className={styles.input}
                            onChange={(event) => setCity(event.target.value)}
                            value={city}
                            placeholder="Изменить/добавить Город"
                          />
                        </div>

                        <div>
                          <button
                            className={styles.btn_upd}
                            type="button"
                            onClick={handlerUpData}
                          >
                            Изменить
                          </button>
                        </div>

                    </div>
                  </Modal>
                )}
              </div>
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
