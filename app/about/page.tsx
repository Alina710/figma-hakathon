import React from 'react'
import AboutHero from '../components/About'
import AboutSection from '../components/MakeBrand'
import AboutPopularProduct from '../components/AboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page