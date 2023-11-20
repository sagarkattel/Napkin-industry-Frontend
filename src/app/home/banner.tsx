"use client"
import React,{useState} from "react";
import Image from "next/image";
import Heading from "../../../public/image/Heading.png"
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const length:number = 3; // Update this with the actual number of images

  // Function to handle changing the active index for autoplay
//   const handleAutoPlay = () => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % length);
//     }, 5000);

//     return () => clearInterval(interval);
//   };

//   useEffect(() => {
//     handleAutoPlay();
//   }, []); 
   
  return (
    <div className="mb-4 bg-[#75C7E4] bg-opacity-40 w-full h-auto">
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-around py-[2rem] mx-[2rem]">
        <div className="flex flex-col items-center">
          <p className="text-[15px] lg:text-xl md:text-lg text-center font-primary font-semibold text-[#00df9a]">Ecommerce-Napkin</p>
          <p className="text-[40px] font-medium lg:text-[50px] md:text-[50px] font-heading text-center">Manufacturer and Distributor</p>
          <p className="text-[15px] lg:text-xl md:text-lg font-primary font-medium text-center">Tissue / Napkins</p>
          <button className="mt-5 bg-white p-1 px-3 lg:px-5 lg:p-2 md:px-5 md:p-2 text-[13px] rounded-[20px] font-bold font-secondHeading">Buy Now</button>
          <p className="uppercase mt-[2rem] text-[10px] pb-6 lg:pb-2 md:pb-2 text-center font-primary font-medium">First Napkin paper industry of Nepal</p>
        </div>
       
        <div>
        <Carousel
            className="rounded-xl"
            autoplay={true} // Enable autoplay
            // autoplayInterval={5000} // Set the interval time for autoplay (in milliseconds)
            // activeIndex={activeIndex}
            // setActiveIndex={setActiveIndex}
            // length={length}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <Image src={Heading} alt="image" className="w-[13rem] md:w-[16rem] lg:w-[16rem] h-auto -mt-[2rem]" />
            {/* Other images */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;

