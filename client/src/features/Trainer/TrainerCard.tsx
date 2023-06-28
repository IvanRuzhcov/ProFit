import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trainer } from './types/Trainer';
import style from './style.module.css'

function TrainerCard({trainer}: {trainer:Trainer}):JSX.Element {

const navigate = useNavigate()

function handaleFailing():void{
    window.scrollTo(0, 0)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    navigate(`/trainerBlog/${trainer.id!}`)
}


    return (
        <div onClick={handaleFailing} className={style.container_trainerCard}>
            <div className={style.img_card}><img src={trainer.profilePicture}  alt="" /></div>
            <div className={style.info_card}>
            <div className={style.name_card}><h2>@{trainer.login}</h2></div>
              <div className={style.name_card}><h2>{trainer.name}</h2></div>
              <div className={style.name_card}><h2>{trainer.city}</h2></div>
            </div>
        </div>
    );
}

export default TrainerCard;