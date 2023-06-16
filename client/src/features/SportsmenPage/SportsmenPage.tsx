import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import style from './SportsmenPage.module.css';
import Modal from '../Modal/Modal';
import { upSportsmen, changeAvatar } from '../auth/authSlice';
import SliderSportsmen from './SliderSportsmen';
// import {  } from '../auth/authSlice';

function SportsmenPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const sportsmen = useSelector((store: RootState) => store.auth.user);
  const [modalUpdat, setModalUpdat] = useState(false);
  const [name, setName] = useState(sportsmen ? sportsmen.name : '');
  const [email, setEmail] = useState(sportsmen ? sportsmen.email : '');
  const [description, setDescription] = useState(
    sportsmen ? sportsmen.description : ''
  );
  const [city, setCity] = useState(sportsmen ? sportsmen.city : '');
  const refAvatar = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (user?.status === 'coach') {
      navigate('/trainerpage');
    }
  }, [navigate, user]);

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
  const uploadAvatarSportsmen = (): void => {
    const formData = new FormData();
    if (refAvatar.current) {
      if (refAvatar.current?.files && user) {
        if (user.id) {
          const url = refAvatar.current.files[0];
          const { id } = user;
          formData.append('url', url);
          formData.append('id', String(id));
          dispatch(changeAvatar(formData));
        }
      }
    }
    
  };
  return (
    <div className={style.sport_container}>
      <div className={style.main}>
        <div className={style.img_container}>
          <img
            src={sportsmen?.profilePicture}
            className={style.img_sportsmen}
            alt=""
          />
        </div>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.heading}>Personal cabinet</p>
            <p className={style.para}>{sportsmen?.name}</p>
            <p className={style.para}>{sportsmen?.description}</p>
            <button className={style.btn} onClick={handalUpdata} type="button">
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <div className={style.grafAll_container}>
        <div className={style.grafLine_container}>
          <ChartLine />
        </div>
        <div className={style.grafBar_container}>
          <ChartBar />
        </div>
      </div>
      <SliderSportsmen />
      {modalUpdat && (
        <Modal active={modalUpdat} setActive={setModalUpdat}>
          <div className={style.modal}>
            <div>
              <div>
                <input type="file" id="file" ref={refAvatar} style={{borderRadius: '10px'}}/>
              </div>
              <div>
                <button type="button" onClick={uploadAvatarSportsmen} className={style.btn_upd}>
                  Загрузить фото
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                className={style.input}
                placeholder="Изменить имя"
                defaultValue={sportsmen?.name}
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>

            <div>
              <input
                type="email"
                className={style.input}
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Изменить почту"
              />
            </div>

            <div>
              <input
                type="text"
                className={style.input}
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                placeholder="Изменить Описание"
              />
            </div>

            <div>
              <input
                type="text"
                className={style.input}
                onChange={(event) => setCity(event.target.value)}
                value={city}
                placeholder="Изменить Город"
              />
            </div>

            <div>
              <button
                className={style.btn_upd}
                type="button"
                onClick={handlerUpData}
              >
                Изменить
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SportsmenPage;
