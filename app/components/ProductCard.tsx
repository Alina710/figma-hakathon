import React from "react";
import { CiShoppingCart } from "react-icons/ci";


interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isFirst?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
  isNew,
  isOnSale,
  isFirst,
}) => {
  return (
    <div className="relative  m-1 ">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg ">{name}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold text-teal-600">{price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-500">{originalPrice}</span>
          )}
        </div>
      </div>
      {isNew && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          New
        </div>
      )}
      {isOnSale && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          Sales
        </div>
      )}
      <div className="absolute bottom-2 right-2">
        <button
          className={`p-2 rounded ${
            isFirst ? "bg-[#029FAE] rounded-5" : "bg-gray-300"
          } shadow-md`}
        >
          <CiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
