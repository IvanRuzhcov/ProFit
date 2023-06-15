import React from 'react'
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import style from './footer.module.css'

function Footer():JSX.Element {
  return (
    <div className={style.footer}>
      <div className={style.container}>
       <div className={style.col}>
         <h4>Social:</h4>
         <p>Youtube</p>
         <p>Twitter</p>
         <p>Linkedin</p>
         <p>Instagram</p>
         
       </div>
       <div className={style.col}>
       
         <p className={style.icon}><FiYoutube /></p>
         <p className={style.icon}><FiTwitter /></p>
         <p className={style.icon}><FiLinkedin /></p>
         <p className={style.icon}><FiInstagram /></p>
       </div>
      </div>
    </div>
  )
}

export default Footer