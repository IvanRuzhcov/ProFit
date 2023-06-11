import React, { useEffect, useRef, useState } from 'react';

// const type refRatio = {
//     current: {
//         checked: Boolean,
//     },
// }
function FormAddPost({
  showForm,
}: {
  showForm: (value: boolean) => void;
}): JSX.Element {
  const [show, setShow] = useState(false);

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
              value='video'
              onClick={() => setShow(true)}
            />
          </p>
          <p>
            Фото:{' '}
            <input type="radio" name="type" value='photo' onClick={() => setShow(true)} />
          </p>
        </div>
        {show && (
          <div>
            <input type="text" />
            <input type="file" />
          </div>
        )}
        {/* <input type="text"></input>
        <input type="text"></input>
        <input type="text">
          <button></button>
        </input>
        <input type="text"></input>
        <input type="text">
          <button></button>
        </input> */}
      </form>
    </div>
  );
}

export default FormAddPost;
