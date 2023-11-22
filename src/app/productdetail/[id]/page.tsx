"use client";
import Image from "next/image";
import products from "../../components/productdetails.json";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { useState } from "react";

export interface Product {
  id: number;
  title: string;
  img_url: string;
  category:string;
  price: number;
  rating: number;
}

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const product = products.find(
    (p: Product) => p.id === parseInt(params.id as string, 10)
  );

  const [count, setCount] = useState(1);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="flex  px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className=" lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product?.img_url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-400 tracking-widest">
                PREMIMUM QUALITY
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-[0.5rem]">
                {product?.title}
              </h1>
              <div className="flex mb-4">

              <span className="title-font font-medium text-2xl text-gray-900">
                  Rs.{product?.price}
                </span>
              </div>

              <span className="text-[20px]">
                Description
              </span>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>

<div className="flex mt-[1rem]">

              <span className="flex items-center ">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
                      </div>
           
              <div className="flex flex-col mt-[1rem]">
                
                
                <div className="border mt-[1rem]"></div>

                <div className=" mt-[1rem]  text-green-600 px-[0.3rem]">
              
              IN STOCKS
                </div>
                <div className="flex items-center mt-[0.2rem]  gap-1 ">
                  <span>
                    <IoLocationSharp />
                  </span>
                  <span>Free Delivery</span>
                  
                </div>


                <div className="flex justify-between  items-center flex-wrap">
                  <div className="w-32 mb-8 mt-[2rem] ">
                    <label
                      htmlFor=""
                      className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                    >
                      Quantity
                    </label>
                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                      <button
                        onClick={onClickMinus}
                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-400"
                      >
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="flex items-center w-full font-semibold text-center textblaczz placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400  focus:outline-none text-md hover:text-black "
                        placeholder={count.toString()}
                      />
                      <button
                        onClick={onClickAdd}
                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-400"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>

                  <div className="  flex  gap-[1rem] mt-[2.6rem]">
                    <button className=" h-10  text-white bg-red-500 border-0 py-2 focus:outline-none hover:bg-red-600 rounded-[10px] w-[10rem] ">
                      <span className="flex justify-center gap-3 ">
                        Add to cart{" "}
                        <FaShoppingCart className="mt-[0.13rem]" size={20} />{" "}
                      </span>

                    
                    </button>

                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
