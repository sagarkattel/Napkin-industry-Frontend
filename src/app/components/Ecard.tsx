'use client';
import React from "react";
import Image from "next/image";
import products from './productdetails.json';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct } from "@/redux/features/productSlice";
import { CiStar } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";




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
  

      
      <div className="flex justify-center px-[1rem]">

    <div className="bg-white grid  grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mr-[2rem] -pl[-0.5rem]    mx-[2rem] mt-[1rem]">

    {products.map((product) => (
  
    <div className=" 2xl:w-[19rem] xl:w-[18.5rem] lg:w-[15rem] md:w-[11rem] border rounded-[25px] bg-[#D9D9D9] border-gray-200 mx-[1.5rem] shadow:border-gray-700 mb-[3rem]" key={product.id}>
      <div className="  2xl:h-[20rem] xl:h-[20rem] lg:h-[13rem]  md:h-[13rem] w-full rounded-[25px]  ">
      
        <Image
          src={product.img_url}
          width={400}
          height={200}
          alt="example image"
          className="h-full rounded-[25px]"
        />
        
      </div>
      
      <div className="px-5 pb-5 pt-[1rem] flex flex-row">
      
      <Link href={`/productdetail/${product.id}`} key={product.id}>
      <div className=" w-[220px] gap-[10px] h-[80px] flex flex-col">
      <h5 className="text-xl font-semibold tracking-tight  text-black">
          {product.title}
        </h5>

        <span className="text-xl font-bold text-gray-900  dark:text-black">
            Rs.{product.price}
          </span>
      </div>
      </Link>

      <div className="ml-auto flex items-center">
      <button className="flex bg-[#D7E7ED] rounded-full px-2 py-2 items-center" onClick={() => handleClick(product)}>
            <FaShoppingCart className="text-sm " color="#808080" />
          </button>
      </div>


        {/* <h5 className="text-xl font-semibold tracking-tight  text-black">
          Popup Napkin
        </h5>
        <div className="flex items-center justify-between mt-4 -mb-[0.2rem] pb-4">
          <span className="text-xl font-bold text-gray-900  dark:text-black">
            Rs.{product.price}
          </span>
          <button className="flex bg-[#D7E7ED] rounded-full px-2 py-2" onClick={() => handleClick(product)}>
            <FaShoppingCart className="text-sm " color="#808080" />
          </button>
        </div> */}
      </div>
    </div>

))}




    </div>

</div>

  );
};

export default Ecard;