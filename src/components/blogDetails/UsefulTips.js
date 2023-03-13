import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { productData } from "../../data/sharedData/productData";
import { Link } from "react-router-dom";
import { usefulTipsdata } from "../../data/blog/usefulTipsData";
import { ArrowUpRight } from "@phosphor-icons/react";
const UsefulTips = () => {
  return (
    <section id="related-product">
      <div className="bg-[#F9F6F1]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="flex flex-col items-center mb-10 lg:mb-14">
              <h3 className="font-edwardian text-[32px] lg:text-[80px] leading-[38px] text-primary opacity-[0.2]">
                Blog
              </h3>
              <h3 className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-primary mb-2">
                Articles & Useful tips
              </h3>
              <p className="font-Raleway font-medium text-sm leading-[21pxpx] text-primary/60">
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
                {usefulTipsdata.map(({ id, img, title, description }) => (
                  <SwiperSlide key={id}>
                    <Link>
                      <div className="border border-[#D6D7D2] rounded">
                        <div className="p-3 space-y-3">
                          <div className="mb-6">
                            <img className="w-full h-full" src={img} alt="" />
                          </div>
                          <div className="flex space-x-3 mb-4">
                            <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                              Category
                            </p>
                            <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                              5 min read
                            </p>
                          </div>
                          <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                            {title}
                          </p>
                          <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                            {description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                            <p className="font-Raleway font-medium text-sm leading-[21px]">
                              Read More
                            </p>
                            <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                            <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-pagination relatedProductRecipesPage"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulTips;
