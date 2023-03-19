import { Cardholder, MapPin, User } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/image/profile/user.webp";
const BillingAddress = () => {
  return (
    <section id="billing-address">
      <div className="container">
        <div className="py-4 lg:py-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-[#FAFCFC] lg:h-[681px]">
                <div className="flex flex-col items-center mb-10">
                  <div className="mb-4">
                    <div>
                      <img src={user} alt="" />
                    </div>
                  </div>
                  <p className="font-Playfair font-bold text-base lg:text-xl leading-6 lg:leading-[30px] text-[#222329] mb-1">
                    MIRZA AL MUSADDEQUE
                  </p>
                  <p className="font-Raleway font-medium text-sm leading-[21px] text-[#A3A3A5]">
                    example@email.com
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="px-8">
                    <Link
                      to="/profile"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      {/* <i className="ph-user text-[#016A78] text-lg"></i> */}
                      <User size={24} className="" />
                      <p className="font-Overpass font-semibold text-sm leading-[21px] text-[#016A78]">
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="px-8 text-[#004738] activeProfile">
                    <Link
                      to="/billing-address"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      {/* <i className="ph-map-pin text-lg"></i> */}
                      <MapPin size={24} />
                      <p className="font-Overpass font-semibold text-sm leading-[21px]">
                        Billing Address
                      </p>
                    </Link>
                  </li>
                  <li className="px-8">
                    <Link
                      to="/payment-options"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      {/* <i className="ph-cardholder text-[#016A78] text-lg"></i> */}
                      <Cardholder size={24} />
                      <p className="font-Overpass font-semibold text-sm leading-[21px] text-[#016A78]">
                        Payment Options
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div>
                <p className="flex gap-1 font-Raleway font-medium text-sm leading-[21px] text-primary/40 mb-2 lg:mb-4">
                  Account <span> /</span> Billing Address
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <p className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[29px] lg:leading-[42px] text-primary mb-1">
                  Billing Address
                </p>
                <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
                  View and update your account details, profile and more.
                </p>
              </div>

              <div className="border border-[#EBEBEB] p-6 rounded-xl mb-8">
                <div className="border border-[#EBEBEB] p-6 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-3">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="Home"
                        name="Home"
                        value="Home"
                      />
                      <label
                        for="Home"
                        className="font-Raleway font-bold text-sm leading-[21px] text-[#222329]"
                      >
                        Home
                      </label>
                    </div>
                    <div>
                      <p className="font-Raleway font-semibold text-xs leading-[18px] text-success bg-[#F5F5F5] py-[5px] px-3 rounded-[100px]">
                        Default
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      Nathan C. Collette, 4503 Villa DriveElkhart, <br /> IN
                      46516,574-322-7161,USA
                    </p>
                    <button className="text-2xl text-[#FF0000]" type="">
                      <i className="ph-trash-bold"></i>
                    </button>
                  </div>
                  <div className="w-max ml-auto pt-4">
                    <button
                      type=""
                      className="bg-success font-Raleway font-semibold text-sm leading-[21px] text-white w-[94px] h-[36px] rounded-lg"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div className="border border-[#EBEBEB] p-6 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-3">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="Work"
                        name="Work"
                        value="Work"
                      />
                      <label
                        for="Work"
                        className="font-Raleway font-bold text-sm leading-[21px] text-[#222329]"
                      >
                        Work
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      Nathan C. Collette, 4503 Villa DriveElkhart, <br /> IN
                      46516,574-322-7161,USA
                    </p>
                    <button className="text-2xl text-[#FF0000]" type="">
                      <i className="ph-trash-bold"></i>
                    </button>
                  </div>
                  <div className="w-max ml-auto pt-4">
                    <button
                      type=""
                      className="border border-success font-Raleway font-semibold text-sm leading-[21px] text-success w-[94px] h-[36px] rounded-lg"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <button
                  type=""
                  className="flex items-center w-max ml-auto space-x-2 px-4 pt-4"
                >
                  <span className="text-success text-xl">
                    <i className="ph-plus"></i>
                  </span>
                  <p className="font-Overpass font-semibold text-sm leading-[21px] text-success">
                    Add New Address
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
