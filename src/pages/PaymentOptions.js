import { Cardholder, MapPin, Plus, User } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/image/profile/user.webp";
import UserMenuBar from "../components/userProfile/UserMenuBar";

const PaymentOptions = () => {
  const [newPayment, setNewPayment] = useState(true);
  return (
    <section id="payment">
      <div className="container">
        <div className="py-4 lg:py-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <UserMenuBar />
            </div>

           

            <div className="col-span-12 md:col-span-7">
              <div>
                <p className="fle gap-10 font-Raleway font-medium text-sm leading-[21px] text-primary/40 mb-4">
                  Account <span> /</span> Payment Options
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
              {newPayment ? (
                <div className="payment-option border border-[#EBEBEB] p-3 lg:p-6 rounded-xl mb-8">
                <button
                 onClick={() => setNewPayment(false)}
                  type=""
                  className="add-payment flex items-center w-max ml-auto space-x-2 pb-6 px-6"
                >
                  <span className="text-success text-xl">
                    <Plus size={20} />
                  </span>
                  <p className=" font-Raleway font-bold text-sm leading-[21px] text-success">
                    Add New method
                  </p>
                </button>

                <div className="border border-[#919EAB3D]/34 pt-4 pb-12 px-4 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex justify-between gap-2">
                    <div>
                      <div className="flex space-x-4 mb-2">
                        <button>
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
                        <p className="font-Overpass font-semibold text-sm text-[#1A7885] bg-[#EBF0F1] p-1 md:p-2 rounded-full">
                          Default
                        </p>
                      </div>
                      <p className="font-Overpass font-semibold text-sm text-[#222329]">
                        **** **** **** 5678
                      </p>
                    </div>

                    <div className="relative">
                      <button className="inline-block text-[#637381]">
                        <svg
                          className="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-[#919EAB3D]/34 pt-4 pb-12 px-4 rounded-lg bg-white/25 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)]">
                  <div className="flex justify-between gap-2 mb-2">
                    <div>
                      <button>
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
                      <p className="font-Overpass font-semibold text-sm text-[#222329]">
                        **** **** **** 5678
                      </p>
                    </div>

                    <div className="relative">
                      <button
                        type="button"
                        className="action-btn inline-block text-[#637381]"
                      >
                        <svg
                          className="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>

                      <div className="action hidden bg-white shadow-[0_2px_23px_-12px_rgba(0,0,0,0.07)] rounded px-5 py-4 absolute right-full space-y-4 top-[70%] -translate-y-1/2">
                        <div className="flex space-x-2 md:space-x-4">
                          <button>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.5574 4.35768C16.2157 4.22435 14.8741 4.12435 13.5241 4.04935V4.04102L13.3407 2.95768C13.2157 2.19102 13.0324 1.04102 11.0824 1.04102H8.89907C6.95741 1.04102 6.77407 2.14102 6.64074 2.94935L6.46574 4.01602C5.69074 4.06602 4.91574 4.11602 4.14074 4.19102L2.44074 4.35768C2.09074 4.39102 1.84074 4.69935 1.87407 5.04102C1.90741 5.38268 2.20741 5.63268 2.55741 5.59935L4.25741 5.43268C8.62407 4.99935 13.0241 5.16602 17.4407 5.60768H17.5074C17.8241 5.60768 18.0991 5.36602 18.1324 5.04102C18.145 4.87455 18.0918 4.70979 17.9843 4.58205C17.8768 4.45432 17.7236 4.37377 17.5574 4.35768Z"
                                fill="#004738"
                              />
                              <path
                                opacity="0.399"
                                d="M16.0264 6.78398C15.8264 6.57565 15.5514 6.45898 15.2681 6.45898H4.73475C4.45142 6.45898 4.16809 6.57565 3.97642 6.78398C3.78475 6.99232 3.67642 7.27565 3.69309 7.56732L4.20975 16.1173C4.30142 17.384 4.41809 18.9673 7.32642 18.9673H12.6764C15.5848 18.9673 15.7014 17.3923 15.7931 16.1173L16.3098 7.57565C16.3264 7.27565 16.2181 6.99232 16.0264 6.78398Z"
                                fill="#004738"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.98464 14.1673C7.98464 14.0016 8.05048 13.8426 8.16769 13.7254C8.2849 13.6082 8.44388 13.5423 8.60964 13.5423H11.3846C11.5504 13.5423 11.7094 13.6082 11.8266 13.7254C11.9438 13.8426 12.0096 14.0016 12.0096 14.1673C12.0096 14.3331 11.9438 14.492 11.8266 14.6093C11.7094 14.7265 11.5504 14.7923 11.3846 14.7923H8.60964C8.44388 14.7923 8.2849 14.7265 8.16769 14.6093C8.05048 14.492 7.98464 14.3331 7.98464 14.1673ZM7.29297 10.834C7.29297 10.6682 7.35882 10.5093 7.47603 10.392C7.59324 10.2748 7.75221 10.209 7.91797 10.209H12.0846C12.2504 10.209 12.4094 10.2748 12.5266 10.392C12.6438 10.5093 12.7096 10.6682 12.7096 10.834C12.7096 10.9997 12.6438 11.1587 12.5266 11.2759C12.4094 11.3931 12.2504 11.459 12.0846 11.459H7.91797C7.75221 11.459 7.59324 11.3931 7.47603 11.2759C7.35882 11.1587 7.29297 10.9997 7.29297 10.834Z"
                                fill="#004738"
                              />
                            </svg>
                          </button>
                          <p className="font-Raleway font-semibold text-sm text-primary/60">
                            Delete
                          </p>
                        </div>
                        <div className="flex space-x-2 md:space-x-4">
                          <button>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M17.5 18.3337H2.5C2.15833 18.3337 1.875 18.0503 1.875 17.7087C1.875 17.367 2.15833 17.0837 2.5 17.0837H17.5C17.8417 17.0837 18.125 17.367 18.125 17.7087C18.125 18.0503 17.8417 18.3337 17.5 18.3337ZM15.85 2.902C14.2333 1.28534 12.65 1.24367 10.9917 2.902L9.98333 3.91034C9.9 3.99367 9.86667 4.127 9.9 4.24367C10.2187 5.33732 10.8081 6.33294 11.6136 7.13843C12.4191 7.94393 13.4147 8.53329 14.5083 8.852C14.5674 8.87134 14.6307 8.87379 14.6911 8.85906C14.7514 8.84434 14.8065 8.81303 14.85 8.76867L15.85 7.76034C16.675 6.94367 17.075 6.152 17.075 5.352C17.0833 4.527 16.6833 3.727 15.85 2.902Z"
                                fill="#004738"
                              />
                              <path
                                d="M13.007 9.60768C12.7653 9.49101 12.532 9.37435 12.307 9.24102C12.1242 9.13214 11.9463 9.01536 11.7736 8.89102C11.632 8.79935 11.4653 8.66602 11.307 8.53268C11.256 8.4955 11.2085 8.45366 11.1653 8.40768C10.8903 8.17435 10.582 7.87435 10.307 7.54102C10.282 7.52435 10.2403 7.46602 10.182 7.39102C10.0986 7.29102 9.95697 7.12435 9.83197 6.93268C9.71318 6.77595 9.60462 6.61172 9.50697 6.44102C9.37364 6.21602 9.25697 5.99102 9.1403 5.75768C9.02364 5.50768 8.93197 5.26602 8.84864 5.04102L3.6153 10.2743C3.50697 10.3827 3.40697 10.591 3.38197 10.7327L2.93197 13.9243C2.84864 14.491 3.00697 15.0243 3.35697 15.3827C3.65697 15.6743 4.07364 15.8327 4.52364 15.8327C4.62364 15.8327 4.72364 15.8243 4.82364 15.8077L8.02364 15.3577C8.17364 15.3327 8.38197 15.2327 8.48197 15.1243L13.7153 9.89102C13.482 9.80768 13.257 9.71602 13.007 9.60768Z"
                                fill="#004738"
                              />
                            </svg>
                          </button>
                          <p className="font-Raleway cursor-pointer font-semibold text-sm text-primary/60">
                            Edit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ) :(
                <div className="save-payment border border-[#EBEBEB] p-3 lg:p-6 rounded-xl mb-8">
                <div className="border border-[#EBEBEB] p-3 lg:p-5 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center space-x-1 lg:space-x-2">
                      <input
                        className="accent-success"
                        type="radio"
                        id="paypal"
                        name="paypal"
                        value="paypal"
                      />
                      <label
                        for="paypal"
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
                      <Plus size={20} />
                    </span>
                    <p className="font-Raleway font-bold text-sm leading-[21px] text-success">
                      Add Card
                    </p>
                  </button>
                </div>

                <div className="border border-[#EBEBEB] p-3 lg:p-5 rounded-lg shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.06)] mb-4">
                  <div className="flex items-center space-x-1 lg:space-x-2 mb-4">
                    <input
                      className="accent-success"
                      type="radio"
                      id="delivery"
                      name="delivery"
                      value="delivery"
                    />
                    <label
                      for="delivery"
                      className="font-Raleway font-semibold text-sm text-[#222329]"
                    >
                      Cash on delivery
                    </label>
                  </div>

                  <div>
                    <p className="font-Raleway font-medium text-base leading-6 text-primary/60">
                      After delivery confirmation you can pay the amount
                    </p>
                  </div>
                </div>

                <div className="w-max ml-auto pt-4">
                  <button
                   onClick={() => setNewPayment(true)}
                    type=""
                    className="save-pay border border-[#016A78] font-Raleway font-semibold text-sm leading-[21px] text-[#016A78] w-[94px] h-[36px] rounded-lg mr-2"
                  >
                    Cancel
                  </button>
                  <button
                   onClick={() => setNewPayment(true)}
                    type=""
                    className="save-pay bg-[#016A78] font-Overpass font-semibold text-sm leading-[21px] text-white w-[94px] h-[36px] rounded-lg"
                  >
                    Save
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

export default PaymentOptions;
