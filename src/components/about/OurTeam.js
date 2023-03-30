import { CaretLeft, CaretRight, Path } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// import 'swiper/css';
import { ourTeamData } from "../../data/about/ourTeamData";

const OurTeam = () => {
  return (
    <section id="Our-team">
      <div className="bg-[#FFFBF4]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="mb-10">
              <p className="font-Raleway font-bold text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80">
                Our team
              </p>
              <p className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[34px] lg:leading-[42px] text-primary mb-3 lg:mb-6">
                Introduce your team
              </p>
              <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  1280: {
                    slidesPerView: 4,
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
                {ourTeamData.map(
                  ({ id, img, social, name, title, description }) => (
                    <SwiperSlide key={id}>
                      <div>
                        <div className="mb-6">
                          <img src={img} alt="" />
                        </div>
                        <p className="font-Roboto font-bold text-base lg:text-xl leading-6 lg:leading-[30px] text-primary">
                          {name}
                        </p>
                        <p className="font-Roboto text-base lg:text-lg leading-6 lg:leading-[27px] text-primary/60 mb-3 lg:mb-4">
                          {title}
                        </p>
                        <p className="font-Roboto text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-6">
                          {description}
                        </p>
                        <div className="flex space-x-[14px]">
                          {social.map(({ id, icon, path }) => (
                            <Link to={path} key={id}>
                              {/* <p> {icon}</p> */}
                              {icon}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>

              {/* <button className="md:block xs:hidden coursePrev-btn z-50 absolute top-1/2 -left-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center"> */}
              <button className="md:block xs:hidden coursePrev-btn z-50 absolute top-1/2 -left-9 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
                {/* <CaretLeft size={18} weight="bold" className="text-success" /> */}
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 23H19.83L25.42 17.41L24 16L16 24L24 32L25.41 30.59L19.83 25H32V23Z"
                    fill="#004738"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#004738"
                  />
                </svg>
              </button>

              {/* <button className="md:block xs:hidden courseNext-btn z-50 absolute top-1/2 -right-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center"> */}
              <button className="md:block xs:hidden courseNext-btn z-50 absolute top-1/2 -right-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
                {/* <CaretRight size={18} weight="bold" className="text-success" /> */}
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 16L22.59 17.41L28.17 23H16V25H28.17L22.59 30.59L24 32L32 24L24 16Z"
                    fill="#004738"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#004738"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
