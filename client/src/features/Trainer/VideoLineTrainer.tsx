import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalWindowVideo from './ModalWindowVideo';

function VideoLineTrainer({ file }: { file: any }): JSX.Element {
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
      <div>{file.description?.slice(0, 100)}</div>
      {show && <ModalWindowVideo file={file} />}
    </div>
  );
}

export default VideoLineTrainer;
