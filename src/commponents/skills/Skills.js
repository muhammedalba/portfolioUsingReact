import React, { useRef, useState } from "react";
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
const section=useRef();
  const[scrol,setscrol]=useState(false);
  window.onscroll=()=>{
if( window.scrollY >= section.current.offsetTop ){
    setscrol(true);
    window.removeEventListener("scroll",onscroll);
}

window.removeEventListener("scroll",onscroll);
} 

    
  const data =[
    {title:"html",value:80},
    {title:"Css",value:80},
    {title:"javascript",value:70},
    {title:"bootstrap",value:90},
    {title:"jquery",value:70},
    {title:"react/Redux/Redux Toolkit ",value:70},
    {title:"node.js",value:50},
    {title:"express",value:50},
    {title:"moongodb",value:50},
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
    <section ref={section} id="section4">
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
