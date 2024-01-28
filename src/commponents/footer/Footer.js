import React from 'react'
import './Footer.css'
import {Fade  } from "react-awesome-reveal";
export default function Footer() {
  return (
    <Fade direction='down' triggerOnce={true}>
      <div id='footer'>© 2024. Designed by muhammedalbahle. All right reserved.</div>
    </Fade>
  )
}
