import React, { useEffect, useRef, useState } from 'react';
import ModalWindowPhoto from './ModalWindowPhoto';
import Modal from '../Modal/Modal';
import { FileTrainer } from './types/FileTrainer';
import styles from './style.module.css';

function PhotoLineTrainer({ file }: { file: FileTrainer }): JSX.Element {
  const [show, setShow] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);
  console.log(file, 'ffffffffffffff');

  useEffect(() => {
    refDiv.current?.addEventListener('click', showFunction);
  }, [refDiv]);

  const showFunction = (): void => {
    setShow(true);
  };

  return (
    <div ref={refDiv} className={styles.post_container}>
      <img src={file.url} alt="my photos" className={styles.img_post} />
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
                <textarea className={styles.input_post} />
              </div>
            </div>
            <div className={styles.comment_post_text}>Комментарии к текущему посту:</div>
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
