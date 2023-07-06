import React from 'react';
import { useSelector } from 'react-redux';
import { Comments } from './types/Comments';
import { RootState } from '../../store';
import style from './style.module.css';

function ComentsTrainer({ com }: { com: Comments }): JSX.Element {
  const user = useSelector((store: RootState) => store.coach.user);
  console.log(user.filter((el)=> el.id === com.user_id));
  const user1 = user.filter((el)=> el.id === com.user_id)
  // console.log(com.files_id, com.user_id);

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
        <div className={style.comments_text}>{com.comments}</div>
      </div>{' '}
    </div>
  );
}

export default ComentsTrainer;
