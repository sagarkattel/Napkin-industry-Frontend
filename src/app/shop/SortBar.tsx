import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortBar = () => {
  return (
    <>
      <div className="bg-[#D7E7ED]  w-full   border xll:w-[85rem] xl:w-[73rem]    lg:w-[55rem] mt-[1rem] md:h-[4rem]  md:w-[50rem] rounded-[5px]  shadow-[#7bc9e6]  ">
        <div className=" flex flex-col sm:flex-row  justify-between  mt-[0.59rem] mb-[0.5rem] gap-1 md:gap-4 px-4 ">
          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between gap-3 ">
            <span>CATEGORIES</span>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>
          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between">
            <span>PRICE RANGE</span>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>
          <div className="border px-3 md:p-2 p-1 w-full md:w-[10rem] bg-white rounded-md flex justify-between">
            <span>RATING</span>
            <button>
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortBar;
