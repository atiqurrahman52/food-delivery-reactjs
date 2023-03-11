import { CaretRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../../data/sharedData/productData";

const CustomerFavorites = () => {
  return (
    <section id="customer-favorites">
      <div className="bg-[#F3F4EF]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="flex justify-between items-center gap-6">
              <div className="hidden lg:block">
                <img src="./assets/image/food/lemon.png" alt="" />
              </div>
              <div className="flex flex-col items-center mb-10 lg:mb-14">
                <h3 className="font-edwardian text-[32px] lg:text-[80px] leading-[38px] text-primary opacity-[0.2]">
                  Our Products
                </h3>
                <h3 className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-primary mb-2">
                  Customer Favorites
                </h3>
                <p className="font-Raleway font-medium text-sm leading-[21pxpx] text-primary/60">
                  Lorem ipsum dolor sit amet consectetur. i psum Lorem dolor sit
                  amet consectetur.
                </p>
              </div>
              <div className="hidden lg:block">
                <img src="./assets/image/food/strawberry.png" alt="" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.map(({ id, img, bgColor, productName, price }) => (
                <Link to="" key={id}>
                  <div
                    style={{ backgroundColor: bgColor }}
                    className="p-6 product-card"
                  >
                    <div className="flex justify-center w-full h-[264px] items-center">
                      <img src={img} alt="" />
                    </div>

                    <div className="space-y-2 lg:space-y-4 mt-4">
                      <p className="font-Raleway font-semibold text-base lg:text-xl leading-6 lg:leading-[30px] text-primary">
                        {productName}
                      </p>
                      <p className="font-Playfair font-bold text-xl lg:text-2xl text-success leading-[28px] lg:leading-[34px]">
                        ${price}
                        <span className="font-Raleway text-sm lg:text-base leading-[21pxpx] text-primary">
                          /kg
                        </span>
                      </p>
                      <button
                        type=""
                        className="font-Raleway font-medium text-sm lg:text-base leading-[21pxpx] lg:leading-6 py-2 text-success md:py-3 w-full border border-success rounded-[5px] z-[1] relative overflow-hidden add-to-cart-btn"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center pt-6 lg:pt-8">
              <button className="flex items-center gap-2 py-3 px-4 w-[120px] h-[52px] rounded-[48px] bg-[#248C80]">
                <p className="font-Raleway font-semibold text-sm lg:text-base leading-[21px] lg:leading-6 text-white">
                  See all
                </p>
                <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                  <i className="ph-caret-right-bold text-success"></i>
                  <CaretRight size={20} className='text-success ' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
