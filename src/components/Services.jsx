import React from "react";
import { Link } from "react-router-dom";
import Page_4_img from "../assets/img/Page4_img.jpg";

const Page_4 = () => {
  return (
    <div
      className="page_4 flex items-center justify-center gap-10 w-full h-screen pt-20"
      id="SERVICES"
    >
      <div className="page_4-left w-[40%] overflow-hidden rounded-lg  shadow-md shadow-[black]">
        <img
          className="w-[100%] h-[60vh] hover:scale-[1.1]"
          src={Page_4_img}
          alt=""
        />
      </div>
      <div className="page_4-right w-[40%] h-[60vh] px-8 ">
        <h1 className="text-5xl font-bold mb-2">OUR SERVICES</h1>
        <div className="page_4-right_elem">
          <h2 className="w-full py-3 px-3 bg-[#65D1BE] text-xl text-white font-medium">
            Exhibition Management :
          </h2>
          <p className=" mt-2 mb-8 px-3 text-[grey] text-sm">
            End-to-end solutions from planning to execution. Booth Design &
            Construction: Custom-built booths to showcase your brand.
          </p>
        </div>
        <div className="page_4-right_elem">
          <h2 className="w-full py-3 px-3 bg-[#65D1BE] text-xl text-white font-medium">
            Event Marketing :
          </h2>
          <p className="mt-2 mb-10 px-3 text-[grey] text-sm">
            Comprehensive strategies to maximize your event's reach. Logistics &
            Support: Seamless logistics management to ensure smooth operations.
          </p>
        </div>

        <Link className="px-8 py-3 rounded-full shadow-md shadow-[#7f7f7f] bg-black text-white text-xl">
          About Page
        </Link>
      </div>
    </div>
  );
};

export default Page_4;
