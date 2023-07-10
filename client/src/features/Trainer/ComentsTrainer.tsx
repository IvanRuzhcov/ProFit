import React from 'react';
import { useSelector } from 'react-redux';
import { Comments } from './types/Comments';
import { RootState } from '../../store';
import style from './style.module.css';

function ComentsTrainer({ com }: { com: Comments }): JSX.Element {
  const user = useSelector((store: RootState) => store.coach.user);
  const user1 = user.filter((el)=> el.id === com.user_id)

  const { createdAt } = com; 
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', }; // ваши предпочтения к формату
  const date: Date = new Date(createdAt); // Создаем объект Date 
  const formattedDate: string = date.toLocaleString('ru-RU', options);

  return (
    <div className={style.container_comments}>
      <div className={style.comments_img_container}>
        <img
          className={style.img_comments}
          src={user1[0].profilePicture}
          alt=""
        />
      </div>
      <div className={style.container_name_text}>
        <div className={style.comments_name}>{user1[0].name}</div>
        <div className={style.date_message}>{formattedDate}</div>
        <div className={style.comments_text}>{com.comments}</div>
      </div>{' '}
    </div>
  );
}

export default ComentsTrainer;
