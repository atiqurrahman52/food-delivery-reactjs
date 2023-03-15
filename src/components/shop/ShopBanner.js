import React from "react";

const ShopBanner = () => {
  return (
    <section id="banner-header">
      <div className="banner-shop bg-center bg-no-repeat bg-cover h-[300px] md:block hidden">
        <div className="container">
          <div className="flex flex-col space-y-2 pt-[104px]">
            <h3 className="font-Playfair font-bold text-5xl mb-2 text-black">
              Shop
            </h3>
            <p className="font-Raleway font-medium text-base leading-6 text-primary opacity-60">
              From Home Cooks to Professional Chefs
            </p>
          </div>
        </div>
      </div>
      {/* <!-- For Mobile  --> */}
      <div className="banner-shop-mobile bg-center bg-no-repeat bg-cover h-[294px] md:hidden">
        <div className="container">
          <div className="flex flex-col space-y-2 pt-[104px]">
            <h3 className="font-Playfair font-bold text-2xl  text-black">
              Shop
            </h3>
            <p className="font-Raleway font-medium text-base  text-primary opacity-60">
              From Home Cooks to Professional Chefs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
