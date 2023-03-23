import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-background bg-center bg-no-repeat bg-cover h-[500px] md:block hidden">
        <div className="container">
          <div className="flex flex-col pt-[92px] space-y-8">
            <p className="font-Playfair text-3xl font-extrabold leading-[96px] text-white">
              <span className="text-yellow text-7xl">25% </span> Off for all
              Vegetable
            </p>
            <p className="font-Raleway text-base leading-6 text-white">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
            <div className="product-card">
              <button
                type=""
                className="font-Raleway font-bold text-sm lg:text-base w-[192px] leading-[21px] lg:leading-6 py-2 text-yellow md:py-3 border border-yellow rounded-[5px] z-[1] relative overflow-hidden banner-btn"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- for Mobile  --> */}
      <div className="banner-mobile-background bg-center bg-no-repeat bg-cover w-full h-[376px] md:hidden">
        <div className="container">
          <div className="flex flex-col justify-center items-center py-10 px-4">
            <p className="font-Playfair text-3xl font-extrabold text-white text-center mb-4">
              <span className="text-yellow text-5xl">25% </span> Off for all
              Vegetable
            </p>
            <p className="font-Raleway text-sm font-medium opacity-80 text-white text-center mb-10">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
            <div className="product-card">
              <button
                type=""
                className="font-Raleway font-bold text-sm lg:text-base w-[192px] leading-[21px] lg:leading-6 py-2 text-yellow md:py-3 border border-yellow rounded-[5px] z-[1] relative overflow-hidden banner-btn"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
