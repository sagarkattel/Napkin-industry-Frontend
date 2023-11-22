'use client';
import Image from "next/image";
import React, {useEffect, useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Ecard, { productT } from "../components/Ecard";
import products from "../components/productdetails.json";
import { Product } from "../productdetail/[id]/page";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct } from "@/redux/features/productSlice";

const SortBar = () => {

  const dispatch = useAppDispatch();

  const handleClick = (product: productT) => {
    dispatch(addProduct(product));
    console.log(product);
  };

  const [selectedCategory, setSelectedCategory] = useState('');

  const [selectedRating, setSelectedRating] = useState('');

  const [selectedPrice, setSelectedPrice] = useState('');


  const handleCategoryChange = (event:any) => {
    setSelectedCategory(event.target.value);
  };

  const handleRatingChange=(event:any)=>{
    setSelectedRating(event.target.value);
  }

  const handlePriceChange=(event:any)=>{
    setSelectedPrice(event.target.value);
  }

  console.log("Price range is ",selectedPrice);
  

  

  const isPriceInRange = (price: number, range: string): boolean => {
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  }

  const productsFiltered = products.filter((p: Product) => {
    const categoryMatch = selectedCategory === '' || p.category === selectedCategory;
    const ratingMatch = selectedRating === '' || String(p.rating) === selectedRating;
    const priceRangeMatch = selectedPrice === '' || isPriceInRange(p.price, selectedPrice);
    return categoryMatch && ratingMatch && priceRangeMatch;
  });
  
 


  return (
    <div className="flex flex-col">
      <div className="bg-[#D7E7ED]  w-full   border xll:w-[85rem] xl:w-[73rem]    lg:w-[55rem] mt-[1rem] md:h-[4rem]  md:w-[50rem] rounded-[5px]  shadow-[#7bc9e6]  md:ml-[97px]">
        <div className=" flex flex-col sm:flex-row  justify-between  mt-[0.59rem] mb-[0.5rem] gap-1 md:gap-4 px-4 ">
          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between gap-3">
          <select id="CATEGORIES" className="rounded-lg block w-full " onChange={handleCategoryChange}>
              <option selected>CATEGORIES</option>
              <option value="napkin">Napkin</option>
              <option value="tissuepaper">Tissue Paper</option>
              <option value="toiletpaper">Toilet Paper</option>
              <option value="kitchetowel">Kitchen Towel</option>
              <option value="dispencary">Dispencary</option>
            </select>
          </div>

          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between">
          <select id="PRICE RANGE" className="rounded-lg block w-full " onChange={handlePriceChange}>
              <option selected>PRICE RANGE</option>
              <option value="100-500">100-500</option>
              <option value="500-900">500-900</option>
              <option value="900-1200">900-1200</option>
              <option value="1200-1600">1200-1600</option>
              <option value="1600-1900">1600-1900</option>
            </select>
          </div>
          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between">
            <select id="RATING" className="rounded-lg block w-full " onChange={handleRatingChange}>
              <option selected>RATING</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>


          

        </div>
      </div>

      <div>
      {selectedCategory||selectedRating ||selectedPrice ? (

<div className="flex justify-center items-center mx-[5rem] font-primary">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-[1rem] gap-[18px]">

      
          

{Array.isArray(productsFiltered) && productsFiltered.map((product: Product) => (
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

      ) : 
      <Ecard />
      }
      </div>


    </div>
  );
};

export default SortBar;
