import React from "react";
import ImgFont from "./ImgFont";

export default function BannerLu() {
  return (
    <div>
      <div className="relative ">
        <img
          className="h-[300px] w-full object-cover "
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          alt="Banner"
        />
        <div className="absolute top-[50%] left-[50%] text-3xl text-white ">
          LUXURYIOUS
        </div>
      </div>
      <div className="flex items-center justify-center gap-[10rem] bg-black-bg ">
        <ImgFont />
        <ImgFont />
        <ImgFont />
      </div>
      <div className="bg-black-bg py-7 ">
        <h3 className="text-center text-2xl uppercase text-[#f0ff71]">DRINK</h3>
        <div className="flex items-center justify-center gap-10 text-xl text-white ">
          <div className="w-32 border-b-2 border-white text-center">TEA</div>
          <div className="w-32 border-b-2 border-white text-center">CREAM</div>
          <div className="w-32 border-b-2 border-white text-center">COFFE</div>
          <div className="w-32 border-b-2 border-white text-center">FRUITE</div>
        </div>
      </div>
    </div>
  );
}
