import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/image/footer/footer-logo.webp'
import { navBarData } from "../../data/navigation/navBarData";
import { socialData } from "../../data/sharedData/socialData";
const Footer = () => {
  return (
    <div>
      <footer id="footer mb-14">
        <div className="footer-background">
          <div className="container">
            <div className="grid grid-cols-12 py-10 xl:py-20">
              <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-5 md:mb-0 text-center md:text-left">
                <div className="mb-8 flex justify-center md:justify-start">
                  <a href="#" className="inline-block w-fit">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="mb-4 lg:mb-6">
                  <h3 className="font-Raleway font-medium text-base text-yellow leading-6">
                    Address:
                  </h3>
                  <p className="text-white">
                    Level 1, 12 Sample St, Sydney NSW 2000
                  </p>
                </div>

                <div className="mb-4 lg:mb-6">
                  <h3 className="font-Raleway font-medium text-base text-yellow leading-6 mb-1">
                    Contact:
                  </h3>
                  <div className="flex flex-col">
                    <a
                      href="tel:1800 123 4567"
                      className="font-Raleway font-medium text-sm leading-[21pxpx] text-white"
                    >
                      1800 123 4567
                    </a>
                    <a
                      href="mailto:info@relume.io"
                      className="font-Raleway font-medium text-sm leading-[21pxpx] text-white"
                    >
                      info@relume.io
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-3">
                  {
                    socialData.map(({id,img,path}) =>(
                      <Link to={path}>
                       <img src={img} alt='' />
                      </Link>
                    ))
                  }
                  
                </div>
              </div>

              <div className="col-span-6 md:col-span-3 lg:col-span-5">
                <ul className="space-y-3">

                  {navBarData.map(({id,title,path}) =>(
                    <li>
                    <Link key={id}
                      to={path}
                      className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-yellow hover:text-white block md:text-end"
                    >
                      {title}
                    </Link>
                  </li>
                  ))}
                 

                  <li>
                    <Link
                      to="/sign-up"
                      className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-yellow hover:text-white block md:text-end"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-6 md:col-span-3 lg:col-span-3 text-end space-y-3">
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-yellow hover:text-white">
                  Open Hour
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Monday: 12-6PM
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Tuesday: 12-6PM
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Wednesday: 12-6PM
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Thursday: 12-6PM
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Friday: 12-6PM
                </p>
                <p className="font-Raleway font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-white">
                  Sunday: 12-6PM
                </p>
              </div>
            </div>
            <div className="bg-white h-[1px]"></div>

            <div className="flex flex-col md:flex-row justify-between gap-4 items-center py-8">
              <div>
                <p className="font-Poppins text-xs lg:text-sm leading-[21px] text-white">
                  © 2000-2021, All Rights Reserved
                </p>
              </div>
              <ul className="flex space-x-6">
                <li className="font-Roboto text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-white">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="font-Roboto text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-white">
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
