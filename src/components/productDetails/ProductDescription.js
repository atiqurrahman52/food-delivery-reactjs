import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { productDescriptionData } from "../../data/productDetails/ProductDescriptionData";
import { CaretRight } from "@phosphor-icons/react";

const ProductDescription = ({singleProduct}) => {
  const {img,productName} =singleProduct;

  return (
 
      <div className="bg-[#F9F6F1]">
        <div className="container">
          <div className="py-4 lg:py-6">
            <div id="breadcrumb" className="flex items-center space-x-2 mb-5">
              <p className="font-Raleway text-sm leading-[21px] text-primary">
                Shop
              </p>
              <i className="ph-caret-right-bold text-xl text-primary"></i>
              <CaretRight size={20} />
              <p className="font-Raleway font-semibold text-sm leading-[21px] text-primary">
                Baby Potato
              </p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7 bg-[#FFF7E3]">
                <div className="relative">
                  <Swiper
                    slidesPerView="auto"
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      // 768: {
                      //   slidesPerView: 2,
                      // },
                      // 1024: {
                      //   slidesPerView: 3,
                      // },
                    }}
                    grabCursor={true}
                    spaceBetween={24}
                    centeredSlides={false}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    freeMode={true}
                    Pagination={true}
                    allowTouchMove={true}
                    loopFillGroupWithBlank={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="!px-2 !py-10"
                    pagination={{
                      dynamicBullets: true,
                    }}
                    navigation={{
                      prevEl: ".coursePrev-btn",
                      nextEl: ".courseNext-btn",
                    }}
                  >
                    {productDescriptionData.map(({ id, img}) => (
                    <SwiperSlide>
                      <div 
                      key={id}
                      className="flex justify-center items-center">
                        <img
                          src={img}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                     ))} 
                  </Swiper>

                  <div className="swiper-pagination"></div>
                </div>

             
              </div>

              <div className="col-span-12 lg:col-span-5">
                <h3 className="font-Playfair font-bold text-2xl leading-[34px] text-black mb-2">
                  {/* Baby Potato */}
                  {productName}
                </h3>
                <p className="font-Raleway font-extrabold text-xl leading-[30px] text-success mb-2">
                  $55
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex gap-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.25672 1.01869C7.53172 0.327102 8.46832 0.327103 8.74332 1.01869L10.3663 5.10057C10.4823 5.39213 10.7445 5.59134 11.0454 5.61657L15.2582 5.96986C15.9719 6.02972 16.2614 6.96147 15.7175 7.44875L12.5079 10.3247C12.2786 10.5302 12.1784 10.8526 12.2485 11.1597L13.2291 15.4599C13.3952 16.1885 12.6375 16.7644 12.0264 16.374L8.41965 14.0695C8.16202 13.9049 7.83802 13.9049 7.5804 14.0695L3.9736 16.374C3.3625 16.7644 2.60477 16.1885 2.77091 15.4599L3.75155 11.1597C3.82159 10.8526 3.72147 10.5302 3.49221 10.3247L0.28245 7.44875C-0.261375 6.96147 0.0280544 6.02972 0.741835 5.96986L4.9547 5.61657C5.25561 5.59134 5.51774 5.39213 5.63367 5.10057L7.25672 1.01869Z"
                        fill="#FEBB41"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.25672 1.01869C7.53172 0.327102 8.46832 0.327103 8.74332 1.01869L10.3663 5.10057C10.4823 5.39213 10.7445 5.59134 11.0454 5.61657L15.2582 5.96986C15.9719 6.02972 16.2614 6.96147 15.7175 7.44875L12.5079 10.3247C12.2786 10.5302 12.1784 10.8526 12.2485 11.1597L13.2291 15.4599C13.3952 16.1885 12.6375 16.7644 12.0264 16.374L8.41965 14.0695C8.16202 13.9049 7.83802 13.9049 7.5804 14.0695L3.9736 16.374C3.3625 16.7644 2.60477 16.1885 2.77091 15.4599L3.75155 11.1597C3.82159 10.8526 3.72147 10.5302 3.49221 10.3247L0.28245 7.44875C-0.261375 6.96147 0.0280544 6.02972 0.741835 5.96986L4.9547 5.61657C5.25561 5.59134 5.51774 5.39213 5.63367 5.10057L7.25672 1.01869Z"
                        fill="#FEBB41"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.25672 1.01869C7.53172 0.327102 8.46832 0.327103 8.74332 1.01869L10.3663 5.10057C10.4823 5.39213 10.7445 5.59134 11.0454 5.61657L15.2582 5.96986C15.9719 6.02972 16.2614 6.96147 15.7175 7.44875L12.5079 10.3247C12.2786 10.5302 12.1784 10.8526 12.2485 11.1597L13.2291 15.4599C13.3952 16.1885 12.6375 16.7644 12.0264 16.374L8.41965 14.0695C8.16202 13.9049 7.83802 13.9049 7.5804 14.0695L3.9736 16.374C3.3625 16.7644 2.60477 16.1885 2.77091 15.4599L3.75155 11.1597C3.82159 10.8526 3.72147 10.5302 3.49221 10.3247L0.28245 7.44875C-0.261375 6.96147 0.0280544 6.02972 0.741835 5.96986L4.9547 5.61657C5.25561 5.59134 5.51774 5.39213 5.63367 5.10057L7.25672 1.01869Z"
                        fill="#FEBB41"
                      />
                    </svg>

                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9144 6.45371L15.9782 6.66423C16.0307 6.82313 15.9865 6.99972 15.8665 7.11054L11.9892 10.6052L13.138 15.8431C13.1769 16.0105 13.1172 16.1862 12.9864 16.2894L12.8109 16.4157C12.7427 16.4721 12.6582 16.5018 12.5716 16.4999C12.4985 16.5015 12.4266 16.481 12.3642 16.441L8.00016 13.6368L3.66011 16.441C3.59771 16.481 3.52573 16.5015 3.45267 16.4999C3.36607 16.5018 3.28151 16.4721 3.21334 16.4157L3.01388 16.2894C2.88308 16.1862 2.8234 16.0105 2.8623 15.8431L4.01114 10.6052L0.14179 7.11896C0.0156062 7.0088 -0.0321581 6.8273 0.0221197 6.66423L0.109878 6.45371C0.15654 6.28733 0.296829 6.16954 0.460912 6.15897L5.55888 5.72951L7.5135 0.769564C7.57613 0.604846 7.72831 0.497764 7.89645 0.500094H8.10385C8.27049 0.496361 8.42105 0.604554 8.47881 0.769564L10.4654 5.72951L15.5634 6.15897C15.7275 6.16954 15.8677 6.28733 15.9144 6.45371ZM11.2871 14.0242L10.3936 10.0831L13.3215 7.44738L9.48409 7.12738L8.00016 3.37164V11.9105L11.2871 14.0242Z"
                        fill="#FEBB41"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1741 9.9524L12.1742 9.95236L15.3839 7.07637C15.4925 6.97903 15.5249 6.83563 15.482 6.69734C15.4393 6.56003 15.3403 6.4785 15.2164 6.46811L11.0036 6.11482C10.5045 6.07297 10.0844 5.74439 9.90176 5.28541L9.90172 5.28531L8.2787 1.20344C8.17084 0.932186 7.82919 0.932189 7.72134 1.20344L6.09829 5.28531C5.91575 5.74439 5.49556 6.07297 4.99648 6.11482L0.783619 6.46811C0.659705 6.4785 0.560687 6.56003 0.518034 6.69734C0.47508 6.83563 0.507481 6.97903 0.616112 7.07637C0.616113 7.07637 0.616114 7.07637 0.616115 7.07637L3.82587 9.95236L3.82591 9.95239C4.19434 10.2826 4.3483 10.7917 4.23903 11.2708C4.23903 11.2708 4.23903 11.2708 4.23903 11.2708L3.2584 15.5711C3.22163 15.7323 3.28474 15.8635 3.38334 15.9385C3.47937 16.0114 3.59366 16.0234 3.70442 15.9526L7.31118 13.6482C7.31119 13.6482 7.31119 13.6482 7.3112 13.6481C7.73297 13.3787 8.26708 13.3787 8.68885 13.6481L12.1741 9.9524ZM12.1741 9.9524C11.8058 10.2825 11.6517 10.7916 11.761 11.2708C11.761 11.2708 11.761 11.2708 11.761 11.2708L12.7416 15.5711C12.7784 15.7323 12.7153 15.8635 12.6167 15.9385C12.5207 16.0114 12.4064 16.0234 12.2956 15.9526C12.2956 15.9526 12.2956 15.9526 12.2956 15.9526L8.68886 13.6482L12.1741 9.9524Z"
                        stroke="#FEBB41"
                      />
                    </svg>
                  </div>

                  <p className="font-Raleway font-semibold text-sm leading-[21px] text-primary">
                    (3.5 stars) • 10 reviews
                  </p>
                </div>
                <p className="font-Raleway font-medium text-sm leading-[21px] text-primary opacity-60 mb-8 lg:mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="space-x-3 mb-10 lg:mb-20">
                  <label
                    for="quantity"
                    className="font-Raleway font-semibold text-base leading-6 text-primary/60"
                  >
                    Quantity :
                  </label>
                  <input
                    className="border border-success rounded text-center"
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="50"
                    value="2"
                  />
                  <span className="font-Raleway font-semibold text-sm leading-[21px] text-primary">
                    kg
                  </span>
                </div>

                <div className="product-card">
                  <button
                    type=""
                    className="font-Raleway font-medium text-sm lg:text-base leading-[21pxpx] lg:leading-6 py-2 text-success md:py-3 w-full md:w-[308px] h-[48px] border border-success rounded-[5px] z-[1] relative overflow-hidden add-to-cart-btn"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="py-6 lg:py-8 border-b border-[#DBD8D4]">
              <h3 className="font-Playfair font-bold text-2xl leading-[34px] text-primary mb-6">
                Details
              </h3>
              <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </p>
            </div>

            <div className="flex w-max ml-auto space-x-3 lg:space-x-3 pt-4 lg:pt-6">
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#2058CD" />
                  <path
                    d="M20.5 10H17.5C16.9477 10 16.5 10.4477 16.5 11V14H20.5C20.6137 13.9975 20.7216 14.0504 20.7892 14.1419C20.8568 14.2334 20.8758 14.352 20.84 14.46L20.1 16.66C20.0318 16.8619 19.8431 16.9984 19.63 17H16.5V24.5C16.5 24.7761 16.2761 25 16 25H13.5C13.2239 25 13 24.7761 13 24.5V17H11.5C11.2239 17 11 16.7761 11 16.5V14.5C11 14.2239 11.2239 14 11.5 14H13V11C13 8.79086 14.7909 7 17 7H20.5C20.7761 7 21 7.22386 21 7.5V9.5C21 9.77614 20.7761 10 20.5 10Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#1DA1F2" />
                  <path
                    d="M24.9727 10.7174C24.5083 11.3369 23.9469 11.8773 23.3102 12.3178C23.3102 12.4796 23.3102 12.6414 23.3102 12.8123C23.3153 15.7511 22.1414 18.5691 20.0517 20.6345C17.9619 22.6999 15.1311 23.8399 12.1939 23.7989C10.4959 23.8046 8.81955 23.4169 7.2963 22.6661C7.21416 22.6302 7.16119 22.549 7.1615 22.4593V22.3604C7.1615 22.2313 7.26611 22.1267 7.39515 22.1267C9.0643 22.0716 10.6739 21.4929 11.9962 20.4724C10.4854 20.4419 9.12607 19.5469 8.50048 18.1707C8.46889 18.0956 8.47872 18.0093 8.52645 17.9432C8.57417 17.8771 8.65288 17.8407 8.73413 17.8471C9.1933 17.8932 9.65706 17.8505 10.1001 17.7212C8.43227 17.375 7.17909 15.9904 6.99974 14.2957C6.99337 14.2144 7.0298 14.1357 7.09588 14.0879C7.16195 14.0402 7.24812 14.0303 7.32326 14.062C7.77082 14.2595 8.25397 14.3635 8.74312 14.3676C7.28172 13.4085 6.65049 11.5841 7.20643 9.92622C7.26382 9.76513 7.40169 9.64612 7.56938 9.61294C7.73706 9.57975 7.90984 9.63728 8.0242 9.76439C9.99627 11.8633 12.7059 13.114 15.5818 13.2528C15.5082 12.9589 15.472 12.6568 15.474 12.3537C15.5009 10.7647 16.4841 9.34921 17.9633 8.76987C19.4424 8.19054 21.1248 8.56203 22.2229 9.71044C22.9713 9.56785 23.6949 9.31645 24.3706 8.96421C24.4201 8.93331 24.4829 8.93331 24.5324 8.96421C24.5633 9.01373 24.5633 9.07652 24.5324 9.12604C24.2051 9.87552 23.6522 10.5041 22.9508 10.9242C23.565 10.853 24.1684 10.7081 24.7481 10.4926C24.7969 10.4594 24.861 10.4594 24.9098 10.4926C24.9507 10.5113 24.9813 10.5471 24.9934 10.5904C25.0055 10.6337 24.9979 10.6802 24.9727 10.7174Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#25D366" />
                  <path
                    d="M8.25602 20.5933C7.13935 18.7093 6.74875 16.4825 7.15755 14.331C7.56636 12.1794 8.74645 10.251 10.4763 8.90789C12.2061 7.56474 14.3667 6.89919 16.5525 7.03617C18.7383 7.17315 20.7989 8.10325 22.3475 9.65186C23.8961 11.2005 24.8262 13.2611 24.9632 15.4469C25.1002 17.6326 24.4346 19.7932 23.0915 21.5231C21.7483 23.2529 19.8199 24.433 17.6684 24.8418C15.5168 25.2506 13.29 24.86 11.406 23.7433V23.7433L8.29352 24.6246C8.16599 24.6619 8.03079 24.6642 7.90207 24.6313C7.77335 24.5983 7.65586 24.5314 7.56191 24.4374C7.46796 24.3435 7.40101 24.226 7.36809 24.0973C7.33516 23.9686 7.33747 23.8334 7.37477 23.7058L8.25602 20.5933Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.2594 21.25C17.2726 21.2525 16.295 21.0599 15.3828 20.6834C14.4706 20.3069 13.6418 19.7539 12.944 19.0561C12.2462 18.3583 11.6931 17.5295 11.3166 16.6173C10.9401 15.7051 10.7476 14.7275 10.75 13.7406C10.7525 13.0461 11.0302 12.3808 11.5222 11.8905C12.0142 11.4003 12.6805 11.125 13.375 11.125V11.125C13.4896 11.1241 13.6023 11.1541 13.7013 11.2118C13.8003 11.2696 13.8819 11.3529 13.9375 11.4531L15.0344 13.3656C15.0996 13.4819 15.1331 13.6133 15.1315 13.7466C15.1298 13.8799 15.0931 14.0104 15.025 14.125L14.1438 15.5969C14.5952 16.601 15.399 17.4049 16.4031 17.8563L17.875 16.975C17.9896 16.9069 18.1202 16.8702 18.2535 16.8686C18.3868 16.8669 18.5181 16.9004 18.6344 16.9656L20.5469 18.0625C20.6471 18.1181 20.7305 18.1997 20.7882 18.2987C20.8459 18.3977 20.8759 18.5104 20.875 18.625C20.8726 19.3188 20.5965 19.9837 20.1068 20.4752C19.6171 20.9666 18.9532 21.2451 18.2594 21.25V21.25Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ProductDescription;
