import { CaretRight } from "@phosphor-icons/react";
import React from "react";
import user from "../../assets/image/product-details/image-1.webp";
import { reviewsData } from "../../data/productDetails/reviewsData";
const CustomerReviews = () => {
  return (
    <div>

      <section id="reviews">
        <div className="bg-[#F9F6F1]">
          <div className="container">
            <div className="max-w-[641px] py-8">
              <h1 className="font-Playfair font-bold text-2xl leading-[34px] text-primary/90 mb-8">
                Based On Customer’s Reviews
              </h1>
              <div className="flex items-center mb-3">
                <p className="font-Raleway font-bold text-5xl leading-[58px] text-[#0E0E10]">
                  5.0 <span className="text-[#0E0E10]/20 text-3xl">/5</span>
                </p>
              </div>

              <div className="flex justify-between mb-7">
                <div className="flex space-x-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L15.709 7.89911L24 9.16932L17.9976 15.3169L19.4133 24L12 19.9016L4.58199 24L5.99764 15.3169L0 9.16932L8.29099 7.89911L12 0Z"
                      fill="#FEBB41"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L15.709 7.89911L24 9.16932L17.9976 15.3169L19.4133 24L12 19.9016L4.58199 24L5.99764 15.3169L0 9.16932L8.29099 7.89911L12 0Z"
                      fill="#FEBB41"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L15.709 7.89911L24 9.16932L17.9976 15.3169L19.4133 24L12 19.9016L4.58199 24L5.99764 15.3169L0 9.16932L8.29099 7.89911L12 0Z"
                      fill="#FEBB41"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L15.709 7.89911L24 9.16932L17.9976 15.3169L19.4133 24L12 19.9016L4.58199 24L5.99764 15.3169L0 9.16932L8.29099 7.89911L12 0Z"
                      fill="#FEBB41"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L15.709 7.89911L24 9.16932L17.9976 15.3169L19.4133 24L12 19.9016L4.58199 24L5.99764 15.3169L0 9.16932L8.29099 7.89911L12 0Z"
                      fill="#FEBB41"
                    />
                  </svg>
                </div>
                <p className="font-Playfair font-bold text-sm leading-[21px]">
                  13 Ratings
                </p>
              </div>

              <h3 className="font-Playfair font-bold text-2xl leading-[34px] text-primary mb-6">
                Reviews (13)
              </h3>

             {
              reviewsData.map(({id,img,name,date,comment,rating}) =>(
                <div
                key={id}
                 className="flex gap-3 xl:gap-5 pb-6">
                <div className="flex-shrink-0">
                  <img
                    src={img}
                    alt=""
                  />
                </div>
  
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:justify-between items-start mb-3">
  
                    <div>
                      <p
                        className="font-Raleway font-semibold text-base leading-6 text-primary"
                      >
                       {name}
                      </p>
                      <span
                        className="font-Raleway text-[13px] leading-6 text-[#456170] hidden md:block "
                      >
                      {date}
                      </span>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">

                         {rating.map((item,i) =>(
                          <div key={i}>
                            {item}
                          </div>
                        ))} 

                      </div>
  
                      <div>
                        <p
                          className="font-Raleway font-bold text-sm leading-[21px] text-[#0E0E10]"
                        >
                          4 <span className="text-[#0E0E10] opacity-50">/5</span>
                        </p>
                      </div>
                      
                    </div>
                    <span
                    className="font-Raleway text-[13px] leading-6 text-[#456170] pt-2 md:hidden"
                  >
                  {date}
                  </span>
                    
                  </div>
  
                  <p
                  className="font-Raleway font-medium text-sm leading-[21px] text-[#012232] pt-2 mb-3"
                >
                {comment}
                </p>
  
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 8.125H6.25V16.25H2.5C2.33424 16.25 2.17527 16.1842 2.05806 16.0669C1.94085 15.9497 1.875 15.7908 1.875 15.625V8.75C1.875 8.58424 1.94085 8.42527 2.05806 8.30806C2.17527 8.19085 2.33424 8.125 2.5 8.125V8.125Z"
                        stroke="#070707"
                        stroke-opacity="0.6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.25 8.125L9.375 1.875C10.038 1.875 10.6739 2.13839 11.1428 2.60723C11.6116 3.07607 11.875 3.71196 11.875 4.375V6.25H16.7109C16.8882 6.24956 17.0635 6.28706 17.225 6.35997C17.3866 6.43288 17.5306 6.53953 17.6476 6.67273C17.7645 6.80593 17.8516 6.96262 17.9029 7.13226C17.9543 7.3019 17.9687 7.48056 17.9453 7.65625L17.0078 15.1562C16.9699 15.4573 16.8237 15.7343 16.5966 15.9356C16.3695 16.1368 16.0769 16.2486 15.7734 16.25H6.25"
                        stroke="#070707"
                        stroke-opacity="0.6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      className="font-Raleway font-bold text-xs leading-[18px] text-primary/60"
                    >
                      Like (9)
                    </p>
                  </div>
  
                  <div className="flex items-center space-x-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 3.75H6.25V11.875H2.5C2.33424 11.875 2.17527 11.8092 2.05806 11.6919C1.94085 11.5747 1.875 11.4158 1.875 11.25V4.375C1.875 4.20924 1.94085 4.05027 2.05806 3.93306C2.17527 3.81585 2.33424 3.75 2.5 3.75V3.75Z"
                        stroke="#070707"
                        stroke-opacity="0.6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.25 11.875L9.375 18.125C10.038 18.125 10.6739 17.8616 11.1428 17.3928C11.6116 16.9239 11.875 16.288 11.875 15.625V13.75H16.7109C16.8882 13.7504 17.0635 13.7129 17.225 13.64C17.3866 13.5671 17.5306 13.4605 17.6476 13.3273C17.7645 13.1941 17.8516 13.0374 17.9029 12.8677C17.9543 12.6981 17.9687 12.5194 17.9453 12.3438L17.0078 4.84375C16.9699 4.54267 16.8237 4.26567 16.5966 4.06442C16.3695 3.86317 16.0769 3.75141 15.7734 3.75H6.25"
                        stroke="#070707"
                        stroke-opacity="0.6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p
                      className="font-Raleway font-bold text-xs leading-[18px] text-primary/60"
                    >
                      Dislike
                    </p>
                  </div>
                </div>
  
                </div>
              </div>
              ))
             }

             

              {/* <!-- pagination started  --> */}

              <div className="flex space-x-3 lg:space-x-4 w-max ml-auto">
                <a
                  href="#"
                  className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-black text-white rounded-full"
                >
                  1
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                >
                  2
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                >
                  3
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                >
                  ...
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"
                >
                  1
                </a>
                {/* <a href="#">
                  <i className="ph-caret-right-bold flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full"></i>
                </a> */}
                <a href="#" className="flex justify-center items-center font-Inter font-bold text-sm leading-[17px] w-7 lg:w-8 h-7 lg:h-8 bg-white text-black rounded-full">
                  {/* <i className="ph-caret-right-bold "></i> */}
                  <CaretRight size={20} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section id="form">
      <form>
        <div className="bg-[#F9F6F1]">
          <div className="container">
            <div className="max-w-[641px] py-8">
              <h3
                className="font-Playfair font-bold text-xl lg:text-2xl leading-[28px] text-[#012232] mb-4"
              >
                Leave a Comment
              </h3>
              <p
                className="font-Raleway font-semibold text-sm leading-[21px] mb-3 text-[#456170]"
              >
                Write a Comment
              </p>

              <div>
              
                  <textarea className="w-full border border-[#D2D1E0] rounded-xl outline-none h-[98px] p-3 mb-4"></textarea>
                <div className="flex gap-3 md:gap-6 flex-col md:flex-row mb-4">
                  <div className="flex flex-col">
                    <label
                      for=""
                      className="font-Raleway font-semibold text-sm leading-[21px] text-[#456170] mb-3"
                      >Name</label
                    >
                    <input
                      type="text"
                      name=""
                      value=""
                      className="w-full md:w-[308px] h-[48px] border border-[#D2D1E0] px-2 rounded-xl outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      for=""
                      className="font-Raleway font-semibold text-sm leading-[21px] text-[#456170] mb-3"
                      >Email</label
                    >
                    <input
                      type="email"
                      name=""
                      value=""
                      className="w-full md:w-[308px] h-[48px] border border-[#D2D1E0] px-2 rounded-xl outline-none"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <p
                    className="font-Raleway font-bold text-sm leading-[21px] text-primary"
                  >
                    Rating :
                  </p>
                  <div className="flex space-x-2">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5L13.0908 7.08259L20 8.1411L14.998 13.2641L16.1777 20.5L10 17.0847L3.81832 20.5L4.99803 13.2641L0 8.1411L6.90916 7.08259L10 0.5Z"
                        fill="#B0AEAB"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5L13.0908 7.08259L20 8.1411L14.998 13.2641L16.1777 20.5L10 17.0847L3.81832 20.5L4.99803 13.2641L0 8.1411L6.90916 7.08259L10 0.5Z"
                        fill="#B0AEAB"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5L13.0908 7.08259L20 8.1411L14.998 13.2641L16.1777 20.5L10 17.0847L3.81832 20.5L4.99803 13.2641L0 8.1411L6.90916 7.08259L10 0.5Z"
                        fill="#B0AEAB"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5L13.0908 7.08259L20 8.1411L14.998 13.2641L16.1777 20.5L10 17.0847L3.81832 20.5L4.99803 13.2641L0 8.1411L6.90916 7.08259L10 0.5Z"
                        fill="#B0AEAB"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.5L13.0908 7.08259L20 8.1411L14.998 13.2641L16.1777 20.5L10 17.0847L3.81832 20.5L4.99803 13.2641L0 8.1411L6.90916 7.08259L10 0.5Z"
                        fill="#B0AEAB"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex space-x-2 mb-4">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    value="agree"
                  />
                  <label
                    for="agree"
                    className="font-Raleway font-bold lg:font-medium text-xs lg:text-base leading-6 text-primary/60"
                  >
                    Save name and email in this browser for the next time
                    comment.</label
                  ><br />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-[281px] h-[48px] bg-primary text-white rounded-lg font-Raleway font-semibold text-xl leading-[30px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>


    </div>
  );
};

export default CustomerReviews;
