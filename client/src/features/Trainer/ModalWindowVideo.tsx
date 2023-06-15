import React, { useState } from 'react';
import style from './style.module.css'

function ModalWindowVideo({ file }: { file: any }): JSX.Element {
  return (
    <div>
      <div>
        <video
          src={file.url}
          width="600px"
          height="300px"
          autoPlay
          loop
          muted
          playsInline
        >
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
        </video>
        <div>{file.description}</div>
        <div>Добавить комментарий</div>
        <div>
          <input className={style.input} type="text" placeholder="Прокомментируйте" />
        </div>
        <div>Комментарии к текущему посту:</div>
      </div>
    </div>
  );
}

export default ModalWindowVideo;
