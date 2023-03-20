import { Cardholder, EyeSlash, MapPin, User } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/image/profile/user.webp";

const Profile = () => {
  return (
    <section id="profile">
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
                  <li className="px-8 text-[#016A78] activeProfile">
                    <Link
                      to="/profile"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      {/* <i className="ph-user text-lg"></i> */}
                      <User size={24} />
                      <p className="font-Overpass font-semibold text-sm leading-[21px]">
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="px-8">
                    <Link
                      to="/billing-address"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      {/* <i className="ph-map-pin text-[#016A78] text-lg"></i> */}
                      <MapPin size={24} />
                      <p className="font-Overpass font-semibold text-sm leading-[21px] text-[#016A78]">
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

            <div className="col-span-12 md:col-span-8">
              <div>
                <p className="flex gap-1 font-Raleway font-medium text-sm leading-[21px] text-primary/40 mb-2 lg:mb-4">
                  Account <span> /</span> Profile
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <p className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[29px] lg:leading-[42px] text-primary mb-1">
                  Profile
                </p>
                <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
                  View and update your account details, profile and more.
                </p>
              </div>

              <div className="flex flex-row gap-3 lg:gap-6 mb-4">
                <div className="flex flex-col">
                  <label
                    className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1"
                    for="fname"
                  >
                    First Name
                  </label>
                  <input
                    className="border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-[138px] lg:w-[356px] h-10 lg:h-12 outline-success px-4 py-[13px]"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1"
                    for="fname"
                  >
                    Last Name
                  </label>
                  <input
                    className="border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-[138px] lg:w-[356px] h-10 lg:h-12 outline-success px-4 py-[13px]"
                    type="text"
                    id="fname"
                    name="lname"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-3 lg:gap-6 ">
                <div className="flex flex-col">
                  <label
                    className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1"
                    for="fname"
                  >
                    Your Email
                  </label>
                  <input
                    className="border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-[138px] lg:w-[356px] h-10 lg:h-12 outline-success px-4 py-[13px]"
                    type="email"
                    id="fname"
                    name="fname"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1"
                    for="fname"
                  >
                    Password
                  </label>
                  <div for="" className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 right-2 py-3 cursor-pointer">
    
                      <EyeSlash size={18} />
                    </span>

                    <input
                      className="border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-[138px] lg:w-[356px] h-10 lg:h-12 outline-success px-4 py-[13px]"
                      type="password"
                      id=""
                      name=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 mb-4 md:mb-12">
                <input
                  className="accent-success"
                  type="checkbox"
                  id="accept"
                  name="accept"
                  value="accept"
                />
                <label
                  for="accept"
                  className="font-Raleway font-medium text-xs lg:text-sm leading-[21px] text-primary/80"
                >
                  Subscribe to our Newsletter
                </label>
              </div>
              <button
                type=""
                className="bg-success w-[288px] md:w-[261px] h-10 md:h-11 rounded-lg font-Raleway font-semibold text-sm text-white"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
