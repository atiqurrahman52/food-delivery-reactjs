import { Check } from "@phosphor-icons/react";
import { useEffect } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

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
    <div className="pb-20">
      <div className="container checkout-step w-3/4 md:w-[600px]">
        <ProgressBar percent={stepPercentage}>
          {["Shopping Cart", "Checkout", "Payment"].map((item, i) => {
            return (
              <Step key={i}>
                {({ accomplished, index }) => (
                  <div
                    className={`current bg-white ${
                      accomplished ? "accomplished" : ""
                    }`}
                  >
                    <span>
                      {accomplished && currentStep > index + 1 ? (
                        <span className="h-10 w-10 flex items-center justify-center mx-auto">
                          <Check size={24} />
                        </span>
                      ) : (
                        <span className="h-10 w-10 flex items-center justify-center mx-auto">
                          <span className="block h-2 w-2 rounded-full bg-[#919EAB]" />
                        </span>
                      )}
                    </span>
                    <span className="block whitespace-nowrap text-xs">{item}</span>
                  </div>
                )}
              </Step>
            );
          })}
        </ProgressBar>
      </div>
    </div>
  );
};

export default ProgressTab;
