import React from "react";

export default function ProductBox() {
  return (
    <div>
      <img
        className="mb-4 h-[252px] w-[200px] object-cover"
        src="https://giadinh.mediacdn.vn/296230595582509056/2022/12/21/an-gi-94-16715878747321412948503.jpg"
        alt=""
      />
      <div className="text-center">
        <h4 className="text-[#f6ff69]">LOREM INBUST</h4>
        <p className="text-white">lorem inbust</p>
        <p className="text-white">lorem inbust</p>
        <p className="text-white">lorem inbust</p>
      </div>
      <div>
        <i class="cil-star"></i>
        <i class="cil-star"></i>
        <i class="cil-star"></i>
        <i class="cil-star"></i>
        <i class="cil-star"></i>
      </div>
      <div className="border-2 border-white p-2 text-center text-white">
        <button>100.00$</button>
      </div>
    </div>
  );
}
