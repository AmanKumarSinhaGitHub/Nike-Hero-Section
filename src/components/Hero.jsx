import React from "react";
import { shoe } from "../assets/images";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="herosection w-full grid grid-cols-12 sm:mt-20 mt-10">
        <div className="left-part sm:col-span-7 col-span-12">
          <h1 className="uppercase lg:text-[5.4rem] md:text-6xl text-5xl font-bold ">
            Your feet deserve <br /> the best
          </h1>

          <div className="button mt-10">
            <Button buttonText="BUY NOW" />
          </div>
        </div>
        <div className="right-part sm:col-span-5 sm:mt-0 mt-10 col-span-12 flex items-center justify-center">
          <img src={shoe} alt="shoe" width="100%" />
        </div>
      </div>
    </>
  );
};

export default Hero;
