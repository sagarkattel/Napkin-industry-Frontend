'use client'
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
// import products from "./productdetails.json";
import { AllContext } from './Context'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ProductProp, removeProduct } from "@/redux/features/productSlice";

const Cart = () => {
  

  const {isCartOpen,toggleCart}=useContext(AllContext);

  const products:ProductProp[] = useAppSelector((state:any) => state.product.products);

  const dispatch=useAppDispatch();


  let subtotal=0;

  const productElements = products.map((product) => (
  <li key={product.id}>
    {subtotal += product.price * product.quantity}
  </li>
));

  

  return (
    isCartOpen && (
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={toggleCart}
                        >
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products?.map((product) => (
                            <li className="flex py-6" key={product.id}>
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image
                                  src={product.img_url}
                                  width={400}
                                  height={200}
                                  alt="example image"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{product.title}</a>
                                    </h3>
                                    <p className="ml-4">${product.price*product.quantity}</p>
                                  </div>
                                  {/* <p className="mt-1 text-sm text-gray-500">
                                    Salmon
                                  </p> */}
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {product.quantity}</p>

                                  <div className="flex">
                                    <button
                                    onClick={(event) => dispatch(removeProduct(product.id))}
                                    //   type="button"
                                      className="font-medium text-[#00df9a] hover:text-[#71bfa6]"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${subtotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-[#00df9a] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#63ebc0]"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                        onClick={toggleCart}
                        //   type="button"
                          className="font-medium text-[#00df9a] hover:text-[#6ad1b1]"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
