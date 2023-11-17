"use client";

import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { FaShoppingCart } from "react-icons/fa";

import { AllContext } from "./Context";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const { toggleCart } = useContext(AllContext);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="md:p-4 xl:p-5 text-black font-semibold text-[15px] font-primary bg-[#F1F1F1] drop-shadow-lg">
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center justify-between w-screen md:w-auto">
          <h1 className="w-auto text-xl font-bold text-[#00df9a] cursor-pointer">
            Napkin
          </h1>
          <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
        </div>
        <ul className="items-center hidden md:flex md:gap-[3rem]">
          <li className="m-3 cursor-pointer">Home</li>
          <li className="m-3 cursor-pointer">Shop</li>
          <li className="m-3 cursor-pointer">About Us</li>
          <li className="m-3 cursor-pointer">Contact</li>
          {/* <li className='p-4' onClick={toggleCart}><FaShoppingCart size={25}/></li> */}
        </ul>
        <ul className="hidden items-center md:flex md:gap-[3rem]">
          <li className=" cursor-pointer">
            <input
              className=" placeholder:text-[12px] rounded-[10px] p-[6px] pl-3 outline-none text-sm font-normal"
              placeholder="Search"
            ></input>
          </li>
          <li className="cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart className="opacity-70" size={23} />
            <p className="bg-red-500 absolute p-[7px] text-white w-4 h-4 rounded-full text-xs flex items-center justify-center top-0 mt-[22px] ml-[13px]">0</p>
          </li>
          <li className=" cursor-pointer w-6 h-6 bg-gray-500 rounded-full"></li>
        </ul>
      </div>
      
      <div className="">
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%] h-screen top-0"
          }
        >
          <h1 className="w-auto text-xl font-bold text-[#00df9a] m-4">Logo</h1>
          <li className="p-4 border-b border-gray-600 text-white">Home</li>
          <li className="p-4 border-b border-gray-600 text-white">Shop</li>
          <li className="p-4 border-b border-gray-600 text-white">About Us</li>
          <li className="p-4 border-b border-gray-600 text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


// 'use client';

// import React, { useContext,  useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// import {FaShoppingCart} from 'react-icons/fa';

// import { AllContext } from './Context';

// const Navbar = () => {
//   const [nav, setNav] = useState<boolean>(false);



//   const {toggleCart}=useContext(AllContext);



//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>Sagar E-Commerce.</h1>
//       <ul className='hidden md:flex cursor-pointer'>
//         <li className='p-4'>Home</li>
//         <li className='p-4'>Company</li>
//         <li className='p-4'>Resources</li>
//         <li className='p-4'>Contact</li>
//         <li className='p-4' onClick={toggleCart}><FaShoppingCart size={25}/></li>
//       </ul>
//       <div onClick={handleNav} className='block md:hidden'>
//           {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
//       </div>
//       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>REACT.</h1>
//           <li className='p-4 border-b border-gray-600'>Home</li>
//           <li className='p-4 border-b border-gray-600'>Company</li>
//           <li className='p-4 border-b border-gray-600'>Resources</li>
//           <li className='p-4 border-b border-gray-600'>About</li>
//           <li className='p-4'>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;