'use client';
import Image from 'next/image';

import { FC } from 'react';

const ProductDetail: FC = () => {
  return (
    
    <div className="container mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src="/path-to-chair-image.jpg"
            alt="Library Stool Chair"
            className="rounded-lg shadow-lg "
            width={400}
            height={200}
            
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">Library Stool Chair</h1>
          <p className="text-teal-600 text-xl mt-2">$20.00 USD</p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
