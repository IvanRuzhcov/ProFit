import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ModalWindowVideo from './ModalWindowVideo';
import Modal from '../Modal/Modal';
import { FileTrainer } from './types/FileTrainer';
import styles from './style.module.css';
import { RootState, useAppDispatch } from '../../store';
import ComentsTrainer from './ComentsTrainer';
import { addComments } from './TrainerSlice';

function VideoLineTrainer({ file }: { file: FileTrainer }): JSX.Element {
  const comment = useSelector((store: RootState) => store.coach.comments.filter((el) => el.files_id === file.id));
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [coment, setComent] = useState('');
  const [coments, setComents] = useState(
    comment.map((el) => el)
  );

  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refDiv.current?.addEventListener('click', showFunction);
  }, [refDiv]);

  const showFunction = (): void => {
    setShow(true);
  };

  function hendlerText(text: React.ChangeEvent<HTMLTextAreaElement>): void {
    text.preventDefault();
    setComent(text.target.value);
  }
  function hendlerButtomCom(): void {
    dispatch(addComments({ comments: coment, files_id: file.id }));
    setComent('');
  }

  return (
    <div className={styles.post_container}>
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
            <div className={styles.soft_text_post}>
              {file.description?.slice(0, 100)}...
            </div>
          )}
          {show && (
            <div className={styles.modal_post}>
              <div className={styles.post_description}>{file?.description}</div>
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
                {comment.map((com)=> <ComentsTrainer com={com} key={com.files_id}/>)}
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
