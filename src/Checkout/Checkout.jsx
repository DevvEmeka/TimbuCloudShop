import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SuccessMessage from "../Pages/SuccessMessage";


const Checkout = () => {
  return (
    <section className="w-full">
      {/* Navbar Component */}
      <div>
        <Navbar />
      </div>

      {/* Checkout */}
      {/* Products NavBar */}
      <>
        <div className="bg-[#E22367] w-full mt-[36px] px-[29px] flex overflow-hidden justify-between items-center">
        <div className="flex gap-6 justify-between items-center py-5">
          <div className="flex items-center gap-[4px]">
            <RxHamburgerMenu className="font-semibold text-[#FFFFFF] h-[24px] w-[24px]" />
            <div className="text-[#FFFFFF] text-[10px] md:text-[16px] font-medium">
              All Categories
            </div>
          </div>
          <div className="flex items-center justify-center gap-[2px]">
            <Link
              to="/checkout"
              className="text-[#FFFFFF] font-medium text-[10px] md:text-[16px] cursor-pointer"
            >
              Products/Checkout
            </Link>
            <RiArrowDropDownLine className="text-[#FFFFFF] h-[30px] w-[30px]" />
          </div>
          <div className="text-[#FFFFFF] text-[12px] md:text-[16px] font-medium">Blog</div>
          <div className="text-[#FFFFFF] text-[12px] md:text-[16px] font-medium">Contact</div>
        </div>
          <div className="hidden md:block">
            <div className="gap-6 flex items-center">
              <div className="uppercase text-[#FFFFFF] text-sm font-bold">
                limited sale
              </div>
              <div className="uppercase text-[#FFFFFF] text-sm font-bold">
                best seller
              </div>
              <div className="uppercase text-[#FFFFFF] text-sm font-bold">
                new arrivals
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-[20px] mt-5 px-[29px]">
            <Link to="/" className="text-[#919191] text-sm font-bold">
              Home{" "}
            </Link>
            <div>
              <FaArrowRight className="text-[#919191] w-[20px] h-[20px]" />
            </div>
            <div className="text-[#919191] text-sm font-bold">
              Product Listing
            </div>
            <div>
              <FaArrowRight className="text-[#919191] cursor-pointer w-[20px] h-[20px]" />
            </div>
            <div className="text-[#919191] text-sm font-bold">
              Computers & Tables
            </div>
            <div>
              <FaArrowRight className="text-[#919191] w-[20px] h-[20px]" />
            </div>
            <div className="text-[#919191] text-sm font-bold">Cart</div>
          </div>
        </div>
      </>

      {/* Divide Between First Checkout and Secon Checkout */}
      <div className="flex md:flex-row flex-col md:mt-7">
        {/* Checkout Main */}
        <div className="px-[29px] flex">
          <div className="">
            <h3 className="font-bold text-[22px] mt-8 text-[#1C1C1C]">
              Cart Page
            </h3>
            <div className="p-4 mt-6 rounded-[4px] border-[1px] border-[#E2E2E2] ">
              <div className="flex pb-5 md:items-center gap-6">
                <img
                  className="w-full"
                  src="/src/assets/Checkout.png"
                  alt="cheeck out"
                />
                <div className="gap-[16px]">
                  <div className="gap-2 flex">
                    <div className="text-[#1C1C1C] font-medium text-[12px] lead-[16px]">
                      DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                      Quad-Core-8GB
                    </div>
                    <div className="text-[14px] font-bold text-[#1C1C1C]">
                      $146.99
                    </div>
                  </div>
                  <div className="flex pt-2 gap-2 items-center">
                    <div className="text-[#1C1C1C] mt-3 font-medium text-[12px]">
                      Quantity
                    </div>
                    <div className="bg-[#F8F9FF] items-center mt-2 flex gap-1 py-[2px] px-[6px]">
                      <div className="text-[#1C1C1C] items-center text-[12px] font-bold">
                        1
                      </div>
                      <RiArrowDropDownLine />
                    </div>
                  </div>
                  <div className="gap-[17px] mt-2 text-[#1C1C1C] items-center flex">
                    <div className="text-[12px] font-medium">
                      Move to Favourites
                    </div>
                    <div className="text-[12px] font-medium">Delete</div>
                  </div>
                </div>
              </div>

              {/* border Line */}
              <div className="border-[1px] border-[#E2E2E2] w-80"></div>

              <div className="mt-2 flex md:items-center p-4 gap-6 clear-start">
                <img
                  className="w-full"
                  src="/src/assets/checkout two.png"
                  alt="cheeck out"
                />
                <div className="gap-[16px]">
                  <div className="gap-2 flex">
                    <div className="text-[#1C1C1C] font-medium text-[12px] lead-[16px]">
                      DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                      Quad-Core-8GB
                    </div>
                    <div className="text-[14px] font-bold text-[#1C1C1C]">
                      $146.99
                    </div>
                  </div>
                  <div className="flex pt-2 gap-2 items-center">
                    <div className="text-[#1C1C1C] font-medium text-[12px]">
                      Quantity
                    </div>
                    <div className="bg-[#F8F9FF] items-center flex gap-1 py-[2px] px-[6px]">
                      <div className="text-[#1C1C1C] text-[12px] font-bold">
                        3
                      </div>
                      <RiArrowDropDownLine />
                    </div>
                  </div>
                  <div className="gap-[17px] whitespace-nowrap mt-2 text-[#1C1C1C] items-center flex">
                    <div className="text-[12px] font-medium">
                      Move to Favourites
                    </div>
                    <div className="text-[12px] font-medium">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Checkout */}
        <div className="px-[29px] mt-12 mb-9">
          <div className="p-4 pb-12 rounded-[4px] border-[1px] border-[#E2E2E2] ">
            <h3 className="font-bold text-[22px] text-[#1C1C1C]">
              Ordinary Summary
            </h3>
            <p className="text-[#191C1F] mt-3 text-base font-normal">
              Do you have a Promo Code
            </p>

            <div className="md:items-center -mb-[1630px] mt-2 flex p-4 gap-6 clear-start">
              <div className="w-[250px] h-[1700px] md:w-[50%] md:h-[50%]">
                <img
                  className="w-full"
                  src="/src/assets/Checkout.png"
                  alt="cheeck out"
                />
              </div>
              <div className="gap-[16px]">
                <div className="text-[#1C1C1C] font-medium text-[12px] lead-[16px]">
                  DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </div>
                <div className="gap-2 mt-2 flex">
                  <div className="text-[14px] font-bold text-[#1C1C1C]">
                    1 <span className="ml-[2px]">x</span>{" "}
                    <span className="text-[#007BFF] font-bold text-sm">
                      {" "}
                      $146.99
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:items-center -mt-9 p-4 gap-6 clear-start">
              <div className="w-[105px] h-[105px] md:w-[160px] md:h-[160px]">
                <img
                  className="w-full flex-1"
                  src="/src/assets/checkout two.png"
                  alt="cheeck out"
                />
              </div>
              <div className="gap-[16px] flex-1">
                <div className="text-[#1C1C1C] font-medium text-[12px] lead-[16px]">
                  C Idea 8 Inch Android 12 Tablet Sim 256GB ROM+256GB
                </div>
                <div className="gap-2 mt-2 flex">
                  <div className="text-[14px] font-bold text-[#1C1C1C]">
                    3 <span className="ml-[2px]"></span>x{" "}
                    <span className="text-[#007BFF] font-bold text-sm">
                      {" "}
                      $146.99
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[4px] items-center justify-between flex mt-8 gap-3 px-4">
              <ul className="flex flex-col gap-3 list-none">
                <li className="text-[#5F6C72] font-normal text-sm">
                  Sub-total
                </li>
                <li className="text-[#5F6C72] font-normal text-sm">Shipping</li>
                <li className="text-[#5F6C72] font-normal text-sm">Discount</li>
                <li className="text-[#5F6C72] font-normal text-sm">Tax</li>
              </ul>
              <ul className="gap-3 flex flex-col">
                <li className="text-[#191C1F] text-sm font-medium">$587.96</li>
                <li className="text-[#191C1F] text-sm font-medium">Free</li>
                <li className="text-[#191C1F] text-sm font-medium">$56</li>
                <li className="text-[#191C1F] text-sm font-medium">$5.99</li>
              </ul>
            </div>

            {/* Border Line */}
            <div className="border-[1px] mt-3 border-[#E2E2E2] md:w-[550px] w-80"></div>

            {/* Total */}
            <div className="mt-3 flex justify-between items-center">
              <div className="text-base font-normal text-[#191C1F]">Total</div>
              <div className="font-bold">$537.95 USD</div>
            </div>
          </div>

          {/* Check-out Button */}
          <div className="mt-6">
              <button className="p-4 w-[356px] cursor-pointer md:w-[600px] text-[#FFFFFF] text-lg font-medium rounded text-center bg-[#007BFF]">
               <Link to="/SuccessMessage">
                Checkout
                </Link>
              </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Checkout;
