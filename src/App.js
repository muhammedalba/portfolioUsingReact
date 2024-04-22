import React from "react"
import './App.css';
import About from"./commponents/About/About"
import NavBar from "./commponents/NavBar/NavBar";
import Main from "./commponents/main/Main";
import Service from "./commponents/service/Service";
import Title from "./commponents/Title/Title";
import Skills from "./commponents/skills/Skills"
// import Section5 from "./commponents/section5/Section5";
import Portfolio from "./commponents/portfolio/Portfolio";
import ContactMe from "./commponents/ContactMe/ContactMe";
import Footer from "./commponents/footer/Footer";
import './Media/MediaCss.css'


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Title  text={"about me"} bgColor={"#0a101e"}/>
      <About/>
      <Title  text={"services"} bgColor={"#070d1b"}/>
      <Service/>
      <Title   text={"my skills"} bgColor={"#0a101e"}/>
      <Skills/>
      {/* <Title   text={"RESUME"} bgColor={"#070d1b"}/> */}
      {/* <Section5/> */}
      <Title   text={"PORTFOLIOS"} bgColor={"#0a101e"}/>
      <Portfolio/>
      <Title   text={"CONTACT me"} bgColor={"#070d1b"}/>
      <ContactMe/>
      <Footer/>

    </div>
  )
}

export default App;
