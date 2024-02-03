import React from 'react'
import "./About.css"
import aboutimge from "../../imges/about-removebg-preview.png";
// import aboutimge from "../../imges/01.png";
import RESUME from "../../imges/Muhammedalbahle.PDF";

import {Fade} from 'react-awesome-reveal';


function About() {
  return (
  <section id='section2'>
  <div className='container'>
    <div id='about'>
      <div id='aboutImge'>
    <Fade delay={0} triggerOnce={true} direction='left' >
     
        <img src={aboutimge} alt=""/>
        
      </Fade>
      </div>


      <div id='aboutText'>
      <Fade delay={0} direction='right' triggerOnce={true} cascade>
      <h2>
        Hi There! I'm muhammed albahle</h2>
      <span>frontEnd developer</span>
      <p>
        Hi There! I'm wep developer
       Passionate Software Developer with a long track record of developing and maintaining high-quality software solution.
        A multi-skilled and hardworking who looking forward to enhancing and widening my skills.
        Committed to improving myself and update my information in my field.
         Seeking for new challenging positions and different experiences.
      </p>
      <ul>
        <li><p>Birthday</p><span> : 01 01, 1994</span></li>
        <li> <p>Phone</p><span> : +905346833726</span></li>
        <li><p>Language</p> <span>: English, turkish,arabic</span></li>
        <li><p>Freelance</p><span>: Available</span></li>

      </ul>
      <a  href={RESUME} id='Download' download={"muhammedalbahle.pdf"}>Download CV</a>
      </Fade>
      </div>
    </div>
  </div>
  </section>
  )
}

export default About