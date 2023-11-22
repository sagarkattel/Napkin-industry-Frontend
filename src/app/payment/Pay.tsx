"use client";
import React, { useState } from "react";
import Image from "next/image";
import Esewa from "../../../public/image/esewa.png";
import Heading from "../../../public/image/Heading.png";
import { IoCloseSharp } from "react-icons/io5";

const Pay = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fieldWarning, setFieldWarning] = useState("");

  const [orderPlaced, isOrderPlaced] = useState(false);
  const [onCash, isOnCash] = useState(true);

  const handleOnCash = () => {
    isOnCash(!onCash);
  };

  const handelDel = () => {
    isOrderPlaced(false);
  };

  const handleUserId = (e: any) => {
    setUserId(e.target.value);
    setFieldWarning(" ");
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
    setFieldWarning(" ");
  };

  const handleName = (e: any) => {
    setName(e.target.value);
    setFieldWarning(" ");
  };

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
    setFieldWarning(" ");
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    setFieldWarning(" ");
  };

  const handleAddress = (e: any) => {
    setAddress(e.target.value);
    setFieldWarning(" ");
  };

  const handleSumbit = () => {
    isOrderPlaced(true);
    if (
      userId.length === 0 ||
      password.length === 0 ||
      name.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      setFieldWarning("Field is Empty");
      isOrderPlaced(false);
    }
  };

  return (
    <div className="font-primary my-4">
      <h1 className="w-auto text-center text-3xl font-medium tracking-wide text-[#00df9a] cursor-pointer ">
        Napkin
      </h1>
      <div className="mx-[5rem] mt-7 flex flex-row gap-[7rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold">Hi [Name],</h1>
            <p className=" w-[30rem] opacity-75 font-medium text-[15px]">
              To ensure your financial records are accurate, please make the
              necessary payment to clear your outstanding advance.
            </p>
          </div>

          <p className="w-[4rem] h-1 bg-[#00df9a] rounded-full"></p>

          <div className="flex flex-col">
            <p className="font-semibold text-[16px]">Product Detail</p>
            <div className="flex flex-col gap-4 pt-2">
              <div className="bg-gray-200 p-2 px-4 flex flex-row items-center justify-between gap-2 rounded-lg">
                <Image
                  className="w-[4rem] mb-2"
                  src={Heading}
                  alt="product image"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-semibold opacity-80">
                    Napkin paper white quality paper quality of 400x400 size
                  </p>
                  <p className="text-sm font-medium opacity-80">Rs.2500</p>
                </div>
              </div>

              <div className="bg-gray-200 p-2 px-4 flex flex-row items-center justify-between gap-2 rounded-lg">
                <Image
                  className="w-[4rem] mb-2"
                  src={Heading}
                  alt="product image"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-semibold opacity-80">
                    Toilet paper white quality paper quality of 400x400 size
                  </p>
                  <p className="text-sm font-medium opacity-80">Rs.2500</p>
                </div>
              </div>

              <div className="bg-gray-200 p-2 px-4 flex flex-row items-center justify-between gap-2 rounded-lg">
                <Image
                  className="w-[4rem] mb-2"
                  src={Heading}
                  alt="product image"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-semibold opacity-80">
                    Napkin paper white quality paper quality of 400x400 size
                  </p>
                  <p className="text-sm font-medium opacity-80">Rs.2500</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[15rem]">
            <p className="font-semibold text-[16px]">Payment Details</p>
            <span className="flex flex-row items-center justify-between">
              <p className="opacity-75 font-medium text-[15px]">
                Amount to pay
              </p>
              <p className="font-semibold text-[15px]">Rs.5000</p>
            </span>
            <span className="flex flex-row items-center justify-between">
              <p className="opacity-75 font-medium text-[15px]">Due Date</p>
              <p className="font-semibold text-[15px]">Date</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Pay with:</h1>
          <Image
            className="w-[10rem] h-auto cursor-pointer"
            src={Esewa}
            alt="esewa image"
          />

          <div className="flex flex-col gap-2 w-[20rem] mt-5">
            <p className="font-medium ">Your Detail:</p>
            {onCash && (
              <div className="flex flex-col gap-2">
                <input
                  className="border-2 border-gray-400 rounded-[2px] p-[6px] w-[29.5rem] placeholder:text-[15px}"
                  placeholder="User Id"
                  value={userId}
                  onChange={handleUserId}
                ></input>

                <input
                  className="border-2 border-gray-400 rounded-[2px] p-[6px] w-[29.5rem] placeholder:text-[15px]"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                ></input>
              </div>
            )}
          </div>

          <div className="mb-3 flex flex-col">
            <div className="grid grid-cols-2 gap-4 mt-1">
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="Name"
                value={name}
                onChange={handleName}
              ></input>
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhone}
              ></input>
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              ></input>
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="Shipping Address"
                value={address}
                onChange={handleAddress}
              ></input>
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="Country"
              ></input>
              <input
                className="border-2 border-gray-400 rounded-[2px] p-[6px] placeholder:text-[15px]"
                placeholder="City"
              ></input>
            </div>
            <button
              onClick={handleOnCash}
              className="flex flex-row gap-3 items-center mt-4 w-[10rem]"
            >
              {onCash ?(
                <p className="w-4 h-4 border-2 border-[#00df9a] rounded-full cursor-pointer"></p>
              ): (
                <p className="w-4 h-4 border-2 bg-[#00df9a] rounded-full cursor-pointer"></p>
              )}

              <h1 className="font-medium text-[15px]">Cash On Delivery</h1>
            </button>
          </div>

          <div className="mt-[1rem] text-center">
            {fieldWarning ? (
              <p className="text-center mb-2 text-sm text-red-500 font-medium">
                {fieldWarning}
              </p>
            ) : null}
            <button
              className="bg-[#00df9a] p-2 w-full text-center rounded-[30px] font-semibold text-white text-sm"
              onClick={handleSumbit}
            >
              Pay Rs.5000
            </button>
          </div>

          {orderPlaced && (
            <div className="fixed z-50 top-0 right-0 m-[1rem] bg-[#00df9a] p-6">
              <p className="text-sm font-medium text-white text-center m-1">
                Your Order has been Placed
              </p>
              <IoCloseSharp
                onClick={handelDel}
                className="absolute top-0 right-0 m-[5px] text-white cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pay;
