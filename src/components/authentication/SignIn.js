import React from "react";
import { Link } from "react-router-dom";
import signIn from "../../assets/image/auth/sign-in.webp";
import logo from "../../assets/image/logo/logo.webp";
const SignIn = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 xl:col-span-5 hidden xl:block h-screen">
        <img className="h-full w-full" src={signIn} alt="" />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <div className="flex justify-center mb-20 pt-6">
          <Link to="/">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-Playfair font-bold text-2xl lg:text-[40px] leading-[29px] lg:leading-[48px] text-[#222329] mb-8 lg:mb-12 text-center">
            Sign In
          </p>
          <div>
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
              <div className="flex flex-col">
                <label
                  for=""
                  className="font-Raleway font-semibold text-xs lg:text-base leading-[18px] lg:leading-6 text-[#222329] mb-1"
                >
                  Your Email
                </label>
                <input
                  className="w-[292px] h-10 lg:h-12 border border-[#A3A3A5] rounded outline-none px-2 lg:px-4"
                  type="email"
                  name=""
                  value=""
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col">
                <label
                  for=""
                  className="font-Raleway font-semibold text-xs lg:text-base leading-[18px] lg:leading-6 text-[#222329] mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="absolute top-1/2 right-3 -translate-y-1/2">
                    {" "}
                    <i className="ph ph-eye"></i>{" "}
                  </span>
                  <input
                    className="w-[292px] h-10 lg:h-12 border border-[#A3A3A5] rounded outline-none px-2 lg:px-4"
                    type="password"
                    name=""
                    value=""
                    placeholder="Your Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 py-6 lg:py-4">
                <input
                  className="accent-success"
                  type="checkbox"
                  id="accept"
                  name="accept"
                  value="accept"
                />
                <label
                  for="accept"
                  className="font-Raleway font-medium text-xs lg:text-sm leading-[21px] text-[#222329]"
                >
                  {" "}
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  to="/forget-password"
                  className="font-Raleway font-medium text-xs lg:text-sm leading-[21px] text-success"
                >
                  Forget Password?
                </Link>
              </div>
            </div>
            <button
              type=""
              className="bg-success w-full font-Raleway font-semibold text-sm leading-[21px] text-white py-2.5 lg:py-3 rounded"
            >
              Sign In
            </button>
            <div className="py-6 lg:py-4">
              <div className="flex gap-1 mb-12 lg:mb-6 ">
                <p className="font-Raleway font-medium text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-[#222329]">
                  Don’t have an account?
                </p>
                <Link
                  className="font-Raleway font-medium text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-success"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </div>
              <p className="font-Raleway font-semibold text-sm text-primary/60 border-t w-9 pt-2">
                Or,
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
              <Link to="#">
                <div className="flex items-center justify-center space-x-2.5 w-[288px] h-11 border border-success rounded">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <p className="font-Raleway font-semibold text-sm leading-[21px] text-success">
                    Sign Up with Google
                  </p>
                </div>
              </Link>
              <Link to="#">
                <div className="flex items-center justify-center space-x-2.5 w-[288px] h-11 border border-success rounded">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 6.47719 17.5228 2 12 2C6.47719 2 2 6.47711 2 12C2 16.9913 5.65687 21.1284 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.9498 8.5625 13.5625 9.33336 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1284 22 16.9913 22 12Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M15.8926 14.8906L16.3359 12H13.5625V10.1242C13.5625 9.33328 13.9499 8.5625 15.1922 8.5625H16.4531V6.10156C16.4531 6.10156 15.3088 5.90625 14.2146 5.90625C11.9305 5.90625 10.4375 7.29063 10.4375 9.79688V12H7.89844V14.8906H10.4375V21.8785C10.9544 21.9595 11.4768 22.0001 12 22C12.5232 22.0002 13.0456 21.9595 13.5625 21.8785V14.8906H15.8926Z"
                      fill="white"
                    />
                  </svg>

                  <p className="font-Raleway font-semibold text-sm leading-[21px] text-success">
                    Sign Up with Facebook
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
