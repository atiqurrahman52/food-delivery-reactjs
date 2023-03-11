import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section id="subscribe">
      <div
        class="subscribe-banner bg-center bg-no-repeat bg-cover h-[300px] md:block hidden"
      >
        <div class="container">
          <div class="flex justify-between gap-14 pt-[83px]">
            <div class="space-y-3">
              <h3 class="font-Playfair font-bold text-[32px] leading-[42px]">
                Subscribe to our Newsletter
              </h3>
              <p class="font-Raleway text-sm leading-[21px] text-primary">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqut enim ad minim
              </p>
            </div>
            <div
              class="flex items-center px-2 w-[514px] h-[60px] bg-white rounded"
            >
              <input
                type=""
                name=""
                value=""
                class="w-full h-[60px] px-3 outline-none"
                placeholder="Your email address..."
              />
              <button
                class="w-[101px] h-[48px] bg-primary text-white rounded"
                type=""
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- For mobile  --> */}

    <section id="subscribe">
      <div
        class="subscribe-banner-mobile bg-center bg-no-repeat bg-cover h-[300px] md:hidden block"
      >
        <div class="container">
          <div class="flex flex-col gap-14">
            <div class="space-y-10">
              <h3
                class="font-Playfair text-center font-bold text-xl lg:text-[32px] leading-[27px] lg:leading-[42px]"
              >
                Subscribe to our Newsletter
              </h3>
              <p
                class="font-Raleway text-sm text-center leading-[21px] text-primary"
              >
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
            </div>
            <div class="flex justify-center">
              <div
                class="flex items-center px-2 w-[288px] h-[56px] bg-white rounded"
              >
                <input
                  type=""
                  name=""
                  value=""
                  class="w-full h-[56px] px-3 outline-none"
                  placeholder="Your email address..."
                />
                <button
                  class="w-[101px] h-[40px] bg-primary font-Raleway font-bold text-sm leading-[21px] text-white rounded"
                  type=""
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default NewsLetter;