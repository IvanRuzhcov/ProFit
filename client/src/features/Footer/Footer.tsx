import React from 'react'
import { FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi"
import { SlSocialVkontakte } from "react-icons/sl"
import './footer.css'

function Footer():JSX.Element {
  return (
    <div className="footer">
      <article id="wrap">  
      <h2 className='footer-text'>Наши контакты:</h2>
      <div className='footer_card'>
        <p className='p-icon'><SlSocialVkontakte/></p>  
        <p className='p-icon'><FiInstagram/></p>
        <p className='p-icon'><FiTwitter/></p>
        <p className='p-icon'><FiYoutube/></p>
      </div>
      <h2 className='footer-text2' > ©2021-2023 Все права защищены.</h2>
	<article id="lightings">
    	<section id="one">
            <section id="two">
                <section id="three">
                    <section id="four">
                        <section id="five" />
                    </section>
                </section>
            </section>
		</section>
    </article>
</article>
    </div>
    
  )
}

export default Footer