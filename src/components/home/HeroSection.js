import React from "react";
import video from "../../assets/image/hero/video-1.mp4";
import image1 from "../../assets/image/hero/polygon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSection = () => {
  return (
    <section id="hero" className="background-hero h-full py-5">
      <div className="relative">
        <Swiper
          slidesPerView="auto"
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //   },
          //   1280: {
          //     slidesPerView: 4,
          //   },
          // }}

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
          className="courseSlider !px-2 !py-10"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".coursePrev-btn",
            nextEl: ".courseNext-btn",
          }}
        >

          <SwiperSlide>
            <div className="container relative">
              {/* <!-- left text --> */}
              <div className="lg:absolute top-0 left-0 z-30">
                <div className="flex items-center mb-2 lg:mb-3 lg:pt-32">
                  <h1 className="font-Roboto font-extrabold text-[32px] lg:text-[80px] leading-[38px] lg:leading-[76px] text-success pr-4">
                    Fresh
                  </h1>
                  <h1 className="font-Poppins font-bold text-sm lg:text-[32px] lg:leading-[44px] text-primary">
                    Food <br />
                    Delivery
                  </h1>

                  <img
                    src={image1}
                    alt=""
                    className="relative lg:-top-20 w-[57px] lg:w-[134px] h-[68px] lg:h-[162px]"
                  />
                </div>
                <p className="font-Poppins text-[10px] lg:text-base text-primary opacity-[0.6] mb-7 lg:mb-12">
                  Sed ut perspiciatis unde omnis iste natus sit <br />
                  voluptatem accusantium doloremque laudantium
                </p>
                <div className="flex gap-3 lg:gap-6">
                  <button
                    type=""
                    className="bg-black py-2 lg:py-[13px] px-3 lg:px-8 font-Raleway font-medium text-xs lg:text-2xl text-[#FEDB80] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[84px]"
                  >
                    Order Now
                  </button>
                  <div>
                    <p className="font-Poppins font-medium text-xs lg:text-base leading-[18px] lg:leading-6 text-primary opacity-60 line-through">
                      $10.20
                    </p>
                    <p className="font-Poppins font-bold text-base lg:text-2xl leading-[22px] lg:leading-[34px] text-yellow">
                      $10.20
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- video --> */}
              <div className="relative">
                <video width="" height="" autoplay loop className="mx-auto">
                  <source src={video} type="" />
                </video>
              </div>

              {/* <!-- right text --> */}
              <div className="lg:absolute bottom-0 right-0 z-30">
                <div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Ingredients
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Region
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Time
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      10:30 am to 11:00 pm
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-end lg:pt-20">
                  <div className="flex gap-[2px] items-center justify-start lg:justify-end mb-1 lg:mb-4">
                    <ul className="flex gap-[2px]">
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <p className="font-Playfair font-bold text-sm lg:text-2xl leading-5 lg:leading-[34px] text-primary mb-[2px] lg:mb-2 text-left lg:text-right">
                    5 star rating
                  </p>
                  <p className="font-Raleway text-[8px] lg:text-base leading-3 lg:leading-6 text-primary opacity-60 text-left lg:text-right">
                    based on 1788 reviews
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container relative">
              {/* <!-- left text --> */}
              <div className="lg:absolute top-0 left-0 z-30">
                <div className="flex items-center mb-2 lg:mb-3 lg:pt-32">
                  <h1 className="font-Roboto font-extrabold text-[32px] lg:text-[80px] leading-[38px] lg:leading-[76px] text-success pr-4">
                    Fresh
                  </h1>
                  <h1 className="font-Poppins font-bold text-sm lg:text-[32px] lg:leading-[44px] text-primary">
                    Food <br />
                    Delivery
                  </h1>

                  <img
                    src={image1}
                    alt=""
                    className="relative lg:-top-20 w-[57px] lg:w-[134px] h-[68px] lg:h-[162px]"
                  />
                </div>
                <p className="font-Poppins text-[10px] lg:text-base text-primary opacity-[0.6] mb-7 lg:mb-12">
                  Sed ut perspiciatis unde omnis iste natus sit <br />
                  voluptatem accusantium doloremque laudantium
                </p>
                <div className="flex gap-3 lg:gap-6">
                  <button
                    type=""
                    className="bg-black py-2 lg:py-[13px] px-3 lg:px-8 font-Raleway font-medium text-xs lg:text-2xl text-[#FEDB80] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[84px]"
                  >
                    Order Now
                  </button>
                  <div>
                    <p className="font-Poppins font-medium text-xs lg:text-base leading-[18px] lg:leading-6 text-primary opacity-60 line-through">
                      $10.20
                    </p>
                    <p className="font-Poppins font-bold text-base lg:text-2xl leading-[22px] lg:leading-[34px] text-yellow">
                      $10.20
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- video --> */}
              <div className="relative">
                <video width="" height="" autoplay loop className="mx-auto">
                  <source src={video} type="" />
                </video>
              </div>

              {/* <!-- right text --> */}
              <div className="lg:absolute bottom-0 right-0 z-30">
                <div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Ingredients
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Region
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Time
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      10:30 am to 11:00 pm
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-end lg:pt-20">
                  <div className="flex gap-[2px] items-center justify-start lg:justify-end mb-1 lg:mb-4">
                    <ul className="flex gap-[2px]">
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <p className="font-Playfair font-bold text-sm lg:text-2xl leading-5 lg:leading-[34px] text-primary mb-[2px] lg:mb-2 text-left lg:text-right">
                    5 star rating
                  </p>
                  <p className="font-Raleway text-[8px] lg:text-base leading-3 lg:leading-6 text-primary opacity-60 text-left lg:text-right">
                    based on 1788 reviews
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="container relative">
              {/* <!-- left text --> */}
              <div className="lg:absolute top-0 left-0 z-30">
                <div className="flex items-center mb-2 lg:mb-3 lg:pt-32">
                  <h1 className="font-Roboto font-extrabold text-[32px] lg:text-[80px] leading-[38px] lg:leading-[76px] text-success pr-4">
                    Fresh
                  </h1>
                  <h1 className="font-Poppins font-bold text-sm lg:text-[32px] lg:leading-[44px] text-primary">
                    Food <br />
                    Delivery
                  </h1>

                  <img
                    src={image1}
                    alt=""
                    className="relative lg:-top-20 w-[57px] lg:w-[134px] h-[68px] lg:h-[162px]"
                  />
                </div>
                <p className="font-Poppins text-[10px] lg:text-base text-primary opacity-[0.6] mb-7 lg:mb-12">
                  Sed ut perspiciatis unde omnis iste natus sit <br />
                  voluptatem accusantium doloremque laudantium
                </p>
                <div className="flex gap-3 lg:gap-6">
                  <button
                    type=""
                    className="bg-black py-2 lg:py-[13px] px-3 lg:px-8 font-Raleway font-medium text-xs lg:text-2xl text-[#FEDB80] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[84px]"
                  >
                    Order Now
                  </button>
                  <div>
                    <p className="font-Poppins font-medium text-xs lg:text-base leading-[18px] lg:leading-6 text-primary opacity-60 line-through">
                      $10.20
                    </p>
                    <p className="font-Poppins font-bold text-base lg:text-2xl leading-[22px] lg:leading-[34px] text-yellow">
                      $10.20
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- video --> */}
              <div className="relative">
                <video width="" height="" autoplay loop className="mx-auto">
                  <source src={video} type="" />
                </video>
              </div>

              {/* <!-- right text --> */}
              <div className="lg:absolute bottom-0 right-0 z-30">
                <div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Ingredients
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Region
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      Lorem, ipsum, dolor sit amet conse
                    </p>
                  </div>
                  <div className="mb-2 lg:mb-4">
                    <p className="font-Playfair font-bold text-[10px] lg:text-2xl leading-[14px] lg:leading-[34px] text-primary text-right mb-[2px] lg:mb-2">
                      Time
                    </p>
                    <p className="font-Poppins text-[10px] lg:text-base leading-[15px] lg:leading-6 text-[#E38B29] text-right">
                      10:30 am to 11:00 pm
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-end lg:pt-20">
                  <div className="flex gap-[2px] items-center justify-start lg:justify-end mb-1 lg:mb-4">
                    <ul className="flex gap-[2px]">
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                      <li className="w-4 lg:w-[26px]">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.125 10.025H17.1062L14 0.3125L10.8938 10.025H0.875L8.96875 16.0188L5.90625 25.6875L14 19.6938L22.0938 25.6875L18.9875 15.975L27.125 10.025Z"
                            fill="#FEBB41"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <p className="font-Playfair font-bold text-sm lg:text-2xl leading-5 lg:leading-[34px] text-primary mb-[2px] lg:mb-2 text-left lg:text-right">
                    5 star rating
                  </p>
                  <p className="font-Raleway text-[8px] lg:text-base leading-3 lg:leading-6 text-primary opacity-60 text-left lg:text-right">
                    based on 1788 reviews
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
