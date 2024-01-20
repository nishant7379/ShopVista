import React from "react";
// Assets
import { WomenHero } from "../assets";

import { iPhoto } from "../assets";

// react-router-dom
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* Text */}
        <div className="flex flex-col justify-center">
          {/* Pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>

          {/* Title */}
          <h1 className="text-[50px] leading-[1.1] font-light mb-4">
            STYLISH SEASON SALE <br />
            <span className="font-semibold">WOMEN</span>
          </h1>

          {/* <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
          </Link> */}

          <button className="self-start uppercase font-semibold border-b-2 border-primary animate-bounce"
             onClick={() => window.scrollTo({ top: 730, behavior: "smooth" })}
          >
           Discover More
          </button>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          {/* <img src={WomenHero} alt=""/> */}
          <img src={iPhoto} alt="" className="h-[712px] w-[510px]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
