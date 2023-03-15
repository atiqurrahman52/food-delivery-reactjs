import React from "react";
import { Link } from "react-router-dom";
import forgetPassword from "../../assets/image/auth/forget-password.webp";
import logo from "../../assets/image/logo/logo.webp";

const ForgetPassword = () => {
  return (
    <section id="forget-password">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 hidden lg:block">
          <img className="h-full w-full" src={forgetPassword} alt="" />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="flex justify-center mb-20 pt-6">
            <Link to="/">
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="flex flex-col items-center px-2 lg:px-0">
            <p className="font-Playfair font-bold text-2xl lg:text-[40px] leading-[29px] lg:leading-[48px] text-[#222329] mb-8 lg:mb-12">
              Forget Password?
            </p>
            <span className="bg-[#6A6A6A] w-[30px] h-[1px] mb-2"></span>
            <p className="font-Raleway font-semibold text-sm leading-[21px] text-primary/60 text-center max-w-[438px] mb-8 lg:mb-6">
              Enter the email address you used when you joined and we'll send
              you instructions to reset your password.
            </p>
            <div>
              <label className="font-Raleway font-semibold text-xs lg:text-base leading-[18px] lg:leading-6 text-[#222329] mb-1">
                Your Email
              </label>
              <input
                className="w-full h-12 border border-success outline-none px-2 lg:px-4 text-success rounded"
                type="email"
                name=""
                value=""
                placeholder="example@info"
              />
              <button
                type=""
                className="bg-success w-full font-Raleway font-semibold text-sm leading-[21px] text-white py-2.5 lg:py-3 rounded mt-6 mb-6 lg:mb-4"
              >
                Send
              </button>
              <Link
                className="font-Raleway font-medium text-xs lg:text-sm leading-[18px] lg:leading-[21px] text-success"
                to="/sign-in"
              >
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
