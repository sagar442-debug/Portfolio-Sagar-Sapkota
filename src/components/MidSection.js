import React from "react";

export default function MidSection() {
  return (
    <div className="text-white  font-poppins">
      <div className="text-section mt-10 space-y-3">
        <h1>
          <span className="text-[#925ed6] text-3xl font-semibold">
            Hello, I am Sagar Sapkota,
          </span>
        </h1>
        <h1>
          <span className="text-[#fff] text-3xl font-semibold">
            A FullStack developer
          </span>
        </h1>
        <p className="font-normal mt-5">
        I possess the necessary skills to create basic websites and proficiently handle backend development. My expertise is constantly evolving, as I stay up-to-date with industry trends and advancements.
        </p>
        <button className="p-3 bg-[#478fce] rounded-2xl  hover:bg-white hover:text-[#2d3843] duration-500">Download CV</button>
      </div>
    
    </div>
  );
}
