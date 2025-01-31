import Image from "next/image";
import React from "react";

const AboutPopularProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32  flex flex-col text-gray-900 space-y-10 px-4 lg:px-16">
      <h2 className="text-[32px] font-semibold text-left mb-4">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src="/Large.png"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"  
          />
          <p className="pt-5 text-[20px] font-normal text-left text-gray-800 ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left text-gray-800">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/Parent 2.png"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left text-gray-800">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left text-gray-800 ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src="/Parent.png"
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left text-gray-800">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-24 text-left text-gray-800">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPopularProduct;