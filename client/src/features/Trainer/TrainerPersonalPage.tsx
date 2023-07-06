import React, { useEffect, useRef, useState } from 'react';
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
import { changeAvatar, upSportsmen } from '../auth/authSlice';

function TrainerPersonalPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
  const refAvatar = useRef<HTMLInputElement>(null);
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

  const changeTrainerAvatar = (): void => {
    const formData = new FormData();
    if (refAvatar.current) {
      if (refAvatar.current?.files && user) {
        if (user.id) {
          const url = refAvatar.current.files[0];
          if (url) {
            const { id } = user;
            formData.append('url', url);
            formData.append('id', String(id));
            dispatch(changeAvatar(formData));
          }
        }
      }
    }
  };

  return (
    <div className={styles.trener_container}>
      <div className={styles.trener_ava_name}>
        <div className={styles.img_container}>
          <img
            src={user?.profilePicture}
            alt="avatar"
            className={styles.img_ava_trainer}
          />
        </div>
        <div className={styles.info_trainer}>
          <div className={styles.name_trainer}>
            <h1>{user?.login}</h1>
            <div className="">
              {user?.vertification && <AiOutlineCheckCircle />}
            </div>
          </div>
          <h2>Обо мне</h2>
          <div>
            <div>
              <div>
                <div>
                  <h1 className={styles.name_trainer}>{user?.name}</h1>
                  <h2 className={styles.info_trainer_main}>
                    {user?.description}
                  </h2>
                  <h2 className={styles.city_trainer_main}>
                    Город: {user?.city}
                  </h2>
                 

                  <div className="">
                    {user?.online && (
                      <h2 className={styles.online_trainer_main}>
                        Принимаю онлайн
                      </h2>
                    )}
                  </div>
                </div>
                <div className={styles.container_btn_trainer_info}>
                    <div>
                      <button
                        className={styles.bn5}
                        type="button"
                        onClick={() => setShowFormAdd(true)}
                      >
                        Добавить пост
                      </button>
                    </div>
                  {showFormAdd && (
                    <Modal active={showFormAdd} setActive={setShowFormAdd}>
                      <FormAddPost showForm={showForm} />
                    </Modal>
                  )}
                  <div>
                    {!showFormAddInfo && (
                      <div>
                        <button
                          type="button"
                          onClick={() => setShowFormAddInfo(true)}
                          className={styles.bn5}
                        >
                          Редактировать
                        </button>
                      </div>
                    )}
                  </div>
                  {showFormAddInfo && (
                    <Modal
                      active={showFormAddInfo}
                      setActive={setShowFormAddInfo}
                    >
                      <div className={styles.info_form_container}>
                        <div className={styles.dowland_file}>
                          <div>
                            <input
                              type="file"
                              id="file"
                              className={styles.bn5}
                              ref={refAvatar}
                            />
                          </div>
                          <div>
                            <button
                              className={styles.bn5}
                              type="button"
                              onClick={changeTrainerAvatar}
                            >
                              Загрузить фото
                            </button>
                          </div>
                        </div>
                        <div className={styles.input_edit_container}>
                          <div>
                            <input
                              type="text"
                              className={styles.input_edit}
                              placeholder="Изменить/добавить имя"
                              defaultValue={sportsmen?.name}
                              onChange={(event) => setName(event.target.value)}
                              value={name}
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              className={styles.input_edit}
                              onChange={(event) => setEmail(event.target.value)}
                              value={email}
                              defaultValue={sportsmen?.email}
                              placeholder="Изменить/добавить почту"
                            />
                          </div>

                          <div>
                            <textarea
                              className={styles.input_edit_textarea}
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
                              className={styles.input_edit}
                              onChange={(event) => setCity(event.target.value)}
                              value={city}
                              placeholder="Изменить/добавить Город"
                            />
                          </div>

                          <div>
                            <button
                              className={styles.bn5}
                              type="button"
                              onClick={handlerUpData}
                            >
                              Изменить
                            </button>
                          </div>
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
        <div className={styles.container_post}>
          {user.Files?.map((file) =>
            file.type === 'video' ? (
              <VideoLineTrainer key={file.id} file={file} />
            ) : (
              <PhotoLineTrainer key={file.id} file={file} />
            )
          )}
        </div>
      )}
      <div className={styles.empty}>.</div>
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
