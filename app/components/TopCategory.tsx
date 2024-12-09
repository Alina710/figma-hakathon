"use client";

import Image from "next/image";
import { useState } from "react";

export default function TopCategory() {
  const [categories] = useState([
    {
      name: "Wing Chair",
      image: "/Category1.png",
      products: 3584,
    },
    {
      name: "Wooden Chair",
      image: "/Category2.png",
      products: 157,
    },
    {
      name: "Desk Chair",
      image: "/Category3.png",
      products: 154,
    },
  ]);

  return (
    <main className="flex flex-col justify-between p-8 lg:p-14 space-y-10 mt-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
        Top Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-between space-y-4 text-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={350}
              height={350}
              className="object-contain"
            />
            <h2 className="text-lg font-medium">{category.name}</h2>
            <p className="text-sm text-gray-500">{category.products} products</p>
          </div>
        ))}
      </div>
    </main>
  );
}
