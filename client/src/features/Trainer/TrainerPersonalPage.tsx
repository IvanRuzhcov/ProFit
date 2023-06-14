import React, { useState } from 'react';
// AiOutlineCheckCircle
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import VideoLineTrainer from './VideoLineTrainer';
import PhotoLineTrainer from './PhotoLineTrainer';
import FormAddPost from './FormAddPost';
import Modal from '../Modal/Modal';
import { RootState } from '../../store';

function TrainerPersonalPage(): JSX.Element {
  const [showCertificates, setshowCertificates] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  console.log( user  );
  
  const showForm = (value: boolean): void => {
    setShowFormAdd(value);
  };

  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <div>
        <h3>{user?.login}</h3>
      </div>
      <div>
        <div>
          <img src={user?.profilePicture} alt="avatar" />
        </div>
        {user?.vertification && <AiOutlineCheckCircle />}
        <button type="button">Подписаться</button>
        <button type="button">Сообщение</button>
      </div>
      <div>
        <h2>Обо мне</h2>
        <div>
          <ul>
            <li>{user?.description}</li>
            <li>{user?.city}</li>
            {/* <li>
              {user?.map((sport) => (
                <div>{sport.sport}</div>
              ))}
            </li> */}
            {/* <li>
              {user?.?.map((exp) => (
                <div>
                  <p>{exp.date}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </li> */}
            {user?.online && <li>Принимаю онлайн</li>}
            {!showFormAdd && (
              <li>
                <button type="button" onClick={() => setShowFormAdd(true)}>
                  Добавить пост
                </button>
              </li>
            )}
            {showFormAdd && (
              <Modal active={showFormAdd} setActive={setShowFormAdd}>
                <FormAddPost showForm={showForm} />
              </Modal>
            )}
            <li>
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
            </li>
          </ul>
        </div>
      </div>
      {user?.Files&& (
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
