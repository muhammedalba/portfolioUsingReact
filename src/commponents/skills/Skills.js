import React, { useState } from "react";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";

import { GrHtml5 } from "react-icons/gr";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";




function Skills() {
  const[scrol,setscrol]=useState(false);
  window.onscroll=()=>{

if( window.innerWidth > 950 && window.scrollY >= 2800 ){
    setscrol(true);
    window.removeEventListener("scroll",onscroll);
}
if( window.innerWidth <= 950 && window.scrollY >= 5000  ){
   setscrol(true);
   window.removeEventListener("scroll",onscroll);
}
window.removeEventListener("scroll",onscroll);
} 
    
  const data =[
    {title:"html",value:80},
    {title:"css",value:80},
    {title:"javascript",value:70},
    {title:"bootstrap",value:90},
    {title:"jquery",value:70},
    {title:"react",value:50},
    {title:"git/github",value:50},
]
    
 const dataShow=  data.map((e,index)=>{
 return  <div id="progresses" key={index}>
  <Fade direction="right" triggerOnce={true} cascade >
  <h4>{e.title}</h4>
  <div id="progess">
    <div style={{width:scrol?`${e.value}%`:"0"}} id="livel" >
      <span>{e.value}%</span>
    </div>
  </div>
  </Fade>
</div>
  
  })





  
  return (
    <section id="section4">
      <div className="container">
        <div id="skills">
          
          <div id="skillTitle">
          <Fade direction="left" cascade triggerOnce={true}>
          <h2>All the skills that I have in that field of work are mentioned.</h2>
          <div id="imgeSkills">
            <IconContext.Provider value={{style:{cursor:"pointer",fontSize:"150px"}}} >
            <GrHtml5/>
            <MdOutlineCss />
            <IoLogoJavascript  />
            <DiJqueryLogo  />
            <BsBootstrap  />
            <FaGithub  />
            <FaReact  />

            </IconContext.Provider>
            {/* <img  src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            <img src={img6} alt=""/>
            <img src={img7} alt=""/> */}
           
            
          </div>
          
          </Fade>
          </div>
      <div id="skillsProgress">

          {dataShow}

      </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
