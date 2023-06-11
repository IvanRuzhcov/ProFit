import React from 'react';


function ModalWindowPhoto({ file }: { file: any }): JSX.Element {
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
