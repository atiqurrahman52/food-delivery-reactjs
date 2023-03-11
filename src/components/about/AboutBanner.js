import React from "react";

const AboutBanner = () => {
  return (
    <section id="about-banner">
      <div className="about-banner bg-cover bg-center bg-no-repeat h-[412px] md:block hidden">
        <div className="container flex justify-center items-center h-full w-full">
          <div className="text-center">
            <h1 className="font-Playfair font-bold text-xl lg:text-[56px] leading-7 lg:leading-[67px] text-white mb-6">
              Our Inspiration: The People, Places, and Flavors That Drive Us
            </h1>
            <p className="font-Raleway text-sm lg:text-xl leading-[21px] lg:leading-[30px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- For Mobile  --> */}
      <div className="about-banner-mobile bg-cover bg-center bg-no-repeat h-[412px] md:hidden block">
        <div className="container flex justify-center items-center h-full w-full">
          <div className="text-center">
            <h1 className="font-Playfair font-bold text-xl lg:text-[56px] leading-7 lg:leading-[67px] text-white mb-6">
              Our Inspiration: The People, Places, and Flavors That Drive Us
            </h1>
            <p className="font-Raleway text-sm lg:text-xl leading-[21px] lg:leading-[30px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
