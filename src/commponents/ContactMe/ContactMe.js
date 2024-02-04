import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { Fade } from 'react-awesome-reveal';

function ContactMe() {
  const form = useRef();
  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const [removeValue,setremoveValue]= useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_ly85eqs', 'template_yfr1ld7', form.current, 'mNqUYSf5n2hx_U3ei')
    //   .then((result) => {
    //       console.log(result.text,"send");
    //   }, (error) => {
    //       console.log(error.text,"error");
    //   });
    setremoveValue(true);
    input.current.value="";
    input1.current.value="";
    input2.current.innerHTML="";
    
  };
  
  return (
    <section id='contactMe'>
      <div id='container'>
        <form  ref={form} onSubmit={sendEmail}>
        <Fade direction='left'triggerOnce={true}>
          <h2>Just say Hello</h2>
           </Fade>
           <Fade direction='left' triggerOnce={true}>
            <div id='name'>
                <input ref={input}  type='text'minLength={3} name="user_name" required/>    
                <label>your name</label>
            </div>
            <div id='name'>
                <input type='email'ref={input1} name="user_email" required/>    
                <label>your email</label>
            </div>
            <div id='name'className='message' >
                <textarea ref={input2} name="message" required/>
                <label>your message</label>
                
            </div>
            <button type='submit' id='send'>send message</button>
            </Fade>
        </form>  
        <div id='contactInvo'>
        <Fade direction='up' triggerOnce={true}>

          <h2>Contact Info</h2>
          </Fade>
          <Fade direction='right' triggerOnce={true}>
          <div id='infoIcon'>
            <MdOutlineMail />
            <div>
            <h3>email</h3>
            <p>muhammedalbahle@gmail.com</p>
            </div>
          </div>
         
          <div id='infoIcon'>
          <CiPhone />
          <div>
          <h3>phone</h3>
          <p>+905346833726</p>
          </div>
          </div>
          <div id='infoIcon'>
          <LuMapPin />
          <div>
          <h3>address</h3>
          <p>istanbul/turkey</p>
          </div>
          </div>
          
           </Fade>
        </div>
     </div>  
      
        
    </section>
  )
}

export default ContactMe