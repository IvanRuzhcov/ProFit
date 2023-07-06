import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalWindowPhoto from './ModalWindowPhoto';
import Modal from '../Modal/Modal';
import { FileTrainer } from './types/FileTrainer';
import styles from './style.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addComments } from './TrainerSlice';
import ComentsTrainer from './ComentsTrainer';
import { deletePost } from '../auth/authSlice';

function PhotoLineTrainer({ file }: { file: FileTrainer }): JSX.Element {
  const [show, setShow] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [coment, setComent] = useState('');
  const user = useSelector((store: RootState) => store.auth.user);

  const delPost: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    dispatch(deletePost(file.id));
  };

  const comment = useSelector((store: RootState) =>
    store.coach.comments.filter((el) => el.files_id === file.id)
    );
    
  const [coments, setComents] = useState(comment.map((el) => el));

  // это для того чтобы все посты начинались с больой буквы
  const capitalized = file.description.charAt(0).toUpperCase() + file.description.slice(1)

  function hendlerText(text: React.ChangeEvent<HTMLTextAreaElement>): void {
    text.preventDefault();
    setComent(text.target.value);
  }

  function hendlerButtomCom(): void {
    dispatch(addComments({ comments: coment, files_id: file.id }));
    setComent('');
  }
  useEffect(() => {
    refDiv.current?.addEventListener('click', showFunction);
  }, [refDiv]);

  const showFunction = (): void => {
    setShow(true);
  };

  return (
    <div ref={refDiv} className={styles.post_container}>
      <div className={styles.delete_icon_container}>
        {user?.status === 'coach' ? (
          <Tooltip title="Удалить запись">
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => setShowModalDelete(true)}
              className={styles.delete_icon}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <div className={styles.fake_div} />
        )}

        {showModalDelete && (
          <Modal active={showModalDelete} setActive={setShowModalDelete}>
            <div className="">
              <div className={styles.text_delete_modal}>Удалить запись?</div>
              <button
                type="button"
                className={styles.bn5}
                onClick={() => setShowModalDelete(false)}
              >
                Оставить
              </button>
              <button className={styles.bn5} type="button" onClick={delPost}>
                Удалить
              </button>
            </div>
          </Modal>
        )}
      </div>
      <img src={file.url} alt="my photos" className={styles.img_post} />
      <div className={styles.soft_text_post}>
        {!show && (
          <div className={styles.soft_text_post_small}>
            {capitalized.slice(0, 100)}...
          </div>
        )}
        {show && (
          <div className={styles.modal_post}>
            <div className={styles.post_description}>{capitalized}</div>
            <div className={styles.btn_post} />
            <div className={styles.pad15}>
              <div>Добавить комментарий:</div>
            </div>
            <div className={styles.pad15}>
              <div className={styles.text_container_input}>
                <textarea
                  className={styles.input_post}
                  onChange={hendlerText}
                  value={coment}
                />
              </div>

              <div className={styles.bt6}>
              <div className={styles.bn6}>
                <button type="button" onClick={hendlerButtomCom}>
                  Добавить
                </button>
              </div>
              </div>
            </div>
            <div className={styles.comment_post_text}>
              Комментарии к текущему посту:
            </div>
            <div>
                {comment.map((com)=> <ComentsTrainer com={com} key={com.files_id}/>)}
            </div>
          </div>
        )}
      </div>
      {show && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={styles.bn5}
        >
          Скрыть
        </button>
      )}
    </div>
  );
}

export default PhotoLineTrainer;
