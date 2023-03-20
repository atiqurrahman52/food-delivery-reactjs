import React from "react";

const BlogBanner = () => {
  return (
    <div>
      <div className="blog-banner bg-center bg-cover bg-no-repeat h-[300px] md:block hidden">
        <div className="container">
          <div className="pt-10">
            <p className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-white mb-2">
              Blog & Article
            </p>
            <p className="font-Raleway font-medium text-base leading-6 text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center px-2 max-w-[546px] h-[56px] bg-white rounded">
              <input
                type=""
                name=""
                className="w-full h-[56px] px-3 outline-none text-xs lg:text-sm"
                placeholder="Search article, news or recipe..."
              />
              <button
                className="w-[101px] h-[48px] text-xs lg:text-sm bg-primary text-white rounded"
                type=""
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-mobile-banner bg-center bg-cover bg-no-repeat h-[300px] md:hidden block">
        <div className="container">
          <div className="pt-14">
            <p className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-white mb-2">
              Blog & Article
            </p>
            <p className="font-Raleway font-medium text-base leading-6 text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center px-2 max-w-[546px] h-[56px] bg-white rounded">
              <input
                type=""
                name=""
            
                className="w-full h-[56px] px-3 outline-none text-xs lg:text-sm"
                placeholder="Search article, news or recipe..."
              />
              <button
                className="w-[101px] h-[48px] text-xs lg:text-sm bg-primary text-white rounded"
                type=""
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
