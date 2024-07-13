import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  return (
    <section className="px-[29px] mt-[64px]">
      <div className="flex items-center justify-between">
        <div className="text-[14px] sm:text-[24px] font-bold">TimbuCloudShop</div>
        <div className="flex items-center gap-16">
          <div className="relative z-0 sm:block hidden">
            <input
              type="text"
              placeholder="Search Products"
              className="border-[#d1d1d1] border-[1px] font-normal text-black text-sm lg:w-[400px] p-4 w-[353px] sm:w-[270px] lg:h-[53px] h-[56px] mt-[10px]"
            />
            <IoIosSearch className="h-[24px] w-[24px] sm:left-[230px] lg:left-[349px] left-[312px] top-[27px] z-50 absolute" />
          </div>
          <nav className="flex gap-[17px] sm">
            <div className="sm:hidden">
              <IoIosSearch className="h-[24px] w-[24px]" />
            </div>
            <div className="z-0 relative">
              <BsCart2 className="h-[24px] w-[24px]" />
              <span className="absolute z-50 p-1 h-[14px] flex justify-center items-center text-[8px] w-[13px] rounded-[30px] text-white bg-[#007BFF] left-[16px] bottom-[14px]">
                2
              </span>
            </div>
            <div>
              <GoPerson className="h-[24px] w-[24px]" />
            </div>
          </nav>
        </div>
      </div>
      <div className="relative z-0 sm:hidden">
        <input
          type="text"
          placeholder="Search Products"
          className="border-[#d1d1d1] border-[1px] font-normal text-black text-sm p-4 w-[353px] h-[56px] mt-[10px]"
        />
        <IoIosSearch className="h-[24px] w-[24px] left-[312px] top-[27px] z-50 absolute" />
      </div>
    </section>
  );
};

export default Navbar;
