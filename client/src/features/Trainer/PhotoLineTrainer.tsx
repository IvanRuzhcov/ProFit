import { log } from 'console';
import React, { useEffect, useRef, useState } from 'react';
import ModalWindowPhoto from './ModalWindowPhoto';


function PhotoLineTrainer({ file }: { file: any }): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <img src={file.url} alt="my photos" />
      <div>{file.description?.slice(0, 100)}</div>
      <ModalWindowPhoto file={file} />
    </div>
  );
}

export default PhotoLineTrainer;
