import React from 'react'
import "./Section6.css"; 
// video
import video1 from"../../Video/burgerweek.webm";
import video2 from"../../Video/bookslibrary.webm";
import video3 from"../../Video/ecommerce.webm";
import video4 from"../../Video/potfolio.webm";
// reveal
import { Fade } from 'react-awesome-reveal';


export default function Section5() {
    const projectData=[
        {src:video1,title:"use html and css",animation:"up"},
        {src:video2,title:"use html & css and javascript ",animation:"left"},
        {src:video3,title:"use html & css and react",animation:"right"},
        {src:video3,title:"use html & css and react",animation:"right"},
        {src:video4,title:"use html & css & javascript and jQuery",animation:"bootom"},


        
]

  return (
    <>
        <div id='section6'>

      <div id='container'>
        {projectData.map((e,index)=>{return  <Fade direction={e.animation}  cascade triggerOnce={true} key={index}>
                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={e.src} >
                Your browser does not support the video tag.
                </video>
                    <span> 
                        {e.title}
                    </span>
                </div>
                </Fade>
        
        
        })}
               

{/* 
                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={video}>
                Your browser does not support the video tag.
                </video>
                </div>

                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={video}>
                Your browser does not support the video tag.
                </video>
                </div>

              
                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={video}>
                Your browser does not support the video tag.
                </video>  
                </div>

                
                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={video}>
                Your browser does not support the video tag.
                </video> 
                </div>

                <div id='project'>
                <video controls preload='metadata' width="100%" height="auto"src={video}>
                Your browser does not support the video tag.
                </video>   
                </div> */}

            </div>
        </div>

    </>
  )
}
