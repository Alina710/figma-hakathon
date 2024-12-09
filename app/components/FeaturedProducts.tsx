import React from 'react';
import Image from 'next/image';



type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
};

const products: Product[] = [
  { id: 1, name: "Library Stool Chair", price: 20, image: "/image 8.png", isNew: true },
  { id: 2, name: "Library Stool Chair", price: 20, oldPrice: 30, image: "/image 2.png", isOnSale: true },
  { id: 3, name: "Library Stool Chair", price: 20, image: "/image 9.png" },
  { id: 4, name: "Library Stool Chair", price: 20, image: "/image 4.png" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="p-14 flex flex-col space-y-10 px-4 lg:px-16 -mt-20 -mb-12">
      <h1 className="text-4xl font-semibold  text-gray-700">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className=" h-377 w-317">
            <div className="relative">
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              {product.isOnSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
           
              <Image
                src={product.image}
                alt={product.name}
                height={312}
                width={312}
                className="w-full h-700 object-cover rounded-md"
              />
              
            </div>
            <h3 className="mt-4 font-medium text-lg">{product.name}</h3>
            <div className="flex items-center mt-2">
              <span className="text-xl font-semibold text-gray-800">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default FeaturedProducts;
