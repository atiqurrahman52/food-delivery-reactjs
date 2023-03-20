import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import featuredRecipes from "../../assets/image/recipes/featured-recipes.webp";
import { recipesPostData } from "../../data/recipes/recipesPostData";

const FeaturedRecipes = () => {
  return (
    <section id="featured-recipes">
      <div className="bg-[#F3F4EF]">
        <div className="py-10 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <div>
                  <h3 className="font-Raleway font-bold text-base leading-6 text-primary mb-6">
                    Featured Recipes
                  </h3>
                  {/* <Link to={`recipes-details/${id}`}> */}
                    <div className="mb-4 lg:mb-6">
                      <img src={featuredRecipes} alt="" />
                    </div>

                    <div className="flex space-x-3 mb-4">
                      <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                        Category
                      </p>
                      <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                        5 min read
                      </p>
                    </div>
                    <div className="mb-4 lg:mb-6">
                      <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-[34px] text-primary mb-2">
                        Connecting with Food Lovers Everywhere
                      </h3>
                      <p className="font-Roboto text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary">
                        Read More
                      </p>

                      <ArrowUpRight size={24} className="text-primary" />
                    </div>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div>
                  <h3 className="font-Raleway font-bold text-base leading-6 text-primary mb-6">
                    Recent Post
                  </h3>
                </div>
                      {
                        recipesPostData.map(({id,img,time,title}) =>(
                  <Link to={`/recipes-details/${id}`} key={id}>
                  <div className="flex items-center space-x-3 lg:space-x-4 border border-[#DBDCD8] mb-4 lg:mb-6">
                    <div className="">
                      <img
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="flex space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                        <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                          Category
                        </p>
                        <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                          {time}
                        </p>
                      </div>
                      <p className="font-Playfair font-semibold text-sm lg:text-base leading-[21px] lg:leading-6 mb-3 lg:mb-4">
                        {title}
                      </p>
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <p className="font-Raleway font-medium text-sm leading-[21px] text-primary">
                          Read More
                        </p>
                       
                        <ArrowUpRight size={24} className='text-primary' />
                      </div>
                    </div>
                  </div>
                </Link>
                        ))
                      }

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
