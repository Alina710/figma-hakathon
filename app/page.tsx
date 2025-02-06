import React from 'react'
import Hero from "./components/Hero";
import ProductsPage from "./components/ProductPage";
import LogoGrid from "./components/LogoGrid";
import TopCategory from "./components/TopCategory";
import FeaturedProducts from "./components/FeaturedProducts";
import HotCategory from "./components/HotCategory";
import ProductCards from './products/page';


const page = () => {
  return (
    <div>
      <Hero />
       <LogoGrid />
       <FeaturedProducts />
       <TopCategory />
       <HotCategory />
       <ProductsPage />
       <ProductCards />
       
    </div>
  )
}

export default page;
