import { ArrowUpRight, MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { featuredPostRecipesData } from "../../data/recipes/featuredPostRecipesData";

const FeaturedPostRecipes = () => {
  return (
    <div className="bg-[#F3F4EF]">
      <div className="py-10 lg:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 lg:mb-10">
            <h3 className="font-Playfair font-bold text-base lg:text-2xl leading-[22px] lg:leading-[34px]">
              Featured posts
            </h3>
            <label for="" className="relative h-12 w-full md:w-[300px]">
              <span className="absolute top-1/2 -translate-y-1/2 right-2 py-3 cursor-pointer">
                <MagnifyingGlass size={24} className='text-[#C7C7C3]' />
              </span>
              <input
                type=""
                name=""
                value=""
                placeholder="Search..."
                className="text-sm w-full h-11 block  px-4 placeholder:text-[#C7C7C3] text-[#C7C7C3] outline-none bg-transparent rounded-[10px] border border-[#C7C7C3]"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                featuredPostRecipesData.map(({id,img,time,title,description}) =>(
                    <Link key={id} to="#">
                    <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                      <div className="p-3 space-y-3">
                        <div>
                          <img
                            className="w-full h-full mb-6"
                            src={img}
                            alt=""
                          />
                        </div>
                        <div className="flex space-x-3 mb-4">
                          <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                            Category 
                          </p>
                          <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                            {time}
                          </p>
                        </div>
                        <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                         {title}
                        </p>
                        <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                         {description}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                          <p className="font-Raleway font-medium text-sm leading-[21px]">
                            Read More
                          </p>
                      
                          <ArrowUpRight size={24} className='text-primary' />
                        </div>
                      </div>
                    </div>
                  </Link>
      
                ))
            }
            
            {/* <a href="#">
              <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="p-3 space-y-3">
                  <div>
                    <img
                      className="w-full h-full mb-6"
                      src="../assets/image/recipes/featured-post-2.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                      Category
                    </p>
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                      5 min read
                    </p>
                  </div>
                  <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                    Spice up your weeknight...
                  </p>
                  <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                    <p className="font-Raleway font-medium text-sm leading-[21px]">
                      Read More
                    </p>
                    <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="p-3 space-y-3">
                  <div>
                    <img
                      className="w-full h-full mb-6"
                      src="../assets/image/recipes/featured-post-3.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                      Category
                    </p>
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                      5 min read
                    </p>
                  </div>
                  <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                    Spice up your weeknight...
                  </p>
                  <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                    <p className="font-Raleway font-medium text-sm leading-[21px]">
                      Read More
                    </p>
                    <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="p-3 space-y-3">
                  <div>
                    <img
                      className="w-full h-full mb-6"
                      src="../assets/image/recipes/featured-post-4.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                      Category
                    </p>
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                      5 min read
                    </p>
                  </div>
                  <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                    Spice up your weeknight...
                  </p>
                  <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                    <p className="font-Raleway font-medium text-sm leading-[21px]">
                      Read More
                    </p>
                    <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="p-3 space-y-3">
                  <div>
                    <img
                      className="w-full h-full mb-6"
                      src="../assets/image/recipes/featured-post-5.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                      Category
                    </p>
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                      5 min read
                    </p>
                  </div>
                  <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                    Spice up your weeknight...
                  </p>
                  <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                    <p className="font-Raleway font-medium text-sm leading-[21px]">
                      Read More
                    </p>
                    <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="border border-[#D6D7D2] rounded-lg hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="p-3 space-y-3">
                  <div>
                    <img
                      className="w-full h-full mb-6"
                      src="../assets/image/recipes/featured-post-6.webp"
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                      Category
                    </p>
                    <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                      5 min read
                    </p>
                  </div>
                  <p className="font-Raleway font-bold text-2xl leading-[34px] text-primary mb-2">
                    Spice up your weeknight...
                  </p>
                  <p className="font-Raleway text-base leading-6 text-primary/60 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                    <p className="font-Raleway font-medium text-sm leading-[21px]">
                      Read More
                    </p>
                    <i className="ph-arrow-up-right-bold text-2xl text-primary"></i>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
          <div className="flex justify-center pt-6 lg:pt-8">
            <button className="py-3 px-4 w-[120px] h-[52px] rounded-[48px] bg-[#248C80] load_more">
              <p className="font-Raleway font-semibold text-sm lg:text-base leading-[21px] lg:leading-6 text-white">
                Load more
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostRecipes;
