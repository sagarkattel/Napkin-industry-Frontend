"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import Front from "../components/Front";

import Link from "next/link";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from "../firebase-config";
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error,setError]=useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("name", user?.user?.displayName ?? "");
      router.push("/")
      console.log(user.user.displayName);
    } catch (error) {
      console.log("This email is not registered");
      setError("Email is not registered");
    }
  };

  const handlePopup=async()=>{
    try{
      const user = await signInWithPopup(
        auth,
        provider
      );
      localStorage.setItem("name", user?.user?.displayName ?? "");
      router.push("/")
    }
    catch(error){
      console.log(error);
    }
  }
  

  return (
    <div className="flex bg-white">
      <div className="p-10 lg:flex-1">
        <div>
          <h1 className="font-bold lg:text-[24px] text-2xl mb-[80px] lg:mb-[30px]">
            Login
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-medium text-xl lg:text-[16px]">
            Login to your account
          </h1>
          <div className="flex flex-col my-5">
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <label className="font-medium lg:text-[15px]">Email</label>
                <input
                  className="border border-slate-300 rounded-lg focus:outline-slate-400 shadow-lg p-3 w-[18rem] lg:placeholder:text-[14px] lg:p-2 lg:w-[30rem]"
                  type="text"
                  placeholder="Enter your email"
                  onChange={(event) => setLoginEmail(event.target.value)}
                />

              </div>
              <div className="flex flex-col">
                <label className="font-medium lg:text-[15px]">Password</label>
                <input
                  className="border border-slate-300 rounded-lg focus:outline-slate-400 shadow-lg p-3 lg:placeholder:text-[14px] lg:p-2 lg:w-[30rem]"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-5 justify-center text-gray-400 font-medium lg:text-[15px] lg:w-[30rem]">
            <button
              onClick={login}
              className="mt-[20px] bg-slate-200 p-2 rounded-lg flex justify-center"
            >
              Login
            </button>
            {error&& error}
            <div className="bg-slate-100 h-1 rounded-full"></div>
            <button className="bg-slate-200 p-2 rounded-lg flex flex-row items-center justify-center gap-3" onClick={handlePopup}>
              <FcGoogle className="w-5 h-5" />
              <p>Continue with Google</p>
            </button>
          </div>
          <div>
            <p className="pt-5 text-sm font-medium">
              Dont you have and account?
              <Link href="/signin" className="text-blue-500 ml-2">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex-1">
        {/* <Front /> */}
      </div>
    </div>
  );
};

export default Login;