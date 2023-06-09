import React, { useState } from 'react';
// AiOutlineCheckCircle
import { AiOutlineCheckCircle } from 'react-icons/ai';

function TrainerPersonalPage(): JSX.Element {
  const [showCertificates, setshowCertificates] = useState(false);
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
    Files: [{ url: 'https://www.youtube.com/watch?v=ug49OQFB-6s', description: 'training video' }],
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
                </div>
              )}
            </li>
          </ul>
        </div>

      </div>
      {/* <iframe src={user.Files[0].url} title='traininig video' allowFullScreen /> */}
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
