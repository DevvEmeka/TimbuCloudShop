import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiCheckboxBlankFill,
} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopProducts from "../Pages/TopProducts";

const Home = () => {
  return (
    <section className="w-full">
      <Navbar />

      {/* Products NavBar */}
      <section className="bg-[#E22367] w-full mt-[36px] px-[29px] flex items-center justify-between overflow-hidden">
        <div className="flex gap-6 justify-between items-center py-5">
          <div className="flex items-center gap-[4px]">
            <RxHamburgerMenu className="font-semibold text-[#FFFFFF] h-[24px] w-[24px]" />
            <div className="text-[#FFFFFF] cursor-pointer text-[10px] md:text-[16px] font-medium">
              All Categories
            </div>
          </div>
          <div className="flex items-center justify-center gap-[2px]">
            <Link
              to="checkout"
              className="text-[#FFFFFF] font-medium text-[10px] md:text-[16px] cursor-pointer"
            >
              Products/Checkout
            </Link>
            <RiArrowDropDownLine className="text-[#FFFFFF] h-[30px] w-[30px]" />
          </div>
          <div className="text-[#FFFFFF] cursor-pointer text-[12px] md:text-[16px] font-medium">
            Blog
          </div>
          <div className="text-[#FFFFFF] cursor-pointer text-[12px] md:text-[16px] font-medium">
            Contact
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="gap-6 flex items-center">
            <div className="uppercase text-[#FFFFFF] cursor-pointer text-[12px] md:text-[16px] font-bold">
              limited sale
            </div>
            <div className="uppercase text-[#FFFFFF] cursor-pointer text-[12px] md:text-[16px] font-bold">
              best seller
            </div>
            <div className="uppercase text-[#FFFFFF] cursor-pointer text-[12px] md:text-[16px] font-bold">
              new arrivals
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid and Side-grid */}
      <section className="flex w-full">
        {/* Side Grid */}
        <div className="mt-[54px] w-[31%] hidden sm:block">
          <div className="bg-[#F8F9FF] py-9 px-3">
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#000000]">Categories</h3>
                <RiArrowDropUpLine className="h-6 w-6 text-[#1C1B1F]" />
              </div>
              <ul className="gap-8 leading-7 mt-2">
                <li className="flex items-center gap-2">
                  <IoMdCheckbox className="text-[#007BFF] rounded-[4px] h-[24px] w-[24px]" />
                  <div className="text-base font-bold whitespace-nowrap text-[#1C1C1C]">
                    Computers & Tablets
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div className="text-[16px] text-[#474747] font-medium">
                    Mobile Accesories
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div className="text-[16px] text-[#474747] font-medium">
                    TV & Home Theater
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div className="text-[16px] text-[#474747] font-medium">
                    Audio & Headphones
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div className="text-[16px] text-[#474747] font-medium">
                    Cameras & Camrecorder
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div>Gaming Equipment</div>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                  <div>Home Appliances</div>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between mt-5">
                <h3 className="font-bold text-lg text-[#000000]">Brand</h3>
                <RiArrowDropUpLine />
              </div>
              <ul className="gap-8 leading-7 mt-2">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IoMdCheckbox className="text-[#007BFF] rounded-[4px] h-[22px] w-[22px]" />
                    <div className="text-base font-bold text-[#1C1C1C]">
                      Dell
                    </div>
                  </div>
                  <div>(345)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      HP
                    </div>
                  </div>
                  <div>(210)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      Samsung
                    </div>
                  </div>
                  <div>(45)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      Apple
                    </div>
                  </div>
                  <div>(30)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      Google Pixels
                    </div>
                  </div>
                  <div>(210)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      Xaomi
                    </div>
                  </div>
                  <div>(150)</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankFill className="rounded-[4px] text-[#EDEFFF] h-[24px] w-[24px]" />
                    <div className="text-[16px] text-[#474747] font-medium">
                      Lenovo
                    </div>
                  </div>
                  <div>(34)</div>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between mt-5">
                <h3 className="font-bold text-lg text-[#000000]">Price</h3>
                <RiArrowDropUpLine />
              </div>
              <div className="flex gap-2 mt-3 justify-center">
                <div className="text-[#808080] border-[1px] border-[#808080] rounded-lg py-1 md:px-5 lg:px-10">
                  &100
                </div>
                <div className="text-[#808080] border-[1px] border-[#808080] rounded-lg md:px-5 lg:px-10">
                  &5000
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <input className="" type="range" name="" id="" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="w-full overflow-hidden">
          {/* Product Sorting */}
          <section className="px-[29px] mt-[45px] whitespace-nowrap">
            <h3 className="font-bold text-2xl">Products</h3>
            <div className="flex flex-col md:flex-row md:items-center lg:items-center md:mt-2 mt-4 justify-between gap-[51px]">
              <div className="text-[#808080] text-sm font-medium">
                Showings 1-34 of 450
              </div>
              <div className="flex -mt-10 lg:mt-0 gap-[19px] items-center">
                <div className="text-[#808080] text-[14px] font-medium">
                  Sort by
                </div>
                <div className="gap-[1px] flex items-center text-[#000000] font-medium">
                  Popularity
                  <RiArrowDropDownLine className="w-[24px] h-[24px]" />
                </div>
                <div className="gap-[1px] items-center text-[#000000] font-medium flex">
                  Price Low-to-High
                  <RiArrowDropDownLine className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[20px] px-[29px] sm:hidden block">
            <div className="flex items-center gap-[37px]">
              <div className="gap-[8px] text-[14px] font-medium flex items-center justify-between">
                Categories
                <RiArrowDropDownLine className="w-[24px] h-[24px]" />
              </div>
              <div className="text-[14px] gap-[30px] justify-between font-medium flex items-center ">
                Brand
                <RiArrowDropDownLine className="w-[24px] h-[24px]" />
              </div>
              <div className="gap-[30px] text-[14px] justify-between font-medium flex items-center ">
                Price
                <RiArrowDropDownLine className="w-[24px] h-[24px]" />
              </div>
            </div>
          </section>

          {/* Product Grid */}
          <section className="mt-[20px] px-[29px] gap-[9px] p-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 1.png"
                  alt="dell laptop"
                  className="w-full"
                />
                <div className="gap-[6px] flex items-center absolute z-50 bottom-[55px] md:left-3 left-10 md:sm:bottom-[20px]">
                  <div className="bg-[#BF0050] text-[#FFFFFF] rounded-[4px] py-[4px] md:text-[12px] text-base font-normal md:px-1 px-2 ease-out">
                    Add to Cart
                  </div>
                  <div className="bg-[#FFFFFF] text-[#BF0050] rounded-[4px] px-[12px] py-[10px] md:px-[4px] md:py-[6px]">
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div className="bg-[#FFFFFF] text-[#BF0050] rounded-[4px] px-[12px] py-[10px] md:px-[4px] md:py-[6px] ml-[4px]">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="absolute md:left-[173px] md:bottom-[158px] bottom-[235px] left-[279px] text-[#FFFFFF] z-50 text-[16px] p-[4px] rounded-[4px] bg-[#BF0050] font-normal">
                  50%
                </div>
              </div>
              <div className="mt-[-4px] sm:mt-[20px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 1 (1).png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle 3.png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle 4.png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle 5.png"
                  alt="dell laptop"
                  className="w-full"
                />{" "}
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 6.png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 7.png"
                  alt="dell laptop"
                  className="w-full"
                />
                <div className="gap-[6px] flex items-center absolute z-50 bottom-[14px] md:bottom-[-7px] left-[28px]">
                  <div className="bg-[#BF0050] text-[#FFFFFF] rounded-[4px] py-[6px] md:text-[12px] md:px-1 text-base font-normal px-2 ease-out">
                    Add to Cart
                  </div>
                  <div className="bg-[#FFFFFF] text-[#BF0050] py-[10px] md:px-[4px] md:py-[6px] rounded-[4px] px-[12px]">
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div className="bg-[#FFFFFF] text-[#BF0050] px-[12px] md:px-[4px] md:py-[6px] py-[10px] ml-[4px]">
                    <FaRegHeart />
                  </div>
                </div>
                <div className="absolute md:left-[173px] md:bottom-[135px] bottom-[191px] left-[279px] text-[#FFFFFF] z-50 text-[16px] p-[4px] rounded-[4px] bg-[#BF0050] font-normal">
                  50%
                </div>
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] md:mt-6 text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 8.png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle 9.png"
                  alt="dell laptop"
                  className="w-full"
                />{" "}
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle 10.png"
                  alt="dell laptop"
                  className="w-full"
                />
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="">
                <img
                  src="/src/assets/Rectangle11.png"
                  alt="dell laptop"
                  className="w-full"
                />{" "}
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
            <div className="p-[11px] rounded-lg bg-[#FFFFFF] hover:shadow-lg hover:shadow-[#00000029] transition duration-300">
              <div className="relative z-50">
                <img
                  src="/src/assets/Rectangle 12.png"
                  alt="dell laptop"
                  className="w-full"
                />{" "}
              </div>
              <div className="mt-[-4px]">
                <div className="text-[#808080] text-[12px] uppercase font-medium">
                  laptop
                </div>
                <p className="text-[14px] font-bold mt-[8px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <div className="mt-[17px] flex items-center gap-[6px]">
                  <div className="flex gap-[10px]">
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                    <FaStar className="w-[24px] h-[24px] text-[#D9D9D9]" />
                  </div>
                  <span className="text-[#808080] text-[21px] font-bold">
                    (213)
                  </span>
                </div>
                <div className="text-[#000000] text-[16px] font-bold mt-[14px]">
                  $146.99
                  <span className="text-[#808080] ml-[13px]">$145.99</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Top Products */}
      <TopProducts />

      {/* NavBar */}
      <Footer />
    </section>
  );
};

export default Home;
