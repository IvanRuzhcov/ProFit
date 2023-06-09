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
            <li></li>
            <li></li>
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
              {showCertificates && (<div>
                user.Certificates.["url_cert"]
              </div>)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrainerPersonalPage;

// запрос в базу на получение всех файлов этого тренера по айдишнику/логину - параметризированный запрос
// модалка и проваливание в видео - комментарии, форма добавления коммента, само видео, слайдер в бок
// видео строго фиксированного размера
// сделать норм фото с аватаркой
// в шапке навбара должен быть логин
