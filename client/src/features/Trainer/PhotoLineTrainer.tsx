import { log } from 'console';
import React, { useEffect, useRef, useState } from 'react';
import ModalWindowPhoto from './ModalWindowPhoto';
import Modal from '../Modal/Modal';

function PhotoLineTrainer({ file }: { file: any }): JSX.Element {
  const [show, setShow] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refDiv.current?.addEventListener('click', showFunction);
  }, [refDiv]);

  const showFunction = (): void => {
    setShow(true);
  };

  return (
    <div ref={refDiv}>
      <img src={file.url} alt="my photos" />
      <div>{file.description?.slice(0, 100)}</div>
      {show && <Modal active={show} setActive={setShow}><ModalWindowPhoto file={file} /></Modal>}
    </div>
  );
}

export default PhotoLineTrainer;
