import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32  flex flex-col items-center space-y-10 px-4 lg:px-16 ">
      <h2 className="text-[32px] font-semibold  mb-2  text-gray-700 ">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#F9F9F9] p-6 ">
          <h3 className="text-[20px] font-normal text-[#007580]  pt-5">
            <FaTruck className="text-[#007580] mb-2 block" />
            Next day as standard
          </h3>
          <p className="text-[16px] font-normal text-[#007580]  mt-4">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 ">
          <h3 className="text-[20px] font-normal text-[#007580]  pt-5">
            <FaCheck className="text-[#007580] mr-2" />
            Made by true artisans
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 ">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 ">
          <h3 className="text-[20px] font-normal text-[#007580]  pt-5">
            <IoFileTrayOutline className="text-[#007580] mr-3" />
            Unbeatable prices
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 ">
          <h3 className="text-[20px] font-normal text-[#007580]  pt-5">
            <BiSolidLeaf className="text-[#007580] mr-3" />
            Recycled packaging
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;