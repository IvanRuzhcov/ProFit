import React, { useEffect, useRef, useState } from 'react';

function FormAddPost({
  showForm,
}: {
  showForm: (value: boolean) => void;
}): JSX.Element {
  const [show, setShow] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showChangeTypeFile, setShowChangeTypeFile] = useState(false);
  const resetShowFileLink = (): void => {
    setShowFile(false);
    setShowLink(false);
  };

  const addFileFunction = (): void => {
    setShowFile(true);
    setShowChangeTypeFile(true);
  }
  const addLinkFunction = (): void => {
    setShowLink(true);
    setShowChangeTypeFile(true);
  }
  const changeTypeFunction = (): void => {
    setShowChangeTypeFile(false);
    resetShowFileLink();
  }
  return (
    <div>
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
            />
          </p>
          <p>
            Фото:{' '}
            <input
              type="radio"
              name="type"
              value="photo"
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
                <input type="file" />
                <input type='text'placeholder='Добавьте описание'/>
                <button type="button">Отправить</button>
              </div>
            )}
            {!showFile && (
              <button type="button" onClick={addLinkFunction}>
                Добавить ссылку
              </button>
            )}
            {showLink && (
              <div>
                <input type="text" placeholder='Вставьте ссылку'/>
                <input type='text'placeholder='Добавьте описание'/>
                <button type="button">Отправить</button>
              </div>
            )}
            {showChangeTypeFile && <button type="button" onClick={changeTypeFunction}>
              Поменять тип файла
            </button>}
          </div>
        )}
      </form>
    </div>
  );
}

export default FormAddPost;

// добавить функцию, чтобы можно было добавить только или ссылку или видео
