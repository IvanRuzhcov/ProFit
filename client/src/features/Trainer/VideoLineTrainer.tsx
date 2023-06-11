import React from 'react';

function VideoLineTrainer({ file }: { file: any }): JSX.Element {
  return <div>
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
  </div>;
}

export default VideoLineTrainer;
