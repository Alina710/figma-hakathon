import React from "react";
import ProductCard from "./ProductCard";

const products = [
  
  {
    image: "/image 8.png",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
    isNew: true,
  },
  {
    image: "/image 2.png",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
    isOnSale: true,
  },
  {
    image: "/image 9.png",
    name: "Library Stool Chair",
    price: "$20",
  },
  {
    image: "/image 4.png",
    name: "Library Stool Chair",
    price: "$20",
  },
  {
    image: "/image 5.png",
    name: "Library Stool Chair",
    price: "$20",
    isNew: true,
  },
  {
    image: "/image 6.png",
    name: "Library Stool Chair ",
    price: "$20",
    originalPrice: "$30",
    isOnSale: true,
  },
  {
    image: "/image 7.png",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
  },
  {
    image: "/image 8.png",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
  
  },
];

const ProductsPage = () => {
  return (
    <div className="py-8 px-12 md:px-10 container mx-auto  flex flex-col items-center space-y-10 lg:px-16">
      <h1 className="text-3xl font-semibold text-center  text-gray-600 mt-10 justify-center items-center flex">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
