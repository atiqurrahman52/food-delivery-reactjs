import {  EyeSlash} from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";
import UserMenuBar from "../components/userProfile/UserMenuBar";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(true)
  return (
    <section id="profile">
      <div className="container">
        <div className="py-4 lg:py-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <UserMenuBar />
            </div>

            <div className="col-span-12 md:col-span-7">
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

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                    First Name
                  </label>
                  <input
                    className="inputs f-inputs border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-full h-10 lg:h-12 outline-success focus:outline-none px-4 py-[13px]"
                    type="text"
                    id="fname"
                    value="David"
                    readonly
                    name="fname"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                    Last Name
                  </label>
                  <input
                    className="inputs border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded w-full h-10 lg:h-12 outline-success focus:outline-none focus px-4 py-[13px]"
                    type="text"
                    id="fname"
                    value="Smith"
                    readonly
                    name="lname"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                    Your Email
                  </label>
                  <input
                    className="inputs border border-[#A3A3A5] text-success focus:outline-none font-Raleway font-semibold text-sm rounded w-full h-10 lg:h-12 outline-success px-4 py-[13px]"
                    type="email"
                    id="fname"
                    value="david@gmail.com"
                    readonly
                    name="fname"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                    Password
                  </label>

                  <div for="" className="relative">
                    <span className="absolute top-1/2 -translate-y-1/2 right-2 py-3 cursor-pointer">
                     
                      <EyeSlash size={18} />
                    </span>

                    <input
                      className="inputs border border-[#A3A3A5] text-success font-Raleway font-semibold text-sm rounded focus:outline-none w-full h-10 lg:h-12 outline-success px-4 py-[13px]"
                      type="password"
                      value="Atiq"
                      readonly
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
                <br />
              </div>
                   {editProfile ? (
                         <button
                         onClick={() => setEditProfile(false)}
                         className="edit-profile bg-success w-full md:w-[261px] h-10 md:h-11 rounded-lg font-Raleway font-semibold text-sm text-white"
                       >
                         Edit Profile
                       </button>
                   ): (
                    <div className="save-btn flex  flex-col md:flex-row gap-4 md:gap-6">
                    <button
                       onClick={() => setEditProfile(true)}
                      className="saved bg-success w-full md:w-[261px] h-10 md:h-11 rounded-lg font-Raleway font-semibold text-sm text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditProfile(true)}
                      className="saved border border-success w-full md:w-[261px] h-10 md:h-11 rounded-lg font-Raleway font-semibold text-sm text-success"
                    >
                      Cancel
                    </button>
                  </div>
                   )}
               

             

            

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
