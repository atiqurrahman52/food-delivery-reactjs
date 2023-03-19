import { X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/image/logo/logo.webp";
import { navBarData } from "../../data/navigation/navBarData";
import { cartData } from "../../data/sharedData/cartData";
import SearchModal from "../shared/SearchModal";

const Navbar = () => {
    const [menu , setMenu] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cart, setCart] = useState(false)
  return (

   <>
    <header
      id="navbar"
      className="sticky top-0 z-50 w-full navbar backdrop-blur-[2px]"
    >
      {/* <!-- Large screen started --> */}
      <div className="w-full backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)]">
        <nav className="container flex items-center justify-between py-1">
          <div className="flex justify-center items-center">
            <Link to="/" className="hidden md:flex">
              <img src={logo} alt="" />
            </Link>

            <ul className="hidden md:flex items-center gap-6 pl-8">
             {
                navBarData.map(({id,title,path}) =>(
                    <li key={id}>
                    <Link
                      className="font-Raleway font-semibold text-primary text-sm md:text-base leading-6 activePage"
                      to={path}
                    >
                    {title}
                    </Link>
                  </li>
                ))
             }
            </ul>
          </div>

          <ul className="hidden md:flex items-center gap-6">

            <li
             className="">
              <button 
               onClick={() => setIsModalVisible(true)}
               type="" className="search">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                    fill="#070707"
                  />
                  <path
                    d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                    stroke="#070707"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9248 21.9248L27.9998 27.9998"
                    stroke="#070707"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </li>

            <li className="">
              <button type="" className="">
                <Link to='/profile'>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M16.0001 4C13.572 3.99929 11.2007 4.73521 9.19964 6.11053C7.19856 7.48586 5.66178 9.43589 4.7923 11.703C3.92283 13.9701 3.76158 16.4477 4.32984 18.8084C4.89811 21.1691 6.16916 23.3019 7.97509 24.925C8.72758 23.4432 9.87569 22.1986 11.2922 21.3293C12.7086 20.46 14.3381 19.9999 16.0001 20C15.0112 20 14.0445 19.7068 13.2222 19.1573C12.4 18.6079 11.7591 17.827 11.3807 16.9134C11.0023 15.9998 10.9032 14.9945 11.0962 14.0245C11.2891 13.0546 11.7653 12.1637 12.4646 11.4645C13.1638 10.7652 14.0547 10.289 15.0246 10.0961C15.9945 9.90315 16.9999 10.0022 17.9135 10.3806C18.8271 10.759 19.608 11.3999 20.1574 12.2221C20.7068 13.0444 21.0001 14.0111 21.0001 15C21.0001 16.3261 20.4733 17.5979 19.5356 18.5355C18.5979 19.4732 17.3262 20 16.0001 20C17.662 19.9999 19.2916 20.46 20.708 21.3293C22.1245 22.1986 23.2726 23.4432 24.0251 24.925C25.831 23.3019 27.1021 21.1691 27.6703 18.8084C28.2386 16.4477 28.0774 13.9701 27.2079 11.703C26.3384 9.43589 24.8016 7.48586 22.8005 6.11053C20.7995 4.73521 18.4282 3.99929 16.0001 4Z"
                      fill="#070707"
                    />
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="#070707"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
                      stroke="#070707"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.9751 24.9248C8.72749 23.4428 9.87555 22.1981 11.292 21.3287C12.7085 20.4592 14.3381 19.999 16.0001 19.999C17.6621 19.999 19.2917 20.4592 20.7082 21.3287C22.1246 22.1981 23.2727 23.4428 24.0251 24.9248"
                      stroke="#070707"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </button>
            </li>

            <li id="cart-button" className="relative">
              <button
              onClick={() => setCart(!cart)}
               type="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M27 9H5C4.44772 9 4 9.44772 4 10V26C4 26.5523 4.44772 27 5 27H27C27.5523 27 28 26.5523 28 26V10C28 9.44772 27.5523 9 27 9Z"
                    fill="#070707"
                  />
                  <path
                    d="M27 9H5C4.44772 9 4 9.44772 4 10V26C4 26.5523 4.44772 27 5 27H27C27.5523 27 28 26.5523 28 26V10C28 9.44772 27.5523 9 27 9Z"
                    stroke="#070707"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 13V9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52678 14.6739 4 16 4C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9V13"
                    stroke="#070707"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <p className="bg-[#FF0000] rounded-full w-5 h-5 absolute -top-2.5 -right-1.5 shadow-[0px_2px_16px_1px_#FFB5B5] flex justify-center items-center font-Raleway font-medium text-xs text-white">
                2
              </p>

             {
              cart &&
              <div
              id="cart-menu"
              className="absolute z-50 top-full right-0 pt-10"
            >
              <div className="relative bg-[#F9F6F1] max-w-[425px] h-[564px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] rounded-lg p-4 lg:p-6">
                <p className="font-Playfair font-bold text-base lg:text-xl text-primary mb-4 pt-5">
                  Your Cart 
                </p>

                <div className="">
                  {
                    cartData.map(({id,img,productName,price}) =>(
                      <div key={id}
                       className="flex justify-between items-start py-3 border-b border-[#E5E2DE]">
                      <div className="flex gap-3">
                        <div className="w-12 h-12">
                          <img src={img} alt="" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-Raleway font-bold text-sm text-primary">
                           {productName}
                          </p>
                          <p className="font-Raleway font-medium text-sm text-primary opacity-60">
                            ${price}
                          </p>
                        </div>
                      </div>
                      <button> 
                        <X size={20} />
                      </button>
                    </div>
                    ))
                  }

                </div>
                <div className="flex justify-between py-3">
                  <p className="font-Raleway font-bold text-sm text-primary">
                    Subtotal :
                  </p>
                  <p className="font-Raleway font-semibold text-sm text-primary opacity-60">
                    $115.66
                  </p>
                </div>

                <div className="flex space-x-2 pt-4">
                  <button
                    type=""
                    className="font-Raleway font-semibold text-sm text-primary w-[126px] lg:w-[184px] h-[45px] bg-primary/12 border border-[#E1E1E1]"
                  >
                    <Link to="/checkout">VIEW CART</Link>
                  </button>
                  <button
                    type=""
                    className="font-Raleway font-semibold text-sm text-white w-[126px] lg:w-[184px] h-[45px] bg-success"
                  >
                    <Link to="/checkout">CHECKOUT</Link>
                  </button>
                </div>
                <button
                  onClick={() => setCart(false)}
                  id="cart-close-button"
                  type=""
                  className="absolute top-3 right-6 w-6 h-6 bg-yellow rounded-full text-white flex justify-center items-center"
                >
                  
                  <X size={24} />
                </button>
              </div>
            </div>
             }

            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- Large screen end --> */}

      {/* <!-- Mobile screen started  --> */}
      <div className="w-full backdrop-blur-[2px] bg-[rgba(255,255,255,0.5)]">
        <nav className="px-4 py-2 md:py-0">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <Link to='/' className="md:hidden block w-8 h-8">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="flex gap-2.5 items-center">
              <div id="mob-cart-button" className="relative md:hidden block">
                <button
                onClick={() => setCart(!cart)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z"
                      fill="#070707"
                    />
                    <path
                      d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z"
                      stroke="#070707"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.875 8.125V5.625C6.875 4.7962 7.20424 4.00134 7.79029 3.41529C8.37634 2.82924 9.1712 2.5 10 2.5C10.8288 2.5 11.6237 2.82924 12.2097 3.41529C12.7958 4.00134 13.125 4.7962 13.125 5.625V8.125"
                      stroke="#070707"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <p className="bg-[#FF0000] rounded-full w-4 h-4 absolute -top-2.5 -right-1.5 shadow-[0px_2px_16px_1px_#FFB5B5] flex justify-center items-center font-Raleway font-medium text-xs text-white">
                  2
                </p>
              </div>
              {/* Cart List started  */}
             {
              cart &&
              <div
              id="mob-cart-menu"
              className="absolute z-50 top-7 left-0 right-0 pt-10 mx-2"
            >
              <div className="relative bg-[#F9F6F1] max-w-[425px] h-[564px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] rounded-lg p-4 lg:p-6">
                <p className="font-Playfair font-bold text-base lg:text-xl text-primary mb-4 pt-5">
                  Your Cart
                </p>

                <div className="">
                  {
                    cartData.map(({id,img,productName,price}) =>(
                      <div
                      key={id}
                       className="flex justify-between items-start py-3 border-b border-[#E5E2DE]">
                      <div className="flex gap-3">
                        <div className="w-12 h-12">
                          <img src={img} alt="" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-Raleway font-bold text-sm text-primary">
                           {productName}
                          </p>
                          <p className="font-Raleway font-medium text-sm text-primary opacity-60">
                            $ {price}
                          </p>
                        </div>
                      </div>
                      <button type="">
                     
                        <X size={18} />
                      </button>
                    </div>
                    ))
                  }
                 
                </div>
                <div className="flex justify-between py-3">
                  <p className="font-Raleway font-bold text-sm text-primary">
                    Subtotal :
                  </p>
                  <p className="font-Raleway font-semibold text-sm text-primary opacity-60">
                    $115.66
                  </p>
                </div>

                <div className="flex space-x-2 pt-4">
                  <button
                    type=""
                    className="font-Raleway font-semibold text-sm text-primary w-[126px] lg:w-[184px] h-[45px] bg-primary/12 border border-[#E1E1E1]"
                  >
                    <Link to="/checkout">VIEW CART</Link>
                  </button>
                  <button
                    type=""
                    className="font-Raleway font-semibold text-sm text-white w-[126px] lg:w-[184px] h-[45px] bg-success"
                  >
                    <Link to="/checkout">CHECKOUT</Link>
                  </button>
                </div>
                <button
                 onClick={() => setCart(false)}
                  id="mob-cart-close-button"
                  type=""
                  className="absolute top-3 right-6 w-6 h-6 bg-yellow rounded-full text-white flex justify-center items-center"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
             }
              {/* Cart List end  */}
              <button className="md:hidden block" type="" onClick={() => setMenu(true)}>
                <svg
                  id="menu-button"
                  className="h-6 w-6 cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9375 5H14.0625"
                    stroke="#004738"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.125 10H16.875"
                    stroke="#004738"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.9375 15H14.0625"
                    stroke="#004738"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

       {
          menu && <div
            id="menu"
            className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-screen"
          >
            <div className="relative bg-white rounded-lg w-[265px] h-[350px] pt-6">
              <div className="text-center mb-10">
                <p className="font-Playfair font-semibold text-sm text-primary">
                  Menu
                </p>
              </div>
              <div className="mobile-menu">
                <ul className="flex flex-col justify-center items-center px-[34px]">
                  <li className="font-Raleway font-medium text-sm text-primary/60 py-3 border-b border-[#EBEBEB] w-full text-center activePage">
                    <a href="./index.html">Home</a>
                  </li>
                  <li className="font-Raleway font-medium text-sm text-primary/60 py-3 border-b border-[#EBEBEB] w-full text-center">
                    <a href="./pages/about.html">About</a>
                  </li>
                  <li className="font-Raleway font-medium text-sm text-primary/60 py-3 border-b border-[#EBEBEB] w-full text-center">
                    <a href="./pages/recipes.html">Recipes</a>
                  </li>
                  <li className="font-Raleway font-medium text-sm text-primary/60 py-3 border-b border-[#EBEBEB] w-full text-center">
                    <a href="./pages/shop.html">Shop</a>
                  </li>
                  <li className="font-Raleway font-medium text-sm text-primary/60 py-3 w-full text-center">
                    <a href="./pages/blog.html">Blog</a>
                  </li>
                </ul>
              </div>
              <button
              onClick={() => setMenu(false)}
               id="close-button" className="absolute -top-4 -right-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="18" fill="#FEBB41" />
                  <path
                    d="M23.625 12.375L12.375 23.625"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.625 23.625L12.375 12.375"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
      }
          {/* <!-- Mobile screen end --> */}
        </nav>
      </div>
    </header>

    {isModalVisible && <SearchModal setIsModalVisible ={setIsModalVisible} />}
   </>

   
  );
};

export default Navbar;
