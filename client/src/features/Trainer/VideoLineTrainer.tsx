import React, { useEffect, useRef, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import ModalWindowVideo from './ModalWindowVideo';
import Modal from '../Modal/Modal';
import { FileTrainer } from './types/FileTrainer';
import styles from './style.module.css';
import { RootState, useAppDispatch } from '../../store';
import ComentsTrainer from './ComentsTrainer';
import { addComments } from './TrainerSlice';
import { deletePost } from '../auth/authSlice';

function VideoLineTrainer({ file }: { file: FileTrainer }): JSX.Element {
  const comment = useSelector((store: RootState) =>
  store.coach.comments.filter((el) => el.files_id === file.id)
  );
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [coment, setComent] = useState('');
  const [coments, setComents] = useState(comment.map((el) => el));
  
  const [showModalDelete, setShowModalDelete] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;

  const currentComments = comment.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const nextPage = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = (): void => {
    setCurrentPage((prPage) => prPage - 1);
  };

  // это для того чтобы все посты начинались с больой буквы
  const capitalized =
    file.description.charAt(0).toUpperCase() + file.description.slice(1);

  const refDiv = useRef<HTMLDivElement>(null);

  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    refDiv.current?.addEventListener('click', showFunction);
  }, [refDiv]);

  const showFunction = (): void => {
    setShow(true);
  };

  const delPost: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    dispatch(deletePost(file.id));
  };

  function hendlerText(text: React.ChangeEvent<HTMLTextAreaElement>): void {
    text.preventDefault();
    setComent(text.target.value);
  }

  const dateNow = new Date().toString()

  function hendlerButtomCom(): void {
    dispatch(addComments({ comments: coment, files_id: file.id, createdAt: dateNow }));
    setComent('');
  }

  return (
    <div className={styles.post_container}>
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
      <div ref={refDiv}>
        <video className={styles.img_post} src={file.url} playsInline controls>
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
        </video>
        <div className={styles.soft_text_post}>
          {!show && (
            <div className={styles.soft_text_post_small}>
              {capitalized.slice(0, 100)}...
            </div>
          )}
          {show && (
            <div className={styles.modal_post}>
              <div className={styles.post_description}>{capitalized}</div>
              <div className={styles.btn_post}>
                <div>Добавить комментарий:</div>
              </div>
              <div>
                <div className={styles.text_container_input}>
                  <textarea
                    className={styles.input_post}
                    onChange={hendlerText}
                    value={coment}
                  />
                </div>

                <div className={styles.bn6}>
                  <button type="button" onClick={hendlerButtomCom}>
                    Добавить
                  </button>
                </div>
              </div>
              <div className={styles.comment_post_text}>
                Комментарии к текущему посту:
              </div>
              <div>
                {currentComments.map((com) => (
                  <ComentsTrainer com={com} key={com.files_id} />
                ))}
              </div>
                <div className={styles.container_btn5_1}>
                <button
                  type="button"
                  onClick={prevPage}
                  className={styles.bn5}
                  disabled={currentPage === 1}
                >
                  Предыдущая страница
                </button>
                <button
                  type="button"
                  className={styles.bn5}
                  onClick={nextPage}
                  disabled={currentComments.length < commentsPerPage}
                >
                  Следующая страница
                </button>
                </div>
            </div>
          )}
        </div>
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

export default VideoLineTrainer;
