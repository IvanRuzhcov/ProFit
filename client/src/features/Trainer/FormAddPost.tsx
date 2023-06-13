import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { useAppDispatch } from '../../store';
import assert from 'assert';

function FormAddPost({
  showForm,
}: {
  showForm: (value: boolean) => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [showLink, setShowLink] = useState(false);
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
  };
  const addLinkFunction = (): void => {
    setShowLink(true);
    setShowChangeTypeFile(true);
  };
  const changeTypeFunction = (): void => {
    setShowChangeTypeFile(false);
    resetShowFileLink();
  };
  const addFileForFetch = (): void => {
    if (
      (refVideo.current?.checked || refPhoto.current?.checked) &&
      (refFile.current?.files?.[0] || refUrl.current?.value) &&
      refDescription.current?.value
    ) {
      const formData = new FormData();
      // если пользователь добавляет видео
      if (refVideo.current) {
        // добавляет именно файл
        if (refFile.current?.files?.[0]) {
          const type = 'video';
          const url = refFile?.current?.files?.[0];
          const description = refDescription.current.value;
          formData.append('type', type);
          // assert(url);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(videoAdd(FormData));
          // добавляет ссылку
        } else if (refUrl.current?.value) {
          const type = 'video';
          const url = refUrl.current?.value;
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(videoAdd(FormData));
        }
        // если пользователь добавляет фото
      } else if (refPhoto.current) {
        // добавляет именно файл
        if (refFile.current?.files?.[0]) {
          const type = 'photo';
          const url = refFile?.current?.files?.[0];
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(photoAdd(FormData));
        } else if (refUrl.current?.value) {
          // добавляет именно ссылку
          const type = 'photo';
          const url = refUrl.current?.value;
          const description = refDescription.current.value;
          formData.append('type', type);
          formData.append('url', url);
          formData.append('description', description);
          dispatch(photoAdd(FormData));
        }
      }
    }
  };

  return (
    <div className={style.divFormAddPost}>
      <button type="button" onClick={() => showForm(false)}>
        X
      </button>
      <form action="">
        <div>
          Что вы хотите добавить?
          <p>
            Видео:{' '}
            <input
              type="radio"
              name="type"
              value="video"
              onClick={() => setShow(true)}
              ref={refVideo}
            />
          </p>
          <p>
            Фото:{' '}
            <input
              type="radio"
              name="type"
              value="photo"
              ref={refPhoto}
              onClick={() => setShow(true)}
            />
          </p>
        </div>
        {show && (
          <div>
            {!showLink && (
              <button onClick={addFileFunction} type="button">
                Добавить файл
              </button>
            )}
            {showFile && (
              <div>
                <input type="file" ref={refFile} />
                <input
                  type="text"
                  placeholder="Добавьте описание"
                  ref={refDescription}
                />
                <button type="button" onClick={addFileForFetch}>
                  Отправить
                </button>
              </div>
            )}
            {!showFile && (
              <button type="button" onClick={addLinkFunction}>
                Добавить ссылку
              </button>
            )}
            {showLink && (
              <div>
                <input type="text" placeholder="Вставьте ссылку" ref={refUrl} />
                <input
                  type="text"
                  placeholder="Добавьте описание"
                  ref={refDescription}
                />
                <button type="button" onClick={addFileForFetch}>
                  Отправить
                </button>
              </div>
            )}
            {showChangeTypeFile && (
              <button type="button" onClick={changeTypeFunction}>
                Поменять тип файла
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default FormAddPost;

// добавить функцию, чтобы можно было добавить только или ссылку или видео
