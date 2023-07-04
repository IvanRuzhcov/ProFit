import React from 'react';
import { useSelector } from 'react-redux';
import { Comments } from './types/Comments';
import { RootState } from '../../store';
import style from './style.module.css';

function ComentsTrainer({ com }: { com: Comments }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);

  return (
    <div className={style.container_comments}>
      <div>
        <img
          className={style.img_comments}
          src={user?.profilePicture}
          alt=""
        />
        <div>{user?.name}</div>
      </div>
      <div>{com.comments}</div>
    </div>
  );
}

export default ComentsTrainer;
