import React, { useRef, useState } from 'react';
import style from './style.module.css';
import { useAppDispatch } from '../../store';
// import assert from 'assert';
import { uploadFileTrainer, uploadUrlTrainer } from '../auth/authSlice';

function FormAddPost({
  showForm,
}: {
  showForm: (value: boolean) => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [showFile, setShowFile] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showChangeTypeFile, setShowChangeTypeFile] = useState(false);
  const refPhoto = useRef<HTMLInputElement>(null);
  const refVideo = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLInputElement>(null);
  const refFile = useRef<HTMLInputElement>(null);
  const refUrl = useRef<HTMLInputElement>(null);

  const resetShowFileLink = (): void => {
    setShowFile(false);
    setShowLink(false);
  };

  const addFileFunction = (): void => {
    setShowFile(true);
    setShowChangeTypeFile(true);
    setShowBtn(true);
  };
  
  const changeTypeFunction = (): void => {
    setShowChangeTypeFile(false);
    resetShowFileLink();
    setShowBtn(false);
  };
  const addFileForFetch = (): void => {
    if (
      (refVideo.current?.checked || refPhoto.current?.checked) &&
      (refFile.current?.files?.[0] || refUrl.current?.value) &&
      refDescription.current?.value
    ) {
      const formData = new FormData();
      // если пользователь добавляет видео
      if (refVideo.current?.checked) {
        // добавляет именно файл
        if (refFile.current?.files?.[0]) {
          const type = 'video';
          const url = refFile?.current?.files?.[0];
          const description = refDescription.current.value;
          formData.append('type', type);
          // assert(url);
          console.log(url);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(uploadFileTrainer(formData));
          showForm(false);
        }
        // если пользователь добавляет фото
      } else if (refPhoto.current?.checked) {
        // добавляет именно файл
        if (refFile.current?.files?.[0]) {
          const type = 'photo';
          const url = refFile?.current?.files?.[0];
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          console.log(url);
          formData.append('description', description);
          dispatch(uploadFileTrainer(formData));
          showForm(false);
        } 
      }
    }
  };

  return (
    <div className={style.divFormAddPost}>
      {/* <button className={style.btnx} type="button" onClick={() => showForm(false)}>
        X
      </button> */}
      <form action="">
        <div className={style.radio_container}>
          Что вы хотите добавить?
          <div className={style.radio_input}>
            Видео:{' '}
            <input
              className={style.inputs}
              type="radio"
              name="type"
              value="video"
              onClick={addFileFunction}
              ref={refVideo}
            />
            Фото:{' '}
            <input
              className={style.inputs}
              type="radio"
              name="type"
              value="photo"
              ref={refPhoto}
              onClick={addFileFunction}
            />
          </div>
        </div>
        
          <div>
            
            {showFile && (
              <div className={style.upload_file}>
                <input type="file" ref={refFile} className={style.input_files}/>
                <div className="">
                  <input
                    className={style.input_post}
                    type="text"
                    placeholder="Добавьте описание"
                    ref={refDescription}
                  />
                </div>
              </div>
            )}
            
            {showChangeTypeFile && (
              <div className={style.btn_check}>
                <button
                  className={style.bn5}
                  type="button"
                  onClick={addFileForFetch}
                >
                  Отправить
                </button>
              </div>
            )}
          </div>
      </form>
    </div>
  );
}

export default FormAddPost;

// добавить функцию, чтобы можно было добавить только или ссылку или видео
