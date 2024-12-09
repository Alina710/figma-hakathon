import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full px-4 lg:px-0 container mx-auto flex-col space-y-10">
      <div className="flex flex-col lg:flex-row items-center  p-8 bg-[#F0F2F3] rounded-lg shadow-md border border-gray-200 w-full max-w-6xl ml-32 mr-32">
        {/* Left Section: Text */}
        <div className="flex flex-col items-start gap-4 text-center lg:text-left p-12">
          <p className="text-sm text-gray-500 tracking-wide">WELCOME TO CHAIRY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug ">
            Best Furniture <br className="hidden md:block" /> Collection For Your <br className="hidden md:block" /> Interior.
          </h1>
          <button className="mt-4 px-6 py-3 text-white font-medium rounded-lg bg-[#029FAE] hover:bg-[#027c89] transition">
            Shop Now →
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/Product image.png"
            alt="Chair"
            height={400}
            width={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
