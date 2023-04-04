import { CaretLeft } from "@phosphor-icons/react";

import BillingSidebar from "./BillingSidebar";

const PaymentStep = ({ currentStep, handlePrev, handleSubmit }) => {
  if (currentStep !== 3) {
    return null;
  }

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          <div className="col-span-12 lg:col-span-8">
            <div className="border border-[#EBEBEB] p-3 lg:p-6 rounded-xl mb-8">
              <p className="font-Playfair font-bold text-base lg:text-2xl leading-[19px] lg:leading-[34px] text-primary mb-4">
                03. Payment
              </p>

              <div className="border border-[#EBEBEB] py-6 px-2 lg:px-14 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-3">
                <div className="flex flex-col lg:flex-row justify-between gap-3 py-4">
                  <div className="flex items-center space-x-1 lg:space-x-3">
                    <input
                      className="accent-success"
                      type="radio"
                      id="Debit"
                      name="Debit"
                      value="Debit"
                    />
                    <label
                      for="Debit"
                      className="font-Raleway font-bold text-sm leading-[21px] text-[#222329]"
                    >
                      Debit / Credit Card
                    </label>
                  </div>
                  <div className="flex items-center lg:space-x-2">
                    <svg
                      width="36"
                      height="24"
                      viewBox="0 0 36 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="12.5703"
                        y="3.27051"
                        width="10.21"
                        height="16.68"
                        fill="#F26122"
                      />
                      <path
                        d="M13.6687 11.6102C13.6518 8.3637 15.1264 5.28922 17.6687 3.27017C13.3189 -0.15054 7.07064 0.346185 3.31599 4.41117C-0.438663 8.47616 -0.438663 14.7442 3.31599 18.8092C7.07064 22.8741 13.3189 23.3709 17.6687 19.9502C15.1264 17.9311 13.6518 14.8566 13.6687 11.6102Z"
                        fill="#EA1D25"
                      />
                      <path
                        d="M34.828 11.6101C34.8254 15.6694 32.5068 19.3715 28.8558 21.1459C25.2049 22.9203 20.8614 22.4561 17.668 19.9501C22.268 16.328 23.0646 9.66439 19.448 5.06009C18.9295 4.39336 18.3318 3.79227 17.668 3.27009C20.8614 0.764088 25.2049 0.299837 28.8558 2.07427C32.5068 3.8487 34.8254 7.55075 34.828 11.6101Z"
                        fill="#F69E1E"
                      />
                    </svg>

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
                  </div>
                </div>

                <div className="mb-4 lg:mb-6">
                  <p className="font-Raleway font-medium text-xs leading-[18px] text-primary/60 mb-1">
                    Name on Card
                    <span className="text-[#FF0000] text-xs pl-1">
                      <i className="ph-asterisk-simple-bold"></i>
                    </span>
                  </p>
                  <input
                    className="border border-[#D0D1D3] rounded-[5px] outline-none w-full h-10 font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary placeholder:text-primary px-3 lg:px-4"
                    placeholder="Izak Newton"
                    type="text"
                    name=""
                  
                  />
                </div>
                <div className="mb-4 lg:mb-6">
                  <p className="font-Raleway font-medium text-xs leading-[18px] text-primary/60 mb-1">
                    Enter Card Number
                    <span className="text-[#FF0000] text-xs pl-1">
                      <i className="ph-asterisk-simple-bold"></i>
                    </span>
                  </p>
                  <input
                    className="border border-[#D0D1D3] rounded-[5px] outline-none w-full h-10 font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary placeholder:text-primary px-3 lg:px-4"
                    placeholder="433 566 3778 98882"
                    type="number"
                    name=""
                   
                  />
                </div>

                <div className="flex space-x-3">
                  <div>
                    <p className="font-Raleway font-medium text-xs leading-[18px] text-primary/60 mb-1">
                      valid Date
                      <span className="text-[#FF0000] text-xs pl-1">
                        <i className="ph-asterisk-simple-bold"></i>
                      </span>
                    </p>
                    <input
                      className="border border-[#D0D1D3] py-2.5 px-2 rounded-[5px]"
                      type="date"
                      id="birthday"
                      name="birthday"
                    />
                  </div>

                  <div>
                    <p className="font-Raleway font-medium text-xs leading-[18px] text-primary/60 mb-1">
                      CVV
                      <span className="text-[#FF0000] text-xs pl-1">
                        <i className="ph-asterisk-simple-bold"></i>
                      </span>
                    </p>
                    <input
                      className="border border-[#D0D1D3] outline-none w-[115px] h-10 py-2 px-4 font-Raleway text-base leading-6 text-primary/40 rounded-[5px]"
                      type="text"
                      placeholder="Enter Code"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-[#EBEBEB] py-4 px-3 lg:px-[60px] rounded-lg mb-3">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      className="accent-success"
                      type="radio"
                      id="Net"
                      name="Net"
                      value="Net"
                    />
                    <label
                      for="Net"
                      className="font-Raleway font-bold text-sm leading-[21px] text-[#222329]"
                    >
                      Net banking
                    </label>
                  </div>
                  <div>
                    <span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="31"
                          height="31"
                          rx="7.5"
                          stroke="#004738"
                        />
                        <path
                          d="M16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5Z"
                          stroke="#004738"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22.735 19.3128L18.4928 16.7035C18.4198 16.6565 18.3369 16.6271 18.2506 16.6175L16.4615 16.3753C16.328 16.3562 16.192 16.3818 16.0746 16.4483C15.9573 16.5147 15.8653 16.6182 15.8131 16.7425L14.7428 19.141C14.6925 19.2525 14.676 19.3764 14.6954 19.4972C14.7149 19.618 14.7694 19.7305 14.8521 19.8206L16.3209 21.4066C16.3873 21.4795 16.4359 21.5669 16.463 21.6617C16.4901 21.7566 16.495 21.8564 16.4771 21.9535L16.1725 23.5003"
                          stroke="#004738"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.0793 10.3438L10.3762 12C10.3149 12.147 10.3121 12.3119 10.3684 12.4609L11.2668 14.8516C11.3019 14.9512 11.362 15.0402 11.4414 15.1099C11.5207 15.1797 11.6166 15.2279 11.7199 15.25L13.3918 15.6094C13.4846 15.6281 13.5717 15.6683 13.6463 15.7266C13.7209 15.7849 13.7809 15.8598 13.8215 15.9453L14.1184 16.5625C14.1711 16.6669 14.2514 16.7548 14.3506 16.8168C14.4497 16.8787 14.5639 16.9124 14.6809 16.9141H15.7355"
                          stroke="#004738"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.9141 8.74219L18.6406 10.0547C18.7077 10.1781 18.7318 10.3203 18.7092 10.4589C18.6866 10.5975 18.6185 10.7247 18.5156 10.8203L16.4141 12.7188C16.3789 12.7523 16.3395 12.7812 16.2969 12.8047L15.3359 13.3359C15.2443 13.3845 15.1427 13.4113 15.0391 13.4141H13.3672C13.244 13.4147 13.1237 13.4512 13.021 13.5192C12.9183 13.5872 12.8377 13.6837 12.7891 13.7969L12.1406 15.3359"
                          stroke="#004738"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-[#EBEBEB] py-4 px-3 lg:px-[60px] rounded-lg mb-3">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      className="accent-success"
                      type="radio"
                      id="Google"
                      name="Google"
                      value="Google"
                    />
                    <label
                      for="Google"
                      className="font-Raleway font-bold text-sm leading-[21px] text-[#222329]"
                    >
                      Google / apple Wallet
                    </label>
                  </div>
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="7.5"
                        stroke="#004738"
                      />
                      <path
                        d="M9.125 11V21C9.125 21.3315 9.2567 21.6495 9.49112 21.8839C9.72554 22.1183 10.0435 22.25 10.375 22.25H22.875C23.0408 22.25 23.1997 22.1842 23.3169 22.0669C23.4342 21.9497 23.5 21.7908 23.5 21.625V12.875C23.5 12.7092 23.4342 12.5503 23.3169 12.4331C23.1997 12.3158 23.0408 12.25 22.875 12.25H10.375C10.0435 12.25 9.72554 12.1183 9.49112 11.8839C9.2567 11.6495 9.125 11.3315 9.125 11ZM9.125 11C9.125 10.6685 9.2567 10.3505 9.49112 10.1161C9.72554 9.8817 10.0435 9.75 10.375 9.75H21"
                        stroke="#004738"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.0625 18.1875C20.5803 18.1875 21 17.7678 21 17.25C21 16.7322 20.5803 16.3125 20.0625 16.3125C19.5447 16.3125 19.125 16.7322 19.125 17.25C19.125 17.7678 19.5447 18.1875 20.0625 18.1875Z"
                        fill="#004738"
                      />
                    </svg>
                  </div>
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
                  Add More
                </p>
              </button>
            </div>

            <div>
              <button
                onClick={handlePrev}
                className="prev button flex items-center justify-center space-x-[6px] lg:space-x-2.5 border border-[#EBEBEB] rounded-xl w-[146px] h-11 lg:h-12 mb-16"
              >
                <CaretLeft size={18} />
                <p className="font-Raleway font-bold text-base leading-6 text-primary">
                  Checkout
                </p>
              </button>
            </div>
          </div>

          <BillingSidebar handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default PaymentStep;
