import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import Footer from "./components/Footer";
import Whatsapp_Logo from './assets/img/whatsappLogo.png'
import Home from "./components/Home";

const App = () => {
  const [isActive, setisActive] = useState(false);
  const menuBtn = ()=>{
    setisActive(!isActive)
  }

  return (
    <div className="w-full relative">
    <Navbar isActive={isActive} menuBtn={menuBtn} />
    <div className={ `${isActive === false ? "mobile-nav-off" : 'mobile-nav-on'} flex items-center w-full h-[100vh] absolute top-0 bg-white z-40`}>
    <div onClick={menuBtn} className='flex items-center justify-end w-full py-5 px-5 bg-[#65D1BE] text-3xl text-white'>
      <FaTimes/>
    </div>
    <div className=" flex flex-col items-center gap-8 w-full text-2xl py-10 px-5 font-bold">
      {["HOME", "ABOUT US", "PROJECTS", "CONTACT"].map((item, index)=>(
            <Link key={index} className={`flex items-center gap-8 px-6 py-3 w-fit hover:bg-black hover:text-white rounded-full `}><MdKeyboardDoubleArrowLeft/>{item}<MdKeyboardDoubleArrowRight/></Link>
            ))}
      </div>
    </div>
    <Link to="https://web.whatsapp.com/" className="whatsapp-icon fixed right-5 bottom-4 w-16 h-16 rounded-full z-20 ">
    <img src={Whatsapp_Logo} alt="" />
    </Link>
   <Routes>
    <Route path="/" element ={<Home/>} />
   </Routes>
      <Footer/>
    </div>
  );
};

export default App;
