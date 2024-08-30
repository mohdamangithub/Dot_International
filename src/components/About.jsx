import React from "react";
import { Link } from "react-router-dom";
import Page_3_img from '../assets/img/Page3_img.jpg'

const Page_3 = () => {
  return (
    <div className="page_3 flex items-center justify-center w-full h-screen pt-10" id="ABOUT">
      <div className="page_3-left w-[40%] h-[50vh] px-8 py-10 ">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-3 mb-14 text-[grey] text-lg">
          At Dot International, we specialize in creating unforgettable
          exhibition experiences. With a presence in India, Europe, and the
          Middle East, our team brings global expertise and local insights to
          every event we manage.
        </p>
        <Link className="px-8 py-3 rounded-full bg-black text-white text-lg">Go To Home Page</Link>
      </div>
      <div className="page_3-right w-[40%] h-[50vh]  shadow-md shadow-[black]  overflow-hidden rounded-lg">
        <img className="w-full h-full  hover:scale-[1.1]" src={Page_3_img} alt="" />
      </div>
    </div>
  );
};

export default Page_3;
