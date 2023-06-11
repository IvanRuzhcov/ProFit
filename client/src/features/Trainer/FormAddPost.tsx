import React, { useEffect, useRef, useState } from 'react';

// const type refRatio = {
//     current: {
//         checked: Boolean,
//     },
// }
function FormAddPost({setShowFormAdd}: {setShowFormAdd: (value: Boolean)=> void}): JSX.Element {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const refRatio = useRef(null);

  useEffect(() => {
    // if (refRatio.current.checked) {
      setShow(true);
      console.log(show);
      
    // } else {
      setShow(false);
      console.log(show);
    // }
    return () => setChecked(false);
  }, [refRatio.current]);

  const addWithVideo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setChecked(e.target.checked);
    //   refRatio.current.checked = true;
      console.log(checked, show);
    } else {
      setChecked(e.target.checked);
    //   refRatio.current.checked = false;
      console.log(checked, show);
    }
  };
  const addWithPhoto = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      console.log(show, checked);
    } else {
      console.log(show, checked);
    }
  };

  return (
    <div>
        <button type='button' onClick={() => setShowFormAdd(false)}>X</button>
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
            Фото: {' '}
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
