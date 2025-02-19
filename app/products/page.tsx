'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Interface for product data
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

// Interface for category data
interface Category {
  _id: string;
  name: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Function to fetch products from the REST API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://giaic-hackathon-template-08.vercel.app/api/products');
      const data = await response.json();  // Parse JSON response
      setProducts(data);  // Update state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to fetch categories from the REST API
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://giaic-hackathon-template-08.vercel.app/api/categories');
      const data = await response.json();  // Parse JSON response
      setCategories(data);  // Update state with fetched data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // Truncate product description if it's too long
  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  // Fetch products and categories on component mount
  useEffect(() => {
    fetchProducts();  // Fetch products when component mounts
    fetchCategories();  // Fetch categories when component mounts
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products from API Data
      </h2>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Categories</h3>
        <div className="flex gap-4">
          {categories.map((category) => (
            <span key={category._id} className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full">
              {category.name}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <Image
              src={product.imageUrl}  // Display product image from fetched data
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p>{truncateDescription(product.description)}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% off
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-2 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-red-500">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-4 rounded-md shadow-md">
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <Image src={item.imageUrl} alt={item.title} width={50} height={50} className="rounded-md" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-800">Your cart is empty. Please add products.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
