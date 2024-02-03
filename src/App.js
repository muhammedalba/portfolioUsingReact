import React from "react"
import './App.css';
import Section2 from"./commponents/About/About"
import NavBar from "./commponents/NavBar/NavBar";
import Section1 from "./commponents/main/Main";
import Section3 from "./commponents/service/Service";
import Title from "./commponents/Title/Title";
import Section4 from "./commponents/skills/Skills"
// import Section5 from "./commponents/section5/Section5";
import Section6 from "./commponents/portfolio/Portfolio";
import ContactMe from "./commponents/ContactMe/ContactMe";
import Footer from "./commponents/footer/Footer";
import './Media/MediaCss.css'


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Title  text={"about me"} bgColor={"#0a101e"}/>
      <Section2/>
      <Title  text={"services"} bgColor={"#070d1b"}/>
      <Section3/>
      <Title   text={"my skills"} bgColor={"#0a101e"}/>
      <Section4/>
      {/* <Title   text={"RESUME"} bgColor={"#070d1b"}/> */}
      {/* <Section5/> */}
      <Title   text={"PORTFOLIOS"} bgColor={"#0a101e"}/>
      <Section6/>
      <Title   text={"CONTACT me"} bgColor={"#070d1b"}/>
      <ContactMe/>
      <Footer/>

    </div>
  )
}

export default App;
