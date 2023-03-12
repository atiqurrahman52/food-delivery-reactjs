import { ArrowUpRight, CaretRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { articlesData } from "../../data/home/articlesData";

const Articles = () => {
  return (
    <section id="blog">
      <div className="bg-[#F3F4EF]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="flex flex-col items-center mb-10 lg:mb-14">
              <h3 className="font-edwardian text-[32px] lg:text-[80px] leading-[38px] text-primary opacity-[0.2]">
                Blog
              </h3>
              <h3 className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-primary mb-2">
                Articles & Useful tips
              </h3>
              <p className="font-Raleway font-medium text-sm leading-[21pxpx] text-primary/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                articlesData.map(({id,img,title,description,readMore}) =>(
                  <Link to="#" key={id} className='hover:shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] transition duration-500 ease-out hover:ease-in'>
                  <div className="border border-[#D6D7D2]">
                    <div className="p-4 space-y-3">
                      <div className="flex justify-center w-full h-[232px]">
                        <img className="w-full" src={img} alt="" />
                      </div>
                      <p className="font-Raleway font-semibold text-base leading-6 text-primary">
                        {title}
                      </p>
                      <p className="font-Raleway text-sm lg:text-base leading-6 text-primary/60">
                        {
                          description
                        }
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm leading-[21pxpx]">
                        <p className="font-Raleway font-medium text-sm leading-[21px]">
                         {readMore}
                        </p>
                        
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
                ))
              }

            
            </div>
            <div className="flex justify-center pt-6 lg:pt-8">
              <button className="flex items-center gap-2 py-3 px-4 w-[157px] h-[52px] rounded-[48px] bg-[#248C80]">
                <p className="font-Raleway font-semibold text-sm lg:text-base leading-[21pxpx] lg:leading-6 text-white">
                  See all Post
                </p>
                <span className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                  {/* <i className="ph-caret-right-bold text-success"></i> */}
                  <CaretRight size={20} className='text-success' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
