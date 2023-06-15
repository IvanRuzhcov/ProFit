import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { initTrainer } from "./TrainerSlice";
import TrainerCard from "./TrainerCard";
import style from './style.module.css'

function TrenerList(): JSX.Element {
  const dispatch = useAppDispatch();

  const coach = useSelector((store: RootState) => store.coach.trenerState);

  useEffect(() => {
    dispatch(initTrainer());
  }, [dispatch]);

  return (
  <div className={style.treners_cont}>
    {coach.map((trainer)=> <TrainerCard trainer={trainer} key={trainer.id}/>)}
  </div>
  );
}

export default TrenerList;
