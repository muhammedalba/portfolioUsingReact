import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./Section5.css"

export default function Section5() {
  return (
    <>
        <div id='section5'>
        <section id="container4">

       <div id='experiences'>

        <div id='experience'>
        <MdOutlineWork id='icon' /> 
        <h2> Experiences </h2>
        </div>

        <div id='exps'>
        <div id='exp'>
        <h2>Senior UX/UI Designe </h2>
        <h3> Jan 2020 - Present </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id='exp'>
        <h2>Product Designer</h2>
        <h3> Jan 2016 - December 2019 </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id='exp'>
        <h2>UI/UX Designer</h2>
        <h3> Jan 2014 - December 2015 </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>

       </div> 

       <div id='educations'>
        <div id='education'>
        <FaGraduationCap id='icon' />
        <h2> Education </h2>
        </div>

        <div id='academy'>
        <div id='educ'>
        <h2>Master Degree </h2>
        <h3> Jan 2020 - Present </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id='educ'>
        <h2>Licence</h2>
        <h3> Jan 2016 - December 2019 </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id='educ'>
        <h2>Bachelor</h2>
        <h3> Jan 2014 - December 2015 </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div> 
      </div>
        
        </section>
        </div>

    </>
  )
}