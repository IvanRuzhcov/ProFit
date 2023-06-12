import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import style from "./SportsmenPage.module.css";

function SportsmenPage(): JSX.Element {
  const sportsmen = useSelector((store: RootState) => store.auth.user);
  const [modalUpdat, setModalUpdat] = useState(true);
  const [name, setName] = useState(sportsmen?.name);
  const [email, setEmail] = useState(sportsmen?.email);
  const [description, setDescription] = useState(sportsmen?.description);
  const [city, setCity] = useState(sportsmen?.city);

  function handalUpdata(): void {
    setModalUpdat(() => !modalUpdat);
  }

  return (
    <>
      <div>
        <div>
          <img
            src={sportsmen?.profilePicture}
            className={style.img_sportsmen}
            alt=""
          />
        </div>
        <div>{sportsmen?.name}</div>
        <div>{sportsmen?.description}</div>
        <div>
          <button
            className={style.btn_Update}
            onClick={handalUpdata}
            type="button"
          >
            Редактирование данных
          </button>
        </div>
      </div>
      <div className={style.modal_form}>
        <div
          className={modalUpdat ? `${style.modal_content}` : `${style.none}`}
          id="modal"
        >
          <div className={style.modal} />
          <div>
            <button type="button">Загрузить фото</button>
          </div>
          <div>
            <input
              type="text"
              className={style.input_up}
              placeholder="Изменить имя"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <div>
            <input
              type="email"
              className={style.input_up}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Изменить почту"
            />
          </div>
          <div>
            <input
              type="text"
              className={style.input_up}
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              placeholder="Изменить Описание"
            />
          </div>
          <div>
            <input
              type="text"
              className={style.input_up}
              onChange={(event) => setCity(event.target.value)}
              value={city}
              placeholder="Изменить Город"
            />
          </div>
          <div>
            <button type="button">Изменить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SportsmenPage;
