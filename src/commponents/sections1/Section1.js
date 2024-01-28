import React from 'react'
import "./sectio1.css"
// jquery
import $ from 'jquery';
import  'jquery.ripples';
// icons
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
// imge
import imge from "../../imges/hero-img.jpg";
import { IconContext } from 'react-icons';
// 







function Section1() {
    
    $(document).ready(function () {
        $("#section1").ripples({
        interactive:true,
        dropRadius: 40,
        perturbance: 0.04 ,
        resolution: 400,
       
      });})


   
  return (
    <section id='section1'>
       
        <div id=''>
      

            <img id='imge' src={imge} alt=""/>
           
         
            <h1> hi,  i am
                 <span id='typed'></span>
            </h1>
           
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.
            </p>
            <ul id='social'>
            <IconContext.Provider value={{ style: {  cursor:'pointer',fontSize:"35px"} }}>
                <li> <a target='_blank' href='https://www.facebook.com/profile.php?id=100011080993815'><RiFacebookCircleLine /></a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/muhammed-albahle-769678238/' >< FaLinkedinIn  /></a> </li>
                <li><a target='_blank' href='https://github.com/muhammedalba'><GrGithub /></a></li>
            </IconContext.Provider>
            </ul>
        </div>
     
        {/* </Fade> */}
        
    </section>
  )
}

export default Section1