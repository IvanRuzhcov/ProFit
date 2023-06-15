import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { addSubscribeTr } from "./TrainerSlice";

function TrainerBlog(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch()
 
  const user = useSelector((store: RootState) => store.coach.trenerState);

  const coach = user.filter((el) => el.id === Number(id));

function handelsubscribe():void{
  dispatch(addSubscribeTr( Number(id) ))
}

  return (
    <div>
        <div>{coach[0].name}</div>
        <div><button type="button" onClick={handelsubscribe}>Подписаться</button></div>

    </div>
      )
}

export default TrainerBlog;
