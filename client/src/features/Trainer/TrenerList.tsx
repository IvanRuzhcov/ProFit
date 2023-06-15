import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrainerCard from "./TrainerCard";

function TrenerList(): JSX.Element {

  const coach = useSelector((store: RootState) => store.coach.trenerState);


  return (
  <div>
    {coach.map((trainer)=> <TrainerCard trainer={trainer} key={trainer.id}/>)}
  </div>
  );
}

export default TrenerList;
