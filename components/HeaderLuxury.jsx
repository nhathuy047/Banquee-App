import React from "react";

export default function HeaderLuxury() {
  return (
    <div>
      <>
        <header className=" flex h-28 items-center justify-between bg-black-txt px-20  text-white ">
          <div>
            <img src="" alt="LOGO" />
          </div>
          <div className="flex items-center justify-between gap-10">
            <li className="list-none">Home</li>
            <li className="list-none">Menu</li>
            <li className="list-none">News</li>
            <li className="list-none">Booking</li>
          </div>
          <div className="flex justify-between gap-10 ">
            <div>tìm</div>
            <div>card</div>
            <div>account</div>
          </div>
        </header>
      </>
    </div>
  );
}
