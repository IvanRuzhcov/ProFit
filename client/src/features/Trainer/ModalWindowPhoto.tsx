import React from 'react';
import styles from './style.module.css';
import { FileTrainer } from './types/FileTrainer';



function ModalWindowPhoto({ file }: { file: FileTrainer }): JSX.Element {
    
  return (
    <div className={styles.modal_post}>
      <img src={file.url} alt="my photos" className={styles.img_post_modal}/>
      <div>{file?.description}</div>
      <div>Добавить комментарий</div>
      <div>
        <input type="text" placeholder="Прокомментируйте" />
      </div>
      <div>Комментарии к текущему посту:</div>
    </div>
  );
}

export default ModalWindowPhoto;
