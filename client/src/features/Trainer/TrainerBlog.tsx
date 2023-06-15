import { style } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import User from "../auth/types/User";

function TrainerBlog(): JSX.Element {
  const { id } = useParams();
  
 
  const user = useSelector((store: RootState) => store.coach.trenerState);
  console.log(id);

  const coach = user.filter((el) => el.id === Number(id));
  console.log(coach[0].name);

  return (
    <div>
        <div>{coach[0].name}</div>

    </div>
      )
}

export default TrainerBlog;
