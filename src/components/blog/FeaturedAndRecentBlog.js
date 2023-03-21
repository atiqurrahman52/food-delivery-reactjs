import { ArrowUpRight, CaretRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { featuredData } from "../../data/blog/featuredData";
import { recentPostData } from "../../data/blog/recentPostData";

const FeaturedAndRecentBlog = () => {
  return (
    <section id="blog">
      <div className="bg-[#F9F6F1]">
        <div className="py-10 xl:py-20">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <div>
                  <h3 className="font-Raleway font-bold text-base leading-6 text-primary mb-6">
                    Featured Blog
                  </h3>

                  {featuredData.map(({ id, img, description, title, time }) => (
                    <Link to={`/blog-detail/${id}`} key={id}>
                      {/* // <Link  key={id}> */}
                      <div className="border border-[#E5E2DE] rounded-lg p-4 mb-4 lg:mb-8">
                        <div className="mb-4 lg:mb-6">
                          <img src={img} alt="" className="rounded" />
                        </div>

                        <div className="flex space-x-3 mb-4">
                          <p className="font-Raleway font-bold text-xs leading-[18px] text-success">
                            Category
                          </p>
                          <p className="font-Raleway font-bold text-xs leading-[18px] text-primary">
                            {time}
                          </p>
                        </div>
                        <div className="mb-4 lg:mb-6">
                          <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-[34px] text-primary mb-2">
                            {title}
                          </h3>
                          <p className="font-Roboto text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
                            {description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <p className="font-Raleway font-medium text-sm leading-[21px] text-primary">
                            Read More
                          </p>

                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex space-x-3 lg:space-x-4 mb-2">
                  <Link
                    to="#"
                    className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-black text-white rounded-full"
                  >
                    1
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                  >
                    2
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                  >
                    3
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                  >
                    4
                  </Link>
                  <Link
                    to="#"
                    className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                  >
                    ...
                  </Link>
                  <Link to="#">
                    <span className="flex justify-center items-center font-Inter font-bold  w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full">
                      {" "}
                      <CaretRight size={18} />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <div>
                  <h3 className="font-Raleway font-bold text-base leading-6 text-primary mb-6">
                    Recent Post
                  </h3>
                </div>

                {recentPostData.map(({ id, title, img, time }) => (
                  <Link to={`/blog-detail/${id}`} key={id}>
                    {/* <Link  key={id}> */}
                    <div className="flex items-center space-x-3 lg:space-x-4 border border-[#DBDCD8] mb-4 lg:mb-6">
                      <div className="">
                        <img className="" src={img} alt="" />
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

                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAndRecentBlog;
