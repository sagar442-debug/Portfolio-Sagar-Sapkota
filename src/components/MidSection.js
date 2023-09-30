import React from "react";

export default function MidSection() {
  return (
    <div className="text-white  font-poppins overflow-hidden ">
      <div className="division-midsection">
        <div className="text-section mt-20">
          <h1>
            <span className="text-[#925ed6] text-3xl font-semibold sm:text-5xl ">
              Hello, I am Sagar Sapkota,
            </span>
          </h1>
          <h1>
            <span className="text-[#fff] text-3xl font-semibold sm:text-5xl sm:leading-[2]">
              A FullStack developer
            </span>
          </h1>
          <p className="font-extralight mt-5 text-lg space-y-5 sm:text-2xl sm:leading-[2]">
            I possess the necessary skills to create basic websites and
            proficiently handle backend development. My expertise is constantly
            evolving, as I stay up-to-date with industry trends and
            advancements.
          </p>
          <div className="button mt-10">
            <button className="p-3 bg-[#478fce] rounded-2xl hover:bg-white hover:text-[#2d3843] duration-500 sm:text-xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="circle1 absolute hover:h-32 duration-150 hover:w-32 h-64 animate-bounce w-64 bg-[#478fce]  top-[30rem] right-20 rounded-full"></div>
      </div>
    </div>
  );
}
