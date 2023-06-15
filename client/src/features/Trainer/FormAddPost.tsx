import React, { useEffect, useRef, useState } from 'react';
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
  const [show, setShow] = useState(false);
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
  const addLinkFunction = (): void => {
    setShowLink(true);
    setShowChangeTypeFile(true);
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
          formData.append('url', url);
          formData.append('description', description);
          dispatch(uploadFileTrainer(formData));
          showForm(false);
          // добавляет ссылку
        } else if (refUrl.current?.value) {
          const type = 'video';
          const url = refUrl.current?.value;
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(uploadUrlTrainer(formData));
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
          formData.append('description', description);
          dispatch(uploadFileTrainer(formData));
          showForm(false);
        } else if (refUrl.current?.value) {
          // добавляет именно ссылку
          const type = 'photo';
          const url = refUrl.current?.value;
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(uploadUrlTrainer(formData));
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
              onClick={() => setShow(true)}
              ref={refVideo}
            />
            Фото:{' '}
            <input
              className={style.inputs}
              type="radio"
              name="type"
              value="photo"
              ref={refPhoto}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        {show && (
          <div>
            {!showLink && !showBtn && (
              <button
                className={style.bn5}
                onClick={addFileFunction}
                type="button"
              >
                Добавить файл
              </button>
            )}
            {showFile && (
              <div className={style.upload_file}>
                <input type="file" ref={refFile} />
                <div className="">
                  <input
                    className={style.input}
                    type="text"
                    placeholder="Добавьте описание"
                    ref={refDescription}
                  />
                </div>
              </div>
            )}
            {!showFile && (
              <button
                className={style.bn5}
                type="button"
                onClick={addLinkFunction}
              >
                Добавить ссылку
              </button>
            )}
            {showLink && (
              <div className={style.file_push}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Вставьте ссылку"
                  ref={refUrl}
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Добавьте описание"
                  ref={refDescription}
                />
                <button
                  className={style.bn5}
                  type="button"
                  onClick={addFileForFetch}
                >
                  Отправить
                </button>
              </div>
            )}
            {showChangeTypeFile && (
              <div className={style.btn_check}>
                <button
                  className={style.bn5}
                  type="button"
                  onClick={changeTypeFunction}
                >
                  Поменять тип файла
                </button>{' '}
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
        )}
      </form>
    </div>
  );
}

export default FormAddPost;

// добавить функцию, чтобы можно было добавить только или ссылку или видео
