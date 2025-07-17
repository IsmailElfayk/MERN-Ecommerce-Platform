import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-black text-white ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm pt-5">
        <div>
          <img src={assets.logo} className="mb-5 w-auto h-[30px]" alt="" />
          <p className="w-full md:w-2/3 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            dicta nam quis repudiandae temporibus, dolorem, sequi saepe
            perferendis deleniti nesciunt distinctio cumque. Veritatis eos velit
            nulla officiis repellat, id repellendus.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>+1-212-456-7890</li>
            <li>contact@email.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ FSDM.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
