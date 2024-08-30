import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer flex justify-between w-full h-fit py-16 px-24 bg-black text-[#8d8d8d]'>
       <div className='footer-child1 w-[40%] flex items-center justify-between'>
         <div className='flex flex-col gap-1 text-lg'>
          <a href='#HOME'>Home</a>
          <a href='#ABOUT'>About</a>
          <a href='#SERVICES'>Services</a>
          <a href='#PROJECTS'>Terms of service</a>
          <Link>Privacy policy</Link>
         </div>
         <div className='flex flex-col gap-1 text-lg'>
          <Link>Exhibition</Link>
          <Link>Events</Link>
          <Link>Product Management</Link>
          <Link>Marketing</Link>
          <Link>Graphic Design</Link>
         </div>
       </div>
       <div className="footer-child2 flex flex-col justify-between w-[50%] py-2">
        <div className='flex justify-end gap-3 w-full'>
             <Link to="https://x.com/?lang=en" className='w-12 h-12 rounded-full flex items-center justify-center text-2xl border-[1px] border-white'><BsTwitterX/></Link>
             <Link to="https://www.facebook.com/" className='w-12 h-12 rounded-full flex items-center justify-center text-2xl border-[1px] border-white'><FaFacebook/></Link>
             <Link to="https://www.instagram.com/" className='w-12 h-12 rounded-full flex items-center justify-center text-2xl border-[1px] border-white'><BsInstagram/></Link>
             <Link to="https://www.linkedin.com/" className='w-12 h-12 rounded-full flex items-center justify-center text-2xl border-[1px] border-white'><FaLinkedin/></Link>
             </div>
             <div className='flex flex-col items-end w-full'>
                <p className='text-[#8d8d8d]'>© Copyright <span className='font-semibold'>Dot International.</span> All Rights Reserved</p>
                <h2 className='text-white'>| Designed & Developed by <Link to='https://crazywebdev.com/?srsltid=AfmBOorP5AwGoWdINJncPOFGZ4J-5xNzVWbYurgc3_bMO0mhiuAcm34o' className='text-[royalblue] font-semibold hover:text-white'>CrazyWebDev Technologies</Link></h2>
             </div>
       </div>
    </div>
  )
}

export default Footer