
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrainerCard from "./TrainerCard";
import style from './style.module.css'
import { Trainer } from './types/Trainer';


function TrenerList(): JSX.Element {
  const [login, setLogin] = useState('');
  const [findTrainer, setFindTrainer] = useState <Trainer>();
  const [findCity, setFindCity] = useState <Trainer>();
  const coach = useSelector((store: RootState) => store.coach.trenerState);



  const getCoachByLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    const res = coach.filter((obj) => obj.login === login);
    if (res[0]) {
      setFindTrainer(res[0]);
    }
  };

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          placeholder="Введите логин"
          onChange={(e) => setLogin(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Введите логин"
          onChange={(e) => setFindCity(e.target.value)}
        /> */}
        <button onClick={getCoachByLogin} type="button">
          Найти
        </button>
      </div>
      <div className="">
        {findTrainer &&  <TrainerCard trainer={findTrainer} />}
      </div>
       <div className={style.treners_cont}>
    {coach.map((trainer)=> <TrainerCard trainer={trainer} key={trainer.id}/>)}
  </div>
    </div>

  );
}

export default TrenerList;
