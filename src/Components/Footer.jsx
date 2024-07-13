import React from "react";
import { BsPaypal } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { FaApplePay, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPaypalLogoDuotone } from "react-icons/pi";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { SlPaypal } from "react-icons/sl";

const Footer = () => {
  return (
    <section className="bg-[#660028] w-full">
      <div className="px-[29px] gap-[-50px] justify-between text-[#FFFFFF] pt-11 pb-16 flex flex-col sm:flex-row">
        <div className="">
          <h3 className="font-bold mdtext-[24px] md:text-[20px] text-[24px]">TimbuCloudShop</h3>
          <ul className="flex gap-2 items-center mt-4 list-none">
            <li>
              <FaFacebookF className="w-6 h-6" />
            </li>
            <li>
              <FaInstagram className="w-6 h-6" />
            </li>
            <li>
              <CgYoutube className="w-6 h-6" />
            </li>
            <li>
              <FaXTwitter className="w-6 h-6" />
            </li>
          </ul>
        </div>
        <div className="mt-[53px] ml-5 sm:mt-0 gap-2 grid grid-cols-2 md:grid-cols-4">
          <div className="md:-mr-8">
            <h3 className="font-bold md:text-[20px] text-[24px]">Link</h3>
            <ul className="list-none gap-5 mt-4 text-[16px]">
              <li>Products</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="md:-ml-10">
            <h3 className="font-bold text-[24px] md:text-[20px]">Supports</h3>
            <ul className="list-none mt-4 gap-5 text-[16px]">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="md:-ml-14">
            <h3 className="font-bold text-[24px] md:text-[20px]">Categories</h3>
            <ul className="list-none mt-4 gap-5 text-[16px]">
              <li>Computers & Tablets</li>
              <li>Mobile accesories</li>
              <li>TV & Home Theater</li>
            </ul>
          </div>
          <div className="md:-ml-6">
            <h3 className="font-bold text-[24px] md:text-[20px]">Payment</h3>
            <ul className="flex mt-4 gap-[10.32px] list-none items-center">
              <li className="">
                <RiVisaLine className="w-[50px] h-[50px] text-[#1A1F71]" />
              </li>
              <li className="flex">
                <div className="p-3 z-0 rounded-[50%] bg-[#EB001B]"></div>
                <div className="p-3 z-50 -ml-[10px] bg-[#F79E1B] rounded-[50%]"></div>
              </li>
              <li className="">
                <FaApplePay className="w-[50px] h-[50px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
