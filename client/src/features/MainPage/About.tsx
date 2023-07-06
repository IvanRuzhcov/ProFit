import React from 'react'
import style from './style.module.css'


function About():JSX.Element {
  return (
      <div className={style.about_container}>
          <div className={style.parent}>

             <div className={style.box}>
               <p className={style.title}><span className={style.color_effect}>продуктивная обстановка</span></p>
               <div className={style.grow7}>.</div>
               <p className={style.about_text}>Мы разработали не имеющее аналогов приложение, позволяющее следить за расписанием, добавлять друзей и получать уведомления когда они приходят в клуб, выбирать тренеров и отслеживать свой рейтинг в лидерборде, изучать статистику посещений и веса и многое другое</p>
               
             </div>

             <div className={style.box}>
               <p className={style.title}><span className={style.color_effect}>дружное сообщество</span></p>
               <div className={style.grow3}>.</div>
               <p className={style.about_text}>Создавая наилучшие условия для достижения любых целей, вплоть до самых амбициозных, мы помогаем людям влюбиться в здоровый образ жизни. Это позволяет создавать сообщество спортивных энтузиастов, обмениваться мнениями и взаимодействовать друг с другом.</p>
               
             </div>
             
             <div className={style.box}>
               <p className={style.title}><span className={style.color_effect}>включайся</span></p>
               <div className={style.grow5}>.</div>
               <p className={style.about_text1}>Вы можете комментировать посты, ставить лайки, делиться ими в социальных сетях, подписываться на каналы или авторов видео.
               Также для наших постоянных клиентов предусмотрена программа лояльности.</p>
             </div>

          </div>  
      </div>
    
  )
}

export default About