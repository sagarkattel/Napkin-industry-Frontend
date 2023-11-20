"use client";
import React from "react";
import Image from "next/image";
import products from "./productdetails.json";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct } from "@/redux/features/productSlice";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

type productT = {
  id: number;
  title: string;
  img_url: string;
  price: number;
  rating: number;
};

const Ecard = () => {
  const dispatch = useAppDispatch();

  const [productsList, setProducts] = React.useState([]);

  const handleClick = (product: productT) => {
    dispatch(addProduct(product));
    console.log(product);
  };
  return (
    <div className="flex justify-center items-center mx-[5rem] font-primary">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-[1rem] gap-[18px]">
        {products.map((product) => (
          <div
            className="rounded-[25px] bg-[#D9D9D9] border-gray-200 shadow:border-gray-700"
            key={product.id}
          >
            <div className="lg:h-auto md:h-[13rem] w-full rounded-[25px]">
              <Image
                src={product.img_url}
                width={400}
                height={200}
                alt="example image"
                className="h-auto rounded-[25px]"
              />
            </div>

            <div className="p-4 flex flex-row items-center justify-center ">
              <Link href={`/productdetail/${product.id}`} key={product.id}>
                <div className="h-[80px] flex flex-col gap-1">
                  <h5 className="text-[17px] font-semibold tracking-tight text-black">
                    {product.title}
                  </h5>

                  <div className="flex flex-row gap-[2px]">
                    <span>
                      <FaStar className="w-[18px] h-auto text-yellow-400" />
                    </span>
                    <span>
                      <FaStar className="w-[18px] h-auto text-yellow-400" />
                    </span>
                    <span>
                      <FaStar className="w-[18px] h-auto text-yellow-400" />
                    </span>
                    <span>
                      <FaStar className="w-[18px] h-auto text-yellow-400" />
                    </span>
                  </div>

                  <span className="text-[15px] font-medium text-gray-900  dark:text-black">
                    Rs.{product.price}
                  </span>
                </div>
              </Link>

              <div className="ml-auto flex items-center">
                <button
                  className="flex bg-[#D7E7ED] rounded-full p-3 items-center"
                  onClick={() => handleClick(product)}
                >
                  <FaShoppingCart className="w-5 h-auto opacity-75" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecard;
