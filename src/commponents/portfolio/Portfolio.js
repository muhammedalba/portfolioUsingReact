import React from 'react'
import "./Portfolio.css"; 
// video
import anmeEmge from"../../projectsEmges/anime.png";
import portfolio from"../../projectsEmges/portfolio.png";
import bookslibrary from"../../projectsEmges/bookslibrary.png";
import burgerHuse from"../../projectsEmges/burgerHuse.png";
import eCommerce from"../../projectsEmges/eCommerce.png";
// reveal
import { Fade } from 'react-awesome-reveal';



export default function Portfolio() {
    const projectData=[
        {src:eCommerce,title:"use html & css and react",animation:"right",href:'https://6626243e427b5f7f3530f32f--playful-ganache-379522.netlify.app/'},
        {src:burgerHuse,title:"use html & css and react",animation:"right",href:'https://fantastic-cascaron-57ee21.netlify.app/'},
        {src:portfolio,title:"use html & css & javascript and jQuery",animation:"bootom",href:'https://reliable-kheer-bca126.netlify.app/'},
        {src:bookslibrary,title:"use html & css & javascript and jQuery",animation:"bootom",href:'https://deluxe-cobbler-af72a9.netlify.app/login.html'},
        {src:anmeEmge,title:"use html & css & javascript and jQuery",animation:"bootom",href:'https://65ff37bcddc42d4746dace62--zesty-kringle-099d59.netlify.app/'},


        
]

  return (
    <>
        <div id='section6'>

      <div id='container'>
        {projectData.map((e,index)=>{
            return  <Fade direction={e.animation}  cascade triggerOnce={true} key={index}>
                <div id='project'>
                {/* <video controls preload='metadata' width="100%" height="auto"src={e.src} >
                Your browser does not support the video tag.
                </video> */}
                  <img src={e.src} alt=""/>
                    <span> 
                        {e.title}
                    </span>

                <a  rel="noreferrer" target="_blank" href={e.href}>live peview</a>
                </div>
                </Fade>
        })}
               
            </div>
        </div>

    </>
  )
}
