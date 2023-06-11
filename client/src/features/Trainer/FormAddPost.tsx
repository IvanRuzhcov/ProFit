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
  const [checked, setChecked] = useState(false);
  const refRatio = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refRatio.current?.checked) {
      setShow(!show);
    }
    return () => setChecked(false);
  }, [refRatio]);

  const addWithVideo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setChecked(e.target.checked);
    } else {
      setChecked(e.target.checked);

    }
  };
  const addWithPhoto = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setChecked(e.target.checked);
    
    } else {
      setChecked(e.target.checked);
  
    }
  };

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
              ref={refRatio}
              onChange={(e) => addWithVideo(e)}
            />
          </p>
          <p>
            Фото:{' '}
            <input type="radio" name="type" onChange={(e) => addWithPhoto(e)} />
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
