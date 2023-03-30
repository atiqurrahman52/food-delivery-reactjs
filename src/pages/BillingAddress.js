import { Cardholder, MapPin, Plus, Trash, User } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/image/profile/user.webp";
import UserMenuBar from "../components/userProfile/UserMenuBar";
const BillingAddress = () => {
  const [newAddress, setNewAddress] = useState(true);
  return (
    <section id="billing-address">
      <div className="container">
        <div className="py-4 lg:py-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <UserMenuBar />
            </div>

            <div className="col-span-12 md:col-span-7">
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

              {newAddress ? (
                <div className="edit-div border border-[#EBEBEB] p-6 rounded-xl mb-8">
                  <div className="border border-[#EBEBEB] p-6 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-3">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <input
                          className="accent-success"
                          type="radio"
                          id="Home"
                          name="Home"
                          value="Home"
                          checked="checked"
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
                        Nathan C. Collette, 4503 Villa DriveElkhart, <br />
                        IN 46516,574-322-7161,USA
                      </p>
                      <button className="text-2xl text-[#FF0000]" type="">
                        <Trash size={20} />
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
                        Nathan C. Collette, 4503 Villa DriveElkhart, <br />
                        IN 46516,574-322-7161,USA
                      </p>
                      <button className="text-2xl text-[#FF0000]" type="">
                        <Trash size={20} />
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
                    onClick={() => setNewAddress(false)}
                    className="edit-billing flex items-center w-max ml-auto space-x-2 px-4 pt-4"
                  >
                    <span className="text-success text-xl">
                      <Plus size={20} />
                    </span>
                    <p className="font-Overpass font-semibold text-sm leading-[21px] text-success">
                      Add New Address
                    </p>
                  </button>
                </div>
              ) : (
                <div className="billing">
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label
                        for="name"
                        className="font-Raleway font-semibold text-xs md:text-base text-[#222329] outline-none mb-1"
                      >
                        Name
                      </label>
                      <br />
                      <input
                        className="border border-primary/40 rounded w-full focus:outline-none px-4 py-2"
                        type="text"
                        id="name"
                        name="name"
                      />
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="font-Raleway font-semibold text-xs md:text-base text-[#222329] outline-none mb-1">
                          Country
                        </label>
                        <input
                          className="border border-primary/40 rounded w-full px-4 py-2 focus:outline-none"
                          type="text"
                          id="name"
                          name="name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                          City
                        </label>
                        <input
                          className="border border-primary/40 rounded w-full px-4 py-2 focus:outline-none"
                          type="text"
                          id="name"
                          name="name"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="font-Raleway font-semibold text-xs md:text-base text-[#222329] outline-none mb-1">
                          Province
                        </label>
                        <input
                          className="border border-primary/40 rounded w-full px-4 py-2 focus:outline-none"
                          type="text"
                          id="name"
                          name="name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="font-Raleway font-semibold text-xs lg:text-base text-[#222329] leading-6 mb-1">
                          Zip Code
                        </label>
                        <input
                          className="border border-primary/40 rounded w-full px-4 py-2 focus:outline-none"
                          type="number"
                          id="name"
                          name="name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="name"
                        className="font-Raleway font-semibold text-xs md:text-base text-[#222329] outline-none mb-1"
                      >
                        Phone Number
                      </label>
                      <br />
                      <input
                        className="border border-primary/40 rounded w-full px-4 py-2"
                        type="number"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div>
                      <input
                        className="accent-success"
                        type="checkbox"
                        id="demoCheckbox"
                        name="checkbox"
                        value="1"
                      />
                      <label for="demoCheckbox">
                        {" "}
                        Mark this address Default
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 pt-4 lg:pt-12">
                    <button
                      onClick={() => setNewAddress(true)}
                      className="save-bill bg-success px-[51px] py-2 font-Raleway font-semibold text-sm text-white rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setNewAddress(true)}
                      className="save-bill border border-success rounded-lg px-[51px] py-2 font-Raleway font-semibold text-sm text-success"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
