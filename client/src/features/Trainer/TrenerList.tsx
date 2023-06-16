import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TrainerCard from './TrainerCard';
import style from './style.module.css';
import { Trainer } from './types/Trainer';

function TrenerList(): JSX.Element {
  const [login, setLogin] = useState('');
  const [findFlag, setFindFlag] = useState(false);
  const [findTrainer, setFindTrainer] = useState<Trainer>();
  const [findCity, setFindCity] = useState<Trainer>();
  const coach = useSelector((store: RootState) => store.coach.trenerState);

  const getCoachByLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const res = coach.filter(
      (obj) =>
        `@${obj.login.toLowerCase().trim()}` === login.toLowerCase().trim()
    );
    if (res[0]) {
      setFindTrainer(res[0]);
    }
    setFindFlag(true);
    setLogin('');
  };

  return (
    <div className="">
      <div className={style.container_coach_list}>
        <div className={style.treners_cont}>
          <form onSubmit={getCoachByLogin}>
            <div className={style.find_trainer}>
              <input
                type="text"
                placeholder="Введите логин"
                onChange={(e) => setLogin(e.target.value)}
                className={style.input}
                value={login}
              />
              <button type="submit" className={style.btn_coach}>
                Найти
              </button>
            </div>
          </form>

          <div className="">
            {findTrainer && findFlag && (
              <div className="">
                {' '}
                <TrainerCard trainer={findTrainer} />{' '}
                <button
                  type="button"
                  className={style.btn_coach}
                  onClick={() => setFindFlag(!findFlag)}
                >
                  Назад
                </button>
              </div>
            )}
          </div>
          {!findFlag && (
            <div className="">
              {coach.map((trainer) => (
                <TrainerCard trainer={trainer} key={trainer.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrenerList;
