import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900 flex flex-col  m-auto">
<hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />      
      <div className="flex md:flex-row flex-col  md:gap-[220px] gap-4 text-center  justify-center flex-wrap md:px-3 ">
    
        <div className="flex flex-col md:gap-3">
          <span className="text-3xl pb-3 text-[#00df9a]">LOGO</span>
          <span className="text-slate-500">napkinpaper.com.np</span>
          <span className="text-slate-500">links</span>
        </div>
        <div className="flex flex-col md:gap-3 ">
          <span className="font-bold pb-3">ABOUT US</span>
          <span className="text-slate-500">Customer Support</span>
          <span className="text-slate-500">Tech Support</span>

        </div>
        <div className="flex flex-col md:gap-3">
          <span className="font-bold pb-3">CATEGORIES</span>
          <span className="text-slate-500">Tissue Paper</span>
          <span className="text-slate-500">Sanitary Napkin</span>
          <span className="text-slate-500">Sanitary Pad</span>
          <span className="text-slate-500">Toilet Paper</span>
        </div>
        <div className="flex flex-col md:gap-3">
          <span className="font-bold pb-3">INFORMATION</span>
          <span className="text-slate-500">FAQ</span>
          <span className="text-slate-500">Terms and Conditions</span>
          <span className="text-slate-500">Privacy Policy</span>
          
        </div>
      </div>
      <div className="p-6 text-center">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Napkin Industry™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
