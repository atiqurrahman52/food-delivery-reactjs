import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { productData } from "../../data/sharedData/productData";
import { Link } from "react-router-dom";

const RelatedProduct = () => {
  return (
    <div className="bg-[#F9F6F1]">
      <div className="container">
        <div className="py-10 lg:py-20">
          <div className="flex flex-col items-center">
            <h3 className="font-edwardian text-[32px] lg:text-[80px] leading-[38px] text-primary opacity-[0.2]">
              Popular
            </h3>
            <h3 className="font-Playfair font-bold text-2xl  leading-[29px] lg:leading-[58px] text-primary mb-2">
              Related Products
            </h3>
            <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/60">
              Lorem ipsum dolor sit amet consectetur. i psum Lorem dolor sit
              amet consectetur.
            </p>
          </div>

          <div className="relative">
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              grabCursor={true}
              spaceBetween={24}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              freeMode={true}
              Pagination={true}
              allowTouchMove={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="teamSlider !px-2 !py-10"
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: ".coursePrev-btn",
                nextEl: ".courseNext-btn",
              }}
            >
              {productData.map(({ id, img, price, bgColor, productName }) => (
                <SwiperSlide key={id}>
                  <Link to="#" className="relative">
                    <div
                      style={{ backgroundColor: bgColor }}
                      className="p-6 product-card"
                    >
                      <div className="flex justify-center w-full h-[264px] items-center">
                        <img src={img} alt="" />
                      </div>

                      <div className="space-y-2 lg:space-y-4 mt-4">
                        <p className="font-Raleway font-semibold text-base leading-6 lg:leading-[30px] text-primary">
                          {productName}
                        </p>
                        <p className="font-Playfair font-bold text-xl lg:text-2xl text-success leading-[28px] lg:leading-[34px]">
                          ${price}
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
                    <p className="absolute top-0 w-16 lg:w-20 h-9 lg:h-10 sale font-Raleway font-semibold text-sm lg:text-base text-white flex justify-center items-center">
                      Sale
                    </p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
