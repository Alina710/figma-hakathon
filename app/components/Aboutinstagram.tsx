import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className=" bg-[#F0F2F3] m-20 mt-12 p-20">
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6 ">
        <h2 className="font-semibold text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col items-start mt-12">
            <span className="text-[#8F9499] text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="text-[16px] font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[50px] font-semibold text-center mb-1">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center  ">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/image.png"
              alt="Instagram product 1"
              
              objectFit="cover"
              width={140}
              height={140}
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg gap-8">
            <Image
              src="/Frame.png"
              alt="Instagram product 2"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg ">
            <Image
              src="/image 2.png"
              alt="Instagram product 3"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/image 8.png"
              alt="Instagram product 4"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/image 9.png"
              alt="Instagram product 5"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/card.png"
              alt="Instagram product 6"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;