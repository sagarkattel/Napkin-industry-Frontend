import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const shipping = () => {
  return (
    <div className="py-[2rem] flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4 mx-[4rem] font-primary">
      <div className="w-[16rem] p-[3rem] h-[13rem] bg-[#cfcece] flex flex-col items-center justify-center rounded-[25px] gap-2">
        <span className="bg-[#D7E7ED] p-2 rounded-full">
          <LiaShippingFastSolid className="w-7 h-auto opacity-75" />
        </span>
        <p className="font-semibold text-[13px] text-center">Fast Shipping</p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-[16rem] h-[6rem] bg-[#cfcece] flex items-center justify-center rounded-[25px] gap-4">
          <span className="bg-[#D7E7ED] p-2 rounded-full">
            <AiFillDollarCircle className="w-7 h-auto opacity-75" />
          </span>
          <p className="font-semibold text-[13px]">Money Back Guarantee</p>
        </div>
        <div className="w-[16rem] h-[6rem] bg-[#cfcece] flex items-center justify-center rounded-[25px] gap-4">
          <span className="bg-[#D7E7ED] p-2 rounded-full">
            <MdVerified className="w-7 h-auto opacity-75" />
          </span>
          <p className="font-semibold text-[13px]">100% Verified Product</p>
        </div>
      </div>

      <div className="w-[16rem] p-[3rem] h-[13rem] bg-[#cfcece] flex flex-col items-center justify-center rounded-[25px] gap-2">
        <span className="bg-[#D7E7ED] p-2 rounded-full">
          <RiSecurePaymentLine className="w-7 h-auto opacity-75" />
        </span>
        <p className="font-semibold text-[13px] text-center">
          Secure Payment System
        </p>
      </div>
    </div>
  );
};

export default shipping;
