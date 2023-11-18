'use client';
import React from "react";
import Image from "next/image";
import products from './productdetails.json';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct } from "@/redux/features/productSlice";
import { CiStar } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";




type productT={
  id:number,
  title:string,
  img_url:string,
  price:number,
  rating:number
}

const Ecard = () => {

  const dispatch=useAppDispatch();

  const [productsList, setProducts] = React.useState([]);


  const handleClick=(product:productT)=>{
    dispatch(addProduct(product))
    console.log(product)
  }
    return (
  

      
    <div className="bg-white flex md:flex-row flex-col justify-center  md:flex-wrap">
      {products.map((product)=>(
        <div className=" xl2:w-[20rem] xl:w-[12rem] xl:h-[20rem] bg- border rounded-[25px] bg-[#D9D9D9] border-gray-200  shadow:border-gray-700 mx-[2rem] my-[1rem] mt-[3rem] mb-[3rem]" key={product.id}>

        <div className=" border-white-200 xl:h-[10rem] rounded-[25px]  ">
       
          <Image
            src={product.img_url}
            width={400}
            height={200}
            alt="example image" className=" h-full rounded-[25px]"
            />
     

        </div>
        <div>
          
        </div>

        <div className="px-5 pb-5 pt-[1rem]">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight  text-black">
             Popup Napkin
            </h5>
          </a>
          <div className="flex items-center mt-[0.2rem] ">
           
 {[...Array(5)].map(star=>{
   
   return <CiStar className="" color="yellow"/>
  })}

          
         
          </div>
          <div className="flex items-center justify-between mt-4 -mb-[0.2rem] pb-4">
            <span className="text-xl font-bold text-gray-900  dark:text-black">
              Rs.{product.price}
            </span>
            {/* <button
            onClick={()=>handleClick(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Add to cart
          </button> */}

            <button className="flex bg-[#D7E7ED] rounded-full px-2 py-2" onClick={()=>handleClick(product)}>

            <FaShoppingCart className="text-sm " color="#808080"/>
           



            </button>
          </div>
        </div>
      </div>

))}



    </div>


  );
};

export default Ecard;