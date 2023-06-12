import React, { useEffect, useRef, useState } from 'react';
// AiOutlineCheckCircle
import { AiOutlineCheckCircle } from 'react-icons/ai';
import VideoLineTrainer from './VideoLineTrainer';
import PhotoLineTrainer from './PhotoLineTrainer';
import FormAddPost from './FormAddPost';
import ModalWindowVideo from './ModalWindowVideo';
import ModalWindowPhoto from './ModalWindowPhoto';
import Modal from '../Modal/Modal';

function TrainerPersonalPage(): JSX.Element {
  const [showCertificates, setshowCertificates] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);

  const showForm = (value: boolean): void => {
    setShowFormAdd(value);
  };

  const [modalActive, setModalActive] = useState(true);
  const user = {
    id: 1,
    name: 'Mary',
    login: 'mary11',
    password: '123',
    email: 'mary@mail.ru',
    status: 'trainer',
    online: true,
    description: 'blabla',
    city: 'SPB',
    verificated: true,
    avatar: 'https://photocasa.ru/uploads/posts/2017-07/1499704521_2.jpg',
    Certificates: [
      { url_cert: 'https://fgosvo.ru/uploaded/images/ob-bakalavr_ex.jpg' },
      { url_cert: 'https://fgosvo.ru/uploaded/images/ob-bakalavr_ex.jpg' },
    ],
    Experience: [
      { description: 'Work at kindergarden', date: '2015-2017' },
      { description: 'Work at kindergarden', date: '2015-2017' },
    ],
    SportUser: [{ sport: 'Swimming' }, { sport: 'Dancing' }],
    Files: [
      {
        id: 1,
        type: 'video',
        url: 'https://biteable.com/wp-content/uploads/2023/04/static-assets/homepage/HubpageVideo_Training_16x9_01.mp4',
        description: 'training video',
      },
      {
        id: 2,
        type: 'video',
        url: 'https://biteable.com/wp-content/uploads/2023/04/static-assets/homepage/HubpageVideo_Training_16x9_01.mp4',
        description: 'training video',
      },
      {
        id: 3,
        type: 'video',
        url: 'https://biteable.com/wp-content/uploads/2023/04/static-assets/homepage/HubpageVideo_Training_16x9_01.mp4',
        description: 'training video',
      },
      {
        id: 4,
        type: 'video',
        url: 'https://biteable.com/wp-content/uploads/2023/04/static-assets/homepage/HubpageVideo_Training_16x9_01.mp4',
        description: 'training video',
      },
      {
        id: 5,
        type: 'photo',
        url: 'https://zagony.ru/admin_new/foto/2022-6-10/1654817813/sportivnye-devushki-35-foto_2.jpg',
        description:
          'training videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablablatraining videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablablatraining videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablablatraining videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablablatraining videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablablatraining videoblablablablablavideoblablablablablavideoblablablablablavideoblablablablabla',
      },
      {
        id: 6,
        type: 'photo',
        url: 'https://zagony.ru/admin_new/foto/2022-6-10/1654817813/sportivnye-devushki-35-foto_2.jpg',
        description: 'training video',
      },
      {
        id: 7,
        type: 'photo',
        url: 'https://zagony.ru/admin_new/foto/2022-6-10/1654817813/sportivnye-devushki-35-foto_2.jpg',
        description: 'training video',
      },
      {
        id: 8,
        type: 'photo',
        url: 'https://zagony.ru/admin_new/foto/2022-6-10/1654817813/sportivnye-devushki-35-foto_2.jpg',
        description: 'training video',
      },
    ],
  };
  return (
    <div>
      <div>
        <h3>{user.login}</h3>
      </div>
      <div>
        <div>
          <img src={user.avatar} alt="avatar" />
        </div>
        {user.verificated && <AiOutlineCheckCircle />}
        <button type="button">Подписаться</button>
        <button type="button">Сообщение</button>
      </div>
      <div>
        <h2>Обо мне</h2>
        <div>
          <ul>
            <li>{user.description}</li>
            <li>{user.city}</li>
            <li>
              {user.SportUser.map((sport) => (
                <div>{sport.sport}</div>
              ))}
            </li>
            <li>
              {user.Experience?.map((exp) => (
                <div>
                  <p>{exp.date}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </li>
            {user.online && <li>Принимаю онлайн</li>}
            {!showFormAdd && (
              <li>
                <button type="button" onClick={() => setShowFormAdd(true)}>
                  Добавить пост
                </button>
              </li>
            )}
            {showFormAdd && <Modal active={showFormAdd} setActive={setShowFormAdd}><FormAddPost showForm={showForm} /></Modal> }
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
                <div>
                  {user.Certificates.map((el) => (
                    <div>
                      <img src={el.url_cert} alt="certificate" />
                    </div>
                  ))}
                  <button type="button">Добавить сертификат</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      {user.Files && (
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
