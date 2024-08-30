import React from "react";
import Page_5_img1 from "../assets/img/Page5_img1.jpg";
import Page_5_img2 from "../assets/img/Page5_img2.jpg";
import Page_5_img3 from "../assets/img/Page5_img3.jpg";
import Page_5_img4 from "../assets/img/Page5_img4.jpg";
import Page_5_img5 from "../assets/img/Page5_img5.jpg";
const Page_5 = () => {
  return (
    <div className="page_5 flex flex-col items-center justify-center gap-10 w-full min-h-[100vh]  pt-[10vw] px-20" id="PROJECTS">
      <h1 className="text-5xl font-bold mb-4">OUR PROJECTS</h1>
      <div className=" flex items-center justify-evenly gap-10 flex-wrap w-[100%]  py-10">
        {[Page_5_img1, Page_5_img2, Page_5_img3, Page_5_img4, Page_5_img5].map(
          (item, index) => (
            <img key={index} className="w-[45%] h-[45vh] hover:scale-[1.1] shadow-md shadow-[black] rounded-lg bg-green-300" src={item} alt="" />
          )
        )}
      </div>
    </div>
  );
};

export default Page_5;
