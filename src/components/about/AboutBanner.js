import React from 'react';

const AboutBanner = () => {
    return (
        <section id="about-banner">
      <div
        class="about-banner bg-cover bg-center bg-no-repeat h-[412px] md:block hidden"
      >
        <div class="container flex justify-center items-center h-full w-full">
          <div class="text-center">
            <h1
              class="font-Playfair font-bold text-xl lg:text-[56px] leading-7 lg:leading-[67px] text-white mb-6"
            >
              Our Inspiration: The People, Places, and Flavors That Drive Us
            </h1>
            <p
              class="font-Raleway text-sm lg:text-xl leading-[21px] lg:leading-[30px] text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- For Mobile  --> */}
      <div
        class="about-banner-mobile bg-cover bg-center bg-no-repeat h-[412px] md:hidden block"
      >
        <div class="container flex justify-center items-center h-full w-full">
          <div class="text-center">
            <h1
              class="font-Playfair font-bold text-xl lg:text-[56px] leading-7 lg:leading-[67px] text-white mb-6"
            >
              Our Inspiration: The People, Places, and Flavors That Drive Us
            </h1>
            <p
              class="font-Raleway text-sm lg:text-xl leading-[21px] lg:leading-[30px] text-white"
            >
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