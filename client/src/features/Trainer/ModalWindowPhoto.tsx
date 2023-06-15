import React from 'react';
import { FileTrainer } from './types/FileTrainer';


function ModalWindowPhoto({ file }: { file: FileTrainer }): JSX.Element {
    
  return (
    <div>
      <img src={file.url} alt="my photos" />
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
