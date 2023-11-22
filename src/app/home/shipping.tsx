import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const shipping = () => {
  return (
    <div className="py-[2rem] flex flex-col lg:flex-row md:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-6 lg:mx-[5rem] md:mx-[5rem] font-primary">
      <div className="lg:w-[26rem] w-[75%] md:w-[24rem] p-[3rem] h-[15rem] bg-[#cfcece] flex flex-col items-center justify-center rounded-[25px] gap-2">
        <span className="bg-[#D7E7ED] p-2 rounded-full">
          <LiaShippingFastSolid className="w-8 h-auto opacity-75" />
        </span>
        <p className="font-semibold text-[16px] text-center">Fast Shipping</p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="lg:w-[23rem] w-[17.5rem] h-[6rem] lg:h-[7rem] bg-[#cfcece] flex items-center justify-center rounded-[25px] gap-4">
          <span className="bg-[#D7E7ED] p-2 rounded-full">
            <AiFillDollarCircle className="w-8 h-auto opacity-75" />
          </span>
          <p className="font-semibold text-[16px]">Money Back Guarantee</p>
        </div>
        <div className="lg:w-[23rem] w-[17.5rem] h-[6rem] lg:h-[7rem] bg-[#cfcece] flex items-center justify-center rounded-[25px] gap-4">
          <span className="bg-[#D7E7ED] p-2 rounded-full">
            <MdVerified className="w-8 h-auto opacity-75" />
          </span>
          <p className="font-semibold text-[16px]">100% Verified Product</p>
        </div>
      </div>

      <div className="lg:w-[26rem] w-[75%] p-[3rem] h-[15rem] bg-[#cfcece] flex flex-col items-center justify-center rounded-[25px] gap-2">
        <span className="bg-[#D7E7ED] p-2 rounded-full">
          <RiSecurePaymentLine className="w-8 h-auto opacity-75" />
        </span>
        <p className="font-semibold text-[18px] text-center">
          Secure Payment System
        </p>
      </div>
    </div>
  );
};

export default shipping;
