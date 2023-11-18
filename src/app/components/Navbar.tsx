"use client";

import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { FaShoppingCart } from "react-icons/fa";

import { AllContext } from "./Context";
import { useAppSelector } from "@/redux/hooks";
import { ProductProp } from "@/redux/features/productSlice";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const { toggleCart } = useContext(AllContext);

  const products:ProductProp[] = useAppSelector((state:any) => state.product.products);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="p-3 text-black font-semibold text-[15px] font-primary bg-[#F1F1F1] drop-shadow-lg lg:w-full">
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center justify-between w-full lg:w-auto md:w-auto">
          <h1 className="w-auto text-xl font-bold text-[#00df9a] cursor-pointer">
            Napkin
          </h1>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        <ul className="items-center hidden lg:gap-[5rem] text-sm lg:flex lg:mx-5 md:flex md:gap-[1rem]">
          <li className="m-3 cursor-pointer">Home</li>
          <li className="m-3 cursor-pointer">Shop</li>
          <li className="m-3 cursor-pointer">About Us</li>
          <li className="m-3 cursor-pointer">Contact</li>
          {/* <li className='p-4' onClick={toggleCart}><FaShoppingCart size={25}/></li> */}
        </ul>

        <ul className="lg:flex md:flex items-center lg:gap-[2rem] md:gap-[18px]">
          <li className="cursor-pointer">
            <input
              className="absolute lg:relative md:relative left-[8rem] top-[13px] placeholder:text-[12px] rounded-[10px] p-[2px] pl-2 w-[50%] lg:p-[6px] lg:pl-3 lg:top-[1px] lg:left-[4px] outline-none lg:text-sm font-normal md:p-[4px] md:w-[10rem] md:pl-4 md:top-[1px] md:left-[4px]"
              placeholder="Search"
            ></input>
          </li>

          <li className="hidden md:flex lg:flex cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart className="opacity-70" size={23} />
            <p className="bg-red-500 absolute p-[7px] text-white w-4 h-4 rounded-full text-xs flex items-center justify-center top-0 mt-[18px] ml-[13px]">
              {products.length}
            </p>
          </li>
          <li className="hidden md:flex lg:flex cursor-pointer w-6 h-6 bg-gray-500 rounded-full"></li>
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
