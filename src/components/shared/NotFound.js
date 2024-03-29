import React from "react";
import strawberry from "../../assets/image/not-found/strawberry.png";
import orange from "../../assets/image/not-found/orange.png";
import four from "../../assets/image/not-found/four.webp";
import lemon from "../../assets/image/not-found/zero.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section id="not-found" className="relative">
      <img
        src={strawberry}
        className="absolute top-0 right-0 z-20 w-[60px] lg:w-auto"
        alt=""
      />
      <img
        src={orange}
        className="absolute bottom-0 left-0 z-20 w-[60px] lg:w-auto"
        alt=""
      />
      <div className="not-found bg-cover bg-no-repeat bg-center">
        <div className="container">
          <div className="flex justify-center items-center h-screen w-full">
            <div>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-5 mb-5">
                <div>
                  <img
                    className="w-[90px] lg:w-[139px] h-full"
                    src={four}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-[256px] lg:w-[514px] h-auto"
                    src={lemon}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-[90px] lg:w-[139px] h-auto"
                    src={four}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-Poppins font-bold text-xl md:text-[32px] text-[#6FB400]">
                  Ooops...
                </p>
                <p className="font-Poppins text-sm md:text-2xl text-[#6FB400]">
                  Page not found
                </p>

                <Link to="/" className="product-card mt-10 lg:mt-[47px]">
                  <button
                    type=""
                    className="font-Raleway font-medium text-sm w-[308px] lg:text-base leading-[21px] lg:leading-6 py-2 text-[#659907] md:py-3 border border-[#659907] rounded-[5px] z-[1] relative overflow-hidden add-to-cart-btn"
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
