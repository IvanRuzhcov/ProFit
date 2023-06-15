import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trainer } from './types/Trainer';
import style from './style.module.css'

function TrainerCard({trainer}: {trainer:Trainer}):JSX.Element {

const navigate = useNavigate()

function handaleFailing():void{
    navigate(`/trainerBlog/${trainer.id!}`)
}

    return (
        <div onClick={handaleFailing} className={style.container_trainerCard}>
            <div className={style.img_card}><img src={trainer.profilePicture}  alt="" /></div>
            <div className={style.info_card}>
            <div className={style.name_card}>{trainer.name} </div>
            <div className={style.name_card}>{trainer.city}</div>
            </div>
        </div>
    );
}

export default TrainerCard;