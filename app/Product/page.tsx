import React from 'react'
import Instagram from '../components/Aboutinstagram'
import ProductsPage from '../components/ProductPage'
import FeaturedProducts from '../components/FeaturedProducts'

const page = () => {
  return (
      <div>
          
          <ProductsPage />
          <FeaturedProducts />
          <Instagram />
      
    </div>
  )
}

export default page