import { CirclesThreePlus, SlidersHorizontal } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "../../data/sharedData/productData";

const Product = () => {
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState(false);
  return (
    <div className="bg-[#F3F4EF]">
      <div className="container">
        <div className="py-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 pb-6">
            <div className="text-center md:text-left">
              <p className="font-Playfair font-bold text-xl leading-[28px] text-black">
                Product (24)
              </p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setFilter(!filter)}
                  className={`filter-btn ${
                    filter && "active"
                  } flex justify-center items-center gap-2 border-[1.5px] border-success rounded p-2`}
                >
                  <SlidersHorizontal
                    size={24}
                    className={`${filter ? "text-white" : "text-success"}`}
                  />
                  <p className="font-Raleway font-semibold text-sm leading-[21px] text-success">
                    Filter
                  </p>
                </button>

                <div
                  className={`filter-dropdown ${
                    filter ? "opacity-100 visible" : "opacity-0 invisible"
                  } transition-all duration-300 absolute pt-[14px] lg:pt-[15px] md:-right-[134px] z-10`}
                >
                  <div className="bg-[#F9F6F1] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] p-4 w-[261px] h-auto right-0 rounded-lg">
                    <p className="font-Playfair font-bold text-base lg:text-xl leading-6 lg:leading-[30px] mb-4">
                      Filter
                    </p>
                    <div>
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary border-b border-[#DCD9D5] py-3 hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Price <span className="font-bold">high</span> to
                        <span className="font-bold">low</span>
                      </p>
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary border-b border-[#DCD9D5] py-3 hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Price <span className="font-bold">low</span> to
                        <span className="font-bold">high</span>
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Popular
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Multi Flowet
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Sugar Free
                      </p>
                      <p className="py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Veggie
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setCategories(!categories)}
                  className={`${
                    categories && "active"
                  } categories-btn flex justify-center items-center gap-2 border-[1.5px] border-success rounded p-2`}
                >
                  <CirclesThreePlus
                    size={24}
                    className={`${categories ? "text-white" : "text-success"}`}
                  />
                  <p className="font-Raleway font-semibold text-sm leading-[21px] text-success">
                    Categories
                  </p>
                </button>

                <div
                  className={`categories-dropdown ${
                    categories ? "opacity-100 visible" : "opacity-0 invisible"
                  } transition-all absolute pt-[14px] lg:pt-[15px] -right-[35px] md:right-0 z-10`}
                >
                  <div className="bg-[#F9F6F1] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] p-4 w-[261px] h-auto right-0 rounded-lg">
                    <p className="font-Playfair font-bold text-base lg:text-xl leading-6 lg:leading-[30px] mb-4">
                      Product Categories
                    </p>
                    <div>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Dairy free
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Full Flavor
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Mixed Veg
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Multi Flowet
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Premium
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Single Origin
                      </p>
                      <p className="border-b border-[#DCD9D5] py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Sugar Free
                      </p>
                      <p className="py-3 font-Raleway font-medium text-sm leading-[21px] text-primary hover:text-success hover:bg-[#EAEAEA] hover:px-2">
                        Veggie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map(({ id, img, productName, bgColor, price }) => (
              // <a href="../pages/product-details.html">
              <Link to={`/product-details/${id}`}>
                <div
                  style={{ backgroundColor: bgColor }}
                  className="bg-[#E6E8D3] p-6 product-card"
                >
                  <div className="flex justify-center w-full h-[264px] items-center">
                    <img src={img} alt="" />
                  </div>

                  <div className="space-y-2 lg:space-y-4 mt-4">
                    <p className="font-Raleway font-semibold text-base lg:text-xl leading-6 lg:leading-[30px] text-primary">
                      {productName}
                    </p>
                    <p className="font-Playfair font-bold text-xl lg:text-2xl text-success leading-[28px] lg:leading-[34px]">
                      $ {price}
                      <span className="font-Raleway text-sm lg:text-base leading-[21px] text-primary">
                        /kg
                      </span>
                    </p>
                    <button
                      type=""
                      className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 py-2 text-success md:py-3 w-full border border-success rounded-[5px] z-[1] relative overflow-hidden add-to-cart-btn"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-6 lg:pt-8">
            <button className="py-3 px-4 w-[120px] h-[52px] rounded-[48px] bg-[#248C80] load_more">
              <p className="font-Raleway font-semibold text-sm lg:text-base leading-[21px] lg:leading-6 text-white">
                Load more
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
