import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const SuccessMessage = () => {
  return (
    <section className="p-6 overflow-y-hidden bg-[#FFFFFF]">
      <div className="pt-24 gap-8 px-[2px] md:px-56">
        <div className="text-center">
          <div className="inline-block text-center">
            <FaRegCircleCheck className="h-[100px] w-[100px] text-[#84c97f]" />
          </div>
          <h3 className="mt-7 text-[30px] text-[#1C1C1C] font-bold">
            Your order is successfully place
          </h3>
          <p className="mt-7 text-[#474747] text-[17px] font-normal">
            Your order is on its way! We've received it and are
            processing it for fulfillment. You'll receive a confirmation email
            with more details shortly, including estimated delivery timelines.
          </p>
        </div>
        <div className="flex md:mt-7 mt-10 flex-col md:flex-row items-center justify-center gap-4 overflow-hidden">
          <button className="border-[2px] text-lg font-medium border-[#AFC2FF] text-[#007BFF] rounded-[4px] py-[14px] px-5">
            Return home
          </button>
          <div className="bg-[#007BFF] flex items-center py-4 md:px-5 px-[18px] gap-2 rounded-[4px]">
            <button className="font-medium text-[#FFFFFF] text-lg">
              View Order
            </button>
            <FaArrowRight className="text-[#FFFFFF]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
