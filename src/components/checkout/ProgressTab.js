import { Check } from "@phosphor-icons/react";
import { useEffect } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

// data

const ProgressTab = ({ currentStep }) => {
  var stepPercentage = 0;

  if (currentStep === 1) {
    stepPercentage = 0;
  } else if (currentStep === 2) {
    stepPercentage = 50;
  } else if (currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  useEffect(() => {}, [currentStep]);

  return (
    <div className="">
      <div className="container checkout-step">
        <ProgressBar percent={stepPercentage}>
          {/* {checkoutPaymentData.map(({ id, icon, title, details }) => {
            return (
              <Step key={id}>
                {({ accomplished, index }) => (
                  <div
                    className={`indexedStep py-4 md:py-8 xl:py-12 flex flex-col md:flex-row items-center gap-x-6 gap-y-3 text-center md:text-left ${
                      id + 1 !== currentStep && "hidden md:flex"
                    } ${
                      accomplished
                        ? "border-b-2 border-secondary"
                        : "grayscale opacity-30"
                    }`}
                  >
                    <span>{icon}</span>
                    <div className="space-y-2">
                      <p className="text-sm xl:text-base text-tertiary font-semibold">
                        {title}
                      </p>
                      <p className="text-xs xl:text-sm text-tertiary/30">
                        {details}
                      </p>
                    </div>
                  </div>
                )}
              </Step>
            );
          })} */}
          <ul
            id="progressbar"
            className="progressbar text-center flex items-center justify-center mb-10 lg:mb-16"
          >
            {["Shopping Cart", "Checkout", "Payment"].map((item, i) => (
              <Step key={i}>
                {({ accomplished, index }) => (
                  <li className="current indexedStep">
                    <span className="icon">
                      {/* {accomplished ? <Check size={24} /> : "tut"} */}
                      {accomplished ? <Check size={24} /> : "tut"}
                    </span>
                    <span className="block whitespace-nowrap">{item}</span>
                  </li>
                )}
              </Step>
            ))}
          </ul>
        </ProgressBar>
      </div>
    </div>
  );
};

export default ProgressTab;
