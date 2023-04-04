import React from "react";
import {  NavLink } from "react-router-dom";
import user from "../../assets/image/profile/user.webp";
import { userMenuBarData } from "../../data/userProfile/userMenuBarData";
const UserMenuBar = () => {
  return (
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
      <ul className="scrollbar-hidden flex flex-row md:flex-col items-center md:items-start justify-start lg:space-y-4 overflow-x-auto md:overflow-x-hidden overflow-y-clip whitespace-nowrap py-3">
        {userMenuBarData.map(({ id, title, path, icon }) => (
          <li key={id} className="px-4 w-full">
            <NavLink
              to={path}
              className="profile-active flex items-center p-2 gap-1 lg:gap-2.5"
            >
              <span className="text-[#016A78]">{icon}</span>
              <p className="font-Overpass font-semibold text-sm text-[#016A78] leading-[21px]">
                {title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMenuBar;

