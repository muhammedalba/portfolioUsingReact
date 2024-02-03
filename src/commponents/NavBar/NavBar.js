import React, { useState } from "react";
// icons
import { FaPhoneAlt } from "react-icons/fa";

// imge
// import imge from "../../imges/favicon.png";
// reveal
import { Slide } from "react-awesome-reveal";
// react-scroll
import { Link } from "react-scroll";
// style css
import "./NavBar.css";
import '../../Media/MediaCss.css'


function NavBar() {

  const [open, setopen] = useState(false);
  // const [dark, setdark] = useState(false);
const Links=[
  {title:"Home",path:"section1"},
  {title:"about",path:"section2"},
  {title:"services",path:"section3"},
  {title:"skills",path:"section4"},
  {title:"portfolio",path:"section6"},
  {title:"contact",path:"contactMe"},
];

const Links_Show=Links.map((e,index)=>{return <li key={index}>
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

const Links_Show_In_Mobil=Links.map((e,index)=>{return <li key={index} style={{ transform:open ? "translateX(0)":"translateX(-200%)" }} >
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
    onClick={()=>{setopen(!open)}}
  >

    {e.title}
  </Link>
</li>})

  // function mode() {
  //   setdark(!dark);
  //   if (dark) {
  //     document.documentElement.style.setProperty("--bg-color", "#F0F0F0");
  //     document.documentElement.style.setProperty("--bg-2", "#F7F7F7");
  //     document.documentElement.style.setProperty("--textColr", "black");
  //     document.documentElement.style.setProperty("--SpanColr", "red");
  //   } else {
  //     document.documentElement.style.setProperty("--bg-color", "#070d1b");
  //     document.documentElement.style.setProperty("--bg-2", "#0a101e");
  //     document.documentElement.style.setProperty("--textColr", "#fdfeff");
  //     document.documentElement.style.setProperty("--SpanColr", "#fec544");
  //   }
  // }

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

          {/* <MdOutlineDarkMode id="DarkMode" onClick={mode} /> */}
          <ul >
          {Links_Show}
            <li id="phoneList">
              <FaPhoneAlt fontSize={"15px"} />
              <a href="https://wa.me/00905346833726" target="blank" id="phone">
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
        <ul className="mobelLink"style={{transform:open ? "translateX(0)":"translateX(-200%)"}}>
          {Links_Show_In_Mobil}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;














