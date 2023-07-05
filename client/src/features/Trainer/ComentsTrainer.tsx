import React from 'react';
import { useSelector } from 'react-redux';
import { Comments } from './types/Comments';
import { RootState } from '../../store';
import style from './style.module.css';

function ComentsTrainer({ com }: { com: Comments }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);

  return (
    <div className={style.container_comments}>
      <div className={style.comments_img_container}>
        <img
          className={style.img_comments}
          src={user?.profilePicture}
          alt=""
        />
      </div>
      <div className={style.container_name_text}>
        <div className={style.comments_name}>{user?.name}</div>
        <div className={style.comments_text}>{com.comments}</div>
      </div>{' '}
    </div>
  );
}

export default ComentsTrainer;
