import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { TfiMenu } from "react-icons/tfi";
import { sectionIds } from "./sectionIds";

const Navbar = ({menuBtn, scrollToSection, activeLink}) => {
 

  return (
    <div className="navbar sticky top-0 flex items-center w-full h-[18vh] bg-white z-20">
      <div className="nav-left flex items-center justify-center w-[35%] h-full py-[0.8vw] px-5 bg-[#FFFFFF]">
        <img className="w-36" src={Logo} alt="" />
      </div>
      <div className="nav-right flex items-center justify-end pr-32 gap-2 w-[65%] h-full py-10 px-5 bg-[#65D1BE] text-white font-bold ">
        {sectionIds.map((sectionId, index) => (
          <Link
            key={index}
            onClick={() => scrollToSection(sectionId)}
            className={`${
              activeLink === sectionId ? "active" : ""
            } px-6 py-3   `}
          >
            {sectionId}
          </Link>
        ))}
        <div onClick={menuBtn} className="menu">
          <TfiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
