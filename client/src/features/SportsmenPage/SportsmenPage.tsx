import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import style from './SportsmenPage.module.css';
import Modal from '../Modal/Modal';
import { upSportsmen } from '../auth/authSlice';

function SportsmenPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const sportsmen = useSelector((store: RootState) => store.auth.user);
  const [modalUpdat, setModalUpdat] = useState(false);
  const [name, setName] = useState(sportsmen ? sportsmen.name : '');
  const [email, setEmail] = useState(sportsmen ? sportsmen.email : '');
  const [description, setDescription] = useState(
    sportsmen ? sportsmen.description : ''
  );
  const [city, setCity] = useState(sportsmen ? sportsmen.city : '');

  function handalUpdata(): void {
    setModalUpdat(() => !modalUpdat);
  }

  function handlerUpData(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    dispatch(
      upSportsmen({ id: sportsmen?.id, name, email, description, city })
    );

    setModalUpdat(!modalUpdat);
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
      <div>
        <ChartLine />
      </div>
      <div>
        <ChartBar />
      </div>
      {modalUpdat && (
        <Modal active={modalUpdat} setActive={setModalUpdat}>
          <>
            <div>
              <button type="button">Загрузить фото</button>
            </div>
            <div>
              <input
                type="text"
                className={style.input_up}
                placeholder="Изменить имя"
                defaultValue={sportsmen?.name}
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
              <button type="button" onClick={handlerUpData}>
                Изменить
              </button>
            </div>
          </>
        </Modal>
      )}
    </>
  );
}

export default SportsmenPage;
