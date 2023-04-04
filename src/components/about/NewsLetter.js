import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <section id="subscribe">
        <div className="subscribe-banner bg-center bg-no-repeat bg-cover h-[300px] md:block hidden">
          <div className="container">
            <div className="flex justify-between gap-14 pt-[83px]">
              <div className="space-y-3">
                <h3 className="font-Playfair font-bold text-[32px] leading-[42px]">
                  Subscribe to our Newsletter
                </h3>
                <p className="font-Raleway text-sm leading-[21px] text-primary">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor <br />
                  incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
              </div>
              <div className="flex items-center px-2 w-[514px] h-[60px] bg-white rounded">
                <input
                  type=""
                  name=""
                  
                  className="w-full h-[60px] px-3 outline-none"
                  placeholder="Your email address..."
                />
                <button
                  className="w-[101px] h-[48px] bg-primary text-white rounded"
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
        <div className="subscribe-banner-mobile bg-center bg-no-repeat bg-cover h-[300px] md:hidden block">
          <div className="container">
            <div className="flex flex-col gap-14">
              <div className="space-y-10">
                <h3 className="font-Playfair text-center font-bold text-xl lg:text-[32px] leading-[27px] lg:leading-[42px]">
                  Subscribe to our Newsletter
                </h3>
                <p className="font-Raleway text-sm text-center leading-[21px] text-primary">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim ad minim
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center px-2 w-[288px] h-[56px] bg-white rounded">
                  <input
                    type=""
                    name=""
                    
                    className="w-full h-[56px] px-3 outline-none"
                    placeholder="Your email address..."
                  />
                  <button
                    className="w-[101px] h-[40px] bg-primary font-Raleway font-bold text-sm leading-[21px] text-white rounded"
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
