import React from 'react'
import { FiYoutube, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"
import './footer.css'

function Footer():JSX.Element {
  return (
    <div className="footer">
      <article id="wrap">  
      <h2 className='footer-text'>CONTACT with US:</h2>
      <p className='p-icon'><FiInstagram/></p>
      <p className='p-icon'><FiTwitter/></p>
      <p className='p-icon'><FiLinkedin/></p>
      <p className='p-icon'><FiYoutube/></p>
      <h2 className='footer-text2' >2023 from Elbrus, SPB - All Rights Reserved</h2>
	<article id="lightings">
    	<section id="one">
            <section id="two">
                <section id="three">
                    <section id="four">
                        <section id="five"></section>
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