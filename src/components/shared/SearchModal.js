import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useState } from "react";

const SearchModal = ({ setIsModalVisible }) => {
  let items = [
    "Cabbage",
    "Lettuce",
    "Broccoli",
    "Spinach",
    "Cauliflower",
    "Red Cabbage",
    "Turnip",
    "Eggplant",
    "Beetroot",
    "Pepper",
    "Onion",
    "Potato",
    "Garlic",
    "Mushroom",
    "Corn",
    "Carrot",
    "Tomato",
    "Cucumber",
    "Peas",
    "Asparagus",
  ];
  const [searchText, setSearchText] = useState("");

  let inputText = searchText.trim().toLowerCase();
  if (inputText.length > 0) {
    items = items.filter((val) => val.toLowerCase().match(inputText));
  }

  return (
    <div className="fixed z-10 inset-0 w-full flex justify-center px-4 h-full bg-[rgba(255,255,255,0.74)] backdrop-blur-[2px]">
      <div className="fixed inset-0 bg-white/74 h-screen w-full z-30"></div>
      <div className="w-full md:w-[641px] mt-40 relative z-40">
        <div className="flex justify-end mb-[125px]">
          <button
            onClick={() => setIsModalVisible(false)}
            type=""
            className="search-cancel"
          >
            <X size={40} className="text-success" />
          </button>
        </div>
        <div className="">
          <label className="relative h-[50px] lg:h-20">
            <span className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer">
              <i className="ph-magnifying-glass text-2xl lg:text-[40px] text-primary"></i>
              <MagnifyingGlass size={40} className="text-primary" />
            </span>
            <input
              type="text"
              name=""
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)}
              className="font-Raleway font-medium text-sm lg:text-base w-full h-[50px] lg:h-20 block px-6 text-[#938F99] outline-none border rounded border-success"
            />
          </label>
        </div>
        {searchText &&
          (items.length < 1 ? (
            "No data found!"
          ) : (
            <ul className="shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] bg-white py-5 px-6 rounded mt-3">
              {items.map((item, i) => (
                <li className="text-primary/40 my-3" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
};

export default SearchModal;
