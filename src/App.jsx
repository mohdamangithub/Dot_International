import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page_2 from "./components/Page_2";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import Whatsapp_Logo from './assets/img/whatsappLogo.png'
import { sectionIds } from "./components/sectionIds";




const App = () => {

  const [isActive, setisActive] = useState(false);
  const menuBtn = ()=>{
    setisActive(!isActive)
  }

   //state to track the activeLink and scroll state.
   const [activeLink, setActiveLink] = useState("HOME");
   const [isScrolled, setIsScrolled] = useState(false);
  
   //Function to smoothly scroll to a section by its ID
   const scrollToSection = (sectionId) => {
     const element = document.getElementById(sectionId);
     if (element) {
       //Adjust the margin-top value as needed.
       const marginTop = 0;
       const scrollToY =
         element.getBoundingClientRect().top + window.scrollY - marginTop;
       window.scrollTo({ top: scrollToY, behavior: "smooth" });
     }
   };
  
   //Function to determine the active section while scrolling.
   const determineActiveSection = () => {
     for (let i = sectionIds.length - 1; i >= 0; i--) {
       const section = document.getElementById(sectionIds[i]);
       if (section) {
         const rect = section.getBoundingClientRect();
         if (rect.top <= 120 && rect.bottom >= 120) {
           //set the active link based on the section ID
           setActiveLink(sectionIds[i]);
           break;
         }
       }
     }
   };
  
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 300) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
       //Call the function to determine the active section while scrolling.
       determineActiveSection();
     };
     window.addEventListener("scroll", handleScroll);
     return ()=>{
       window.removeEventListener("scroll", handleScroll)
     }
   }, []);



  return (
    <div className="w-full relative" id="HOME">
    <Navbar menuBtn={menuBtn} scrollToSection={scrollToSection} activeLink={activeLink} />
    <div className={ `${isActive === false ? "mobile-nav-off" : 'mobile-nav-on'} amann flex items-center w-full h-[100vh] absolute top-0 bg-white z-40`}>
    <div onClick={menuBtn} className='flex items-center justify-end w-full py-5 px-5 bg-[#65D1BE] text-3xl text-white'>
      <FaTimes/>
    </div>
    <div className=" flex flex-col items-center gap-8 w-full text-2xl py-10 px-5 font-bold">
      {sectionIds.map((sectionId, index)=>(
            <a href={`#${sectionId}`} key={index} onClick={()=> setisActive(false)} className={`${activeLink === sectionId ? "active" : ""} aaa flex items-center gap-8 px-6 py-3 w-fit hover:bg-black active:bg-black hover:text-white rounded-full `}><MdKeyboardDoubleArrowLeft/>{sectionId}<MdKeyboardDoubleArrowRight/></a>
            ))}
      </div>
    </div>
    <Link to="https://web.whatsapp.com/" className="whatsapp-icon fixed right-5 bottom-4 shadow-md shadow-[#6a6a6a] w-16 h-16 rounded-full z-20 ">
    <img src={Whatsapp_Logo} alt="" />
    </Link>
       <Home/>
       <Page_2/>
       <About/>
       <Services/>
       <Projects/>
       <Contact/>
      <Footer id ="Home"/>
    </div>
  );
};

export default App;
