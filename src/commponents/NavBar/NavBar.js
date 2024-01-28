import React, { useState } from "react";
import "./NavBar.css";
// icons
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
// imge
// import imge from "../../imges/favicon.png";

// reveal

import { Slide } from "react-awesome-reveal";

// react-scroll
import { Link } from "react-scroll";



function NavBar() {
  window.onscroll = () => {
    // console.log(window.scrollY,"scrol");
    // console.log(window.scrollX,"scrolx");
  };

  const [open, setopen] = useState(false);
  const [dark, setdark] = useState(false);
const Links=[
  {title:"Home",path:"section1"},
  {title:"about",path:"section2"},
  {title:"services",path:"section3"},
  {title:"skills",path:"section4"},
  {title:"portfolio",path:"section6"},
  {title:"contact",path:"contactMe"},
];

const LinksShow=Links.map((e)=>{return <li>
  <Link
    to={e.path}
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={-150}
    duration={500}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
  >

    {e.title}
  </Link>
</li>})
  function mode() {
    setdark(!dark);
    if (dark) {
      document.documentElement.style.setProperty("--bg-color", "#F0F0F0");
      document.documentElement.style.setProperty("--bg-2", "#F7F7F7");
      document.documentElement.style.setProperty("--textColr", "black");
      document.documentElement.style.setProperty("--SpanColr", "red");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#070d1b");
      document.documentElement.style.setProperty("--bg-2", "#0a101e");
      document.documentElement.style.setProperty("--textColr", "#fdfeff");
      document.documentElement.style.setProperty("--SpanColr", "#fec544");
    }
  }

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            {/* <img src={imge} alt="" />  */}

            <Slide direction="left" cascade>
              <div className="p">muhammed</div>
            </Slide>
          </div>

          <MdOutlineDarkMode id="DarkMode" onClick={mode} />
          <ul>
            {/* <li>
              <Link
                to="section1"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                
                

              >

                home
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="section3"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="section4"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                href="/"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                to="section6"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                href="/"
              >
                portfolio
              </Link>
            </li>
            <li>
              <Link
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                href="/"
              >
                contact
              </Link>
            </li> */}
  {LinksShow}
            <li id="phoneList">
              <FaPhoneAlt fontSize={"15px"} />
              <a href="/" id="phone">
                +905346833726
              </a>
            </li>
          </ul>
          <div onClick={() => setopen(!open)} className="bars">
            <span
              style={{
                transform: open && "translateY(10px) rotate(-45deg)",
                backgroundColor: open && "red",
              }}
            ></span>
            <span style={{ transform: open ? "scale(0)" : "scale(1)" }}></span>
            <span
              style={{
                transform: open && "translateY(-10px) rotate(45deg)",
                backgroundColor: open && "red",
              }}
            ></span>
          </div>
        </div>
        {/* mobel */}
        <ul className="mobelLink">
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="section1"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              home
            </Link>
          </li>
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={80}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              about
            </Link>
          </li>
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              SERVICES
            </Link>
          </li>
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="section6"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
             
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              portfolio
            </Link>
          </li>
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="hfgh5"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
             
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              blog
            </Link>
          </li>
          <li style={{ transform: open && "translateY(0)" }}>
            <Link
              to="ffds6"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
            
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              contact
            </Link>
          </li>
          {/* <li style={{ transform: open && "translateY(0)" }} id="phoneList">
            <a href="/" id="phone">
              +905346833726
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;














