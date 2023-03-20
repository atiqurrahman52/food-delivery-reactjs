import { Cardholder, MapPin, User } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/image/profile/user.webp";

const PaymentOptions = () => {
  return (
    <section id="payment">
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
                {/* <!-- <ul className="space-y-4 overflow-x-auto border"> --> */}
                {/* <!-- <ul className="flex flex-row lg:flex-col items-center lg:items-start justify-start lg:space-y-7  space-x-2 overflow-x-auto lg:overflow-x-hidden overflow-y-clip whitespace-nowrap py-3"> --> */}
                <ul className="flex flex-row md:flex-col items-center lg:items-start justify-start space-y-4 overflow-x-auto md:overflow-x-hidden overflow-y-clip whitespace-nowrap py-3">
                  <li className="px-8 text-[#016A78]">
                    <Link
                      to="/profile"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                     
                      <User size={24} className="" />
                      <p className="font-Overpass font-semibold text-sm leading-[21px] text-[#016A78]">
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="px-8 text-[#016A78]">
                    <Link
                      to="/billing-address"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                      
                      <MapPin size={24} className="" />
                      <p className="font-Overpass font-semibold text-sm leading-[21px] text-[#016A78]">
                        Billing Address
                      </p>
                    </Link>
                  </li>
                  <li className="px-8 text-[#016A78] activeProfile">
                    <Link
                      to="/payment-options"
                      className="flex items-center gap-1 lg:gap-2.5"
                    >
                     
                      <Cardholder size={24} className="" />
                      <p className="font-Overpass font-semibold text-sm leading-[21px]">
                        Payment Options
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <div>
                <p className="fle gap-10 font-Raleway font-medium text-sm leading-[21px] text-primary/40 mb-4">
                  Account <span>/</span> Payment Options
                </p>
              </div>
              <div className="mb-8 lg:mb-10">
                <p className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[29px] lg:leading-[42px] text-primary mb-1">
                  Payment Options
                </p>
                <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/60">
                  Add or view current payment options
                </p>
              </div>

              <div className="border border-[#EBEBEB] p-3 lg:p-6 rounded-xl mb-8">
                <button
                  type=""
                  className="flex items-center w-max ml-auto space-x-2 pb-6 px-6"
                >
                  <span className="text-success text-xl">
                    <i className="ph-plus text-2xl"></i>
                  </span>
                  <p className="font-Raleway font-bold text-sm leading-[21px] text-success">
                    Add New method
                  </p>
                </button>

                <div className="border border-[#EBEBEB] p-3 lg:p-5 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-1 lg:space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="Home"
                        name="Home"
                        value="Home"
                      />
                      <label
                        for="Home"
                        className="font-Raleway font-semibold text-sm text-[#222329]"
                      >
                        Payment with paypal
                      </label>
                    </div>
                    <div>
                      <button type="">
                        <svg
                          width="36"
                          height="24"
                          viewBox="0 0 36 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="36" height="24" rx="4" fill="white" />
                          <path
                            d="M14.3405 21.3197L14.6905 19.1197H13.9105H10.2305L12.7905 2.85969C12.7973 2.80931 12.8222 2.76312 12.8605 2.72969C12.9007 2.69862 12.9497 2.68112 13.0005 2.67969H19.2105C21.2805 2.67969 22.7005 3.10969 23.4505 3.95969C23.7823 4.31622 24.0135 4.75449 24.1205 5.22969C24.2371 5.80719 24.2371 6.40218 24.1205 6.97969V7.47969L24.4705 7.67969C24.7369 7.81249 24.9774 7.992 25.1805 8.20969C25.4861 8.57868 25.6835 9.02524 25.7505 9.49969C25.8254 10.1199 25.7984 10.7482 25.6705 11.3597C25.5386 12.1025 25.278 12.8165 24.9005 13.4697C24.5954 13.9933 24.183 14.4466 23.6905 14.7997C23.1947 15.1377 22.6428 15.3849 22.0605 15.5297C21.4068 15.6946 20.7346 15.7752 20.0605 15.7697H19.5705C19.227 15.7697 18.8945 15.89 18.6305 16.1097C18.3651 16.3333 18.1908 16.6463 18.1405 16.9897V17.1897L17.5305 21.0697V21.2197C17.5377 21.2459 17.5377 21.2735 17.5305 21.2997H17.4705L14.3405 21.3197Z"
                            fill="#253D80"
                          />
                          <path
                            d="M24.8002 7.08008L24.7402 7.45008C23.9202 11.6501 21.1102 13.1101 17.5302 13.1101H15.7102C15.2724 13.1095 14.8991 13.4276 14.8302 13.8601L13.9002 19.7801L13.6302 21.4601C13.61 21.5946 13.649 21.7313 13.7372 21.8349C13.8254 21.9384 13.9542 21.9987 14.0902 22.0001H17.3302C17.7144 21.9997 18.0411 21.7197 18.1002 21.3401V21.1801L18.7102 17.3101V17.1001C18.7648 16.722 19.0883 16.4411 19.4702 16.4401H20.0002C23.1302 16.4401 25.5902 15.1701 26.3002 11.4401C26.6844 10.1652 26.4474 8.78395 25.6602 7.71008C25.4105 7.45389 25.1198 7.24099 24.8002 7.08008V7.08008Z"
                            fill="#189BD7"
                          />
                          <path
                            d="M23.9384 6.73984L23.5584 6.63984L23.1384 6.55984C22.6089 6.48066 22.0738 6.44387 21.5384 6.44984H16.6584C16.5444 6.44672 16.4313 6.47071 16.3284 6.51984C16.0966 6.6284 15.9349 6.84642 15.8984 7.09984L14.8984 13.6698V13.8598C14.9673 13.4274 15.3405 13.1093 15.7784 13.1098H17.5984C21.1784 13.1098 23.9884 11.6498 24.8084 7.44984L24.8684 7.07984C24.653 6.96854 24.429 6.87489 24.1984 6.79984L23.9384 6.73984Z"
                            fill="#242E65"
                          />
                          <path
                            d="M15.8994 7.1C15.9359 6.84658 16.0975 6.62856 16.3294 6.52C16.4323 6.47086 16.5454 6.44687 16.6594 6.45H21.5394C22.0748 6.44403 22.6098 6.48081 23.1394 6.56L23.5594 6.64L23.9394 6.74L24.1294 6.8C24.3599 6.87505 24.584 6.96869 24.7994 7.08C25.1245 5.83063 24.8265 4.50118 23.9994 3.51C22.9994 2.45 21.3594 2 19.2194 2H12.9994C12.5615 1.99947 12.1883 2.31756 12.1194 2.75L9.5294 19.16C9.50622 19.3148 9.5513 19.472 9.65298 19.5909C9.75465 19.7098 9.90293 19.7788 10.0594 19.78H13.8994L14.8994 13.67L15.8994 7.1Z"
                            fill="#253D80"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      You will be redirected to PayPal website to complete your
                      purchase securely.
                    </p>
                  </div>
                </div>

                <div className="border border-[#EBEBEB] p-3 lg:p-5 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-1 lg:space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="Credit"
                        name="Credit"
                        value="Credit"
                      />
                      <label
                        for="Credit"
                        className="font-Raleway font-semibold text-sm text-[#222329]"
                      >
                        Credit / Debit Card
                      </label>
                    </div>

                    <div>
                      <button type="">
                        <svg
                          width="36"
                          height="24"
                          viewBox="0 0 36 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="12.5703"
                            y="3.26953"
                            width="10.21"
                            height="16.68"
                            fill="#F26122"
                          />
                          <path
                            d="M13.6687 11.6102C13.6518 8.3637 15.1264 5.28922 17.6687 3.27017C13.3189 -0.15054 7.07064 0.346185 3.31599 4.41117C-0.438663 8.47616 -0.438663 14.7442 3.31599 18.8092C7.07064 22.8741 13.3189 23.3709 17.6687 19.9502C15.1264 17.9311 13.6518 14.8566 13.6687 11.6102Z"
                            fill="#EA1D25"
                          />
                          <path
                            d="M34.828 11.6111C34.8254 15.6704 32.5068 19.3725 28.8558 21.1469C25.2049 22.9213 20.8614 22.4571 17.668 19.9511C22.268 16.329 23.0646 9.66537 19.448 5.06107C18.9295 4.39434 18.3318 3.79325 17.668 3.27107C20.8614 0.765064 25.2049 0.300813 28.8558 2.07524C32.5068 3.84967 34.8254 7.55173 34.828 11.6111Z"
                            fill="#F69E1E"
                          />
                        </svg>
                      </button>
                      <button type="">
                        <svg
                          width="36"
                          height="24"
                          viewBox="0 0 36 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="36" height="24" rx="4" fill="white" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.19 14.44C24.1961 12.9153 22.9386 12.2567 21.9627 11.7456C21.3449 11.4221 20.84 11.1577 20.84 10.77C20.84 10.44 21.16 10.09 21.84 10C22.6493 9.91993 23.4651 10.0617 24.2 10.41L24.62 8.41C23.9036 8.14136 23.1451 8.00252 22.38 8C20.02 8 18.38 9.26 18.38 11.06C18.38 12.39 19.57 13.13 20.47 13.57C21.37 14.01 21.72 14.32 21.71 14.72C21.71 15.34 20.97 15.62 20.28 15.63C19.4289 15.641 18.589 15.4344 17.84 15.03L17.41 17.03C18.2575 17.3608 19.1603 17.5271 20.07 17.52C22.58 17.52 24.23 16.28 24.24 14.36L24.19 14.44ZM17.7 8.16L15.7 17.41H13.3L15.3 8.16H17.7ZM27.76 14.16L29.02 10.69L29.75 14.16H27.76ZM32.65 17.44H30.43L30.14 16.06H27.13L26.64 17.44H24.12L27.71 8.87C27.8755 8.46225 28.27 8.19402 28.71 8.19H30.71L32.65 17.44ZM10.45 17.38L14.33 8.13H11.73L9.24 14.42L8.24 9.07C8.15148 8.52635 7.68081 8.12776 7.13 8.13H3.06L3 8.4C3.81634 8.55972 4.60927 8.82179 5.36 9.18C5.67976 9.33034 5.89644 9.63826 5.93 9.99L7.84 17.38H10.45Z"
                            fill="#2A2A6C"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      We support Mastercard, Visa, Amex & American express
                    </p>
                  </div>
                  <button type="" className="flex items-center p-4 space-x-2">
                    <span className="text-success text-xl">
                      <i className="ph-plus text-2xl"></i>
                    </span>
                    <p className="font-Raleway font-bold text-sm leading-[21px] text-success">
                      Add Card
                    </p>
                  </button>
                </div>

                <div className="border border-[#EBEBEB] p-3 lg:p-5 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-1 lg:space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="Home"
                        name="Home"
                        value="Home"
                      />
                      <label
                        for="Home"
                        className="font-Raleway font-semibold text-sm text-[#222329]"
                      >
                        Cash on delivery
                      </label>
                    </div>
                    <div>
                      <button type="">
                        <svg
                          width="36"
                          height="24"
                          viewBox="0 0 36 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="36" height="24" rx="4" fill="white" />
                          <path
                            d="M14.3405 21.3197L14.6905 19.1197H13.9105H10.2305L12.7905 2.85969C12.7973 2.80931 12.8222 2.76312 12.8605 2.72969C12.9007 2.69862 12.9497 2.68112 13.0005 2.67969H19.2105C21.2805 2.67969 22.7005 3.10969 23.4505 3.95969C23.7823 4.31622 24.0135 4.75449 24.1205 5.22969C24.2371 5.80719 24.2371 6.40218 24.1205 6.97969V7.47969L24.4705 7.67969C24.7369 7.81249 24.9774 7.992 25.1805 8.20969C25.4861 8.57868 25.6835 9.02524 25.7505 9.49969C25.8254 10.1199 25.7984 10.7482 25.6705 11.3597C25.5386 12.1025 25.278 12.8165 24.9005 13.4697C24.5954 13.9933 24.183 14.4466 23.6905 14.7997C23.1947 15.1377 22.6428 15.3849 22.0605 15.5297C21.4068 15.6946 20.7346 15.7752 20.0605 15.7697H19.5705C19.227 15.7697 18.8945 15.89 18.6305 16.1097C18.3651 16.3333 18.1908 16.6463 18.1405 16.9897V17.1897L17.5305 21.0697V21.2197C17.5377 21.2459 17.5377 21.2735 17.5305 21.2997H17.4705L14.3405 21.3197Z"
                            fill="#253D80"
                          />
                          <path
                            d="M24.8002 7.08008L24.7402 7.45008C23.9202 11.6501 21.1102 13.1101 17.5302 13.1101H15.7102C15.2724 13.1095 14.8991 13.4276 14.8302 13.8601L13.9002 19.7801L13.6302 21.4601C13.61 21.5946 13.649 21.7313 13.7372 21.8349C13.8254 21.9384 13.9542 21.9987 14.0902 22.0001H17.3302C17.7144 21.9997 18.0411 21.7197 18.1002 21.3401V21.1801L18.7102 17.3101V17.1001C18.7648 16.722 19.0883 16.4411 19.4702 16.4401H20.0002C23.1302 16.4401 25.5902 15.1701 26.3002 11.4401C26.6844 10.1652 26.4474 8.78395 25.6602 7.71008C25.4105 7.45389 25.1198 7.24099 24.8002 7.08008V7.08008Z"
                            fill="#189BD7"
                          />
                          <path
                            d="M23.9384 6.73984L23.5584 6.63984L23.1384 6.55984C22.6089 6.48066 22.0738 6.44387 21.5384 6.44984H16.6584C16.5444 6.44672 16.4313 6.47071 16.3284 6.51984C16.0966 6.6284 15.9349 6.84642 15.8984 7.09984L14.8984 13.6698V13.8598C14.9673 13.4274 15.3405 13.1093 15.7784 13.1098H17.5984C21.1784 13.1098 23.9884 11.6498 24.8084 7.44984L24.8684 7.07984C24.653 6.96854 24.429 6.87489 24.1984 6.79984L23.9384 6.73984Z"
                            fill="#242E65"
                          />
                          <path
                            d="M15.8994 7.1C15.9359 6.84658 16.0975 6.62856 16.3294 6.52C16.4323 6.47086 16.5454 6.44687 16.6594 6.45H21.5394C22.0748 6.44403 22.6098 6.48081 23.1394 6.56L23.5594 6.64L23.9394 6.74L24.1294 6.8C24.3599 6.87505 24.584 6.96869 24.7994 7.08C25.1245 5.83063 24.8265 4.50118 23.9994 3.51C22.9994 2.45 21.3594 2 19.2194 2H12.9994C12.5615 1.99947 12.1883 2.31756 12.1194 2.75L9.5294 19.16C9.50622 19.3148 9.5513 19.472 9.65298 19.5909C9.75465 19.7098 9.90293 19.7788 10.0594 19.78H13.8994L14.8994 13.67L15.8994 7.1Z"
                            fill="#253D80"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      After delivery confirmation you can pay the amount
                    </p>
                  </div>
                </div>

                <div className="w-max ml-auto pt-4">
                  <button
                    type=""
                    className="border border-[#016A78] font-Raleway font-semibold text-sm leading-[21px] text-[#016A78] w-[94px] h-[36px] rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    type=""
                    className="bg-[#016A78] font-Overpass font-semibold text-sm leading-[21px] text-white w-[94px] h-[36px] rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
