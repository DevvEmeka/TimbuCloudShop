import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { PiStarOfDavidFill } from "react-icons/pi";

const TopProducts = () => {
  return (
    <section className="w-full bg-[#F8F9FF] mt-[30px]">
      <div className="px-[29px] md:p-11 pt-5 pb-16 flex items-center flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex gap-[8px] items-center">
            <PiStarOfDavidFill className="text-[#007BFF] h-[22.6px] w-[22.6px]" />
            <div className="text-[#007BFF] text-[16px]">
              Top Product of the Month
            </div>
          </div>
          <h3 className="text-[#000000] leading-[52px] text-[38px] font-bold">
            Up to 45% Off On Digital Items
          </h3>
          <p className="font-normal mt-[12px] text-[22px] leading-7 text-[#474747]">
            This feature-packed smartwatch boasts health tracking (steps, heart
            rate, sleep), Bluetooth calling & music, a 2.09" display, and
            supports various sports modes.
          </p>
          <div className="bg-[#007BFF] mt-8 rounded-[4px] p-4 w-[151px] flex items-center gap-[10px]">
            <div className="text-[#FFFFFF] text-[18px] font-medium">
              Shop Now
            </div>
            <BsArrowRightShort className="text-[#F8F9FF] h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/src/assets/image-removebg-preview - 2024-07-04T153827.778 1.png"
            alt="laptop"
            className="w-full mt-24"
          />
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
