import React from 'react'
import "./Service.css"
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineInteraction } from "react-icons/ai";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";




import { Slide } from 'react-awesome-reveal';

export default function Service() {
  return (
    <>
    <section id='section3'>
    <div className = 'container'>
    
        <div id='service'>
        <Slide direction='left'   delay={0} triggerOnce={true}>
            <TiHtml5 id='icon'/>
            <h3> HTML/CSS </h3>
            <p> Creating the structure and styling of web pages
                 using HTML and CSS.
            </p>
            </Slide>
        </div>
        <div id='service'>
            <Slide direction='up'   delay={0} triggerOnce={true}>
            <IoLogoJavascript id='icon' />
            <h3> JavaScript </h3>
            <p> Implementing dynamic and interactive elements on the webpage,
                handling user interactions.
            </p>
            </Slide>
        </div>
        <div id='service'>
            <Slide direction='right'   delay={0} triggerOnce={true}>
             <AiOutlineInteraction id='icon'/>
            <h3> Animation and Interaction </h3>
            <p> Implementing animations and interactive elements
                to enhance user engagement and create a more dynamic user interface.
            </p>
            </Slide>
        </div>
        <div id='service'>
        <Slide direction='up'   delay={0} triggerOnce={true}>
            <FaReact id='icon' />
            <h3> React </h3>
            <p> Building user interfaces efficiently using popular
                 frontend frameworks and libraries.
            </p>
            </Slide>
        </div>

        <div id='service'>
        <Slide direction='up'   delay={0} triggerOnce={true}>
             <FaBootstrap  id='icon'/>
            <h3> Bootstrap </h3>
            <p> Implementing and customizing frontend frameworks
                 for consistent and responsive designs.
            </p>
            </Slide>
        </div>

        <div id='service'>
        <Slide direction='up'   delay={0} triggerOnce={true}>
            <FaGithub id='icon'/>
            <h3> Git /Github  </h3>
            <p> Collaborating with other developers using
                version control systems like Git to manage and track
                 changes to the codebase.
            </p>
            </Slide>
        </div>
        <div id='service'>
        <Slide direction='up'   delay={0} triggerOnce={true}>
            <SiJquery id='icon'/>
            <h3>jquery  </h3>
            <p>  Building user interfaces efficiently using popular
                 frontend frameworks and libraries.
            </p>
            </Slide>
        </div>
      
    </div>

    </section>
</>)
}
