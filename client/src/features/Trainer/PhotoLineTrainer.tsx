import React from 'react'

function PhotoLineTrainer({ file }: { file: any }): JSX.Element {
  return (
    <div>
        <img src={file.url} alt='my photos'/>
    </div>
  )
}

export default PhotoLineTrainer