import React from 'react';
import { CiCircleAlert } from 'react-icons/ci';
import { FaBars, FaCheck, FaShoppingCart, FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className='hidden md:flex justify-between items-center px-4 py-2 bg-[#272343] text-gray-200'>
        <div className='text-sm flex items-center'>
          <FaCheck className='mr-2' />
          Free shipping on all orders over $50
        </div>
        <div className='flex items-center space-x-4 text-sm'>
          <div className='flex items-center space-x-1'>
            <span className='hover:underline'>Eng</span>
            <FaAngleDown />
          </div>
          <Link href="/faq" className='hover:underline'>FAQs</Link>
          <div className='flex items-center space-x-1'>
            <CiCircleAlert size={16} />
            <span className='hover:underline'>Need Help</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className='bg-gray-100 shadow-md border-b border-gray-200 px-4 py-3 md:px-20 lg:px-56'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <Image src="/Logo icon.png" alt="Logo" height={40} width={40} />
            <span className='text-2xl font-bold text-gray-700'>Comforty</span>
          </div>

          {/* Cart and Links */}
          <div className='hidden md:flex items-center space-x-6'>
            <Link href="/cart" className='relative flex items-center text-gray-700 hover:text-gray-900'>
              <FaShoppingCart size={20} />
              <span className='ml-2'>Cart</span>
              <span className='absolute -top-1 -right-4 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                2
              </span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className='md:hidden flex items-center'>
            <FaBars size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Navbar Links */}
      <div className='bg-white px-5 md:px-20 lg:px-56 py-6'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-wrap justify-center md:justify-start space-x-6 font-semibold text-gray-500 -ml-36'>
            <Link href="/" className='text-teal-600'>Home</Link>
            <Link href="#" className='hover:text-teal-600'>Shop</Link>
            <Link href="/Product" className='hover:text-teal-600'>Product</Link>
            <Link href="/contact" className='hover:text-teal-600'>Contact</Link>
            <Link href="/about" className='hover:text-teal-600'>About</Link>
          </div>
          <div className='text-gray-700 mt-4 md:mt-0'>
            <Link href="/contact">Contact</Link>: <span className='font-semibold hover:text-teal-600'>(808) 555-0111</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
