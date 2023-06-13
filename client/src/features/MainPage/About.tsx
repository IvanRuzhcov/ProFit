import React from 'react'
import style from './style.module.css'


function About():JSX.Element {
  return (
      <div className={style.about_container}>
          <div className={style.first}>
            <div className={style.grow1}>
              <p className={style.about_text}>Вы можете загружать свои видеофайлы, связанные со спортом, на платформу.</p>
              <p className={style.about_text}>Это может включать записи спортивных событий, тренировок, инструкционные видео, спортивные моменты и т.д.</p>
              <p className={style.about_text}>Видеохостинг использует алгоритмы рекомендаций, чтобы предлагать вам наиболее подходящие видео, исходя из ваших предпочтений.</p>
            </div>
            <div className={style.grow3}>.</div> 
          </div>

          <div className={style.first}>
            <div className={style.grow4}>.</div>
            <div className={style.grow1}>
              <p className={style.about_text}>Видеохостинг предоставляет вам механизмы для хранения загруженных видеофайлов и организации их в удобные категории или коллекции.</p>
              <p className={style.about_text}>Например, видео могут быть разделены по видам спорта, соревнованиям, командам или тегам.</p>
            </div>
          </div>

          <div className={style.first}>
            <div className={style.grow1}>
              <p className={style.about_text}>Вы можете комментировать видео, ставить лайки, делиться видеофайлами в социальных сетях, подписываться на каналы или авторов видео.</p>
              <p className={style.about_text}>Это позволяет создавать сообщество спортивных энтузиастов, обмениваться мнениями и взаимодействовать друг с другом.</p>
              <p className={style.about_text}>Также мы предоставляем возможность создания персонализированных плейлистов или подборок видео.</p>
            </div>
            <div className={style.grow5}>.</div>
          </div>
          
        
      </div>
    
  )
}

export default About