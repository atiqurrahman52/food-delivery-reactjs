import React, { useState } from "react";
import { outletsData } from "../../data/about/OurOutletsData";

const OurOutlets = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <section id="our-outlets">
      <div className="bg-[#FFFDF9]">
        <div className="py-10 lg:py-[112px]">
          <div className="container">
            <div className="mb-12">
              <h3 className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[34px] lg:leading-[42px] text-black mb-6">
                Our Outlets
              </h3>
              <p className="font-Raleway font-medium text-base leading-6 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
              <div className="space-y-10">
                {outletsData.map(({ id, cityName, location }) => (
                  <div
                    key={id}
                    onClick={() => setTabActive(id)}
                    // className="cursor-pointer py-4 bg-[#F4F4F4]"
                    className={`cursor-pointer py-4 ${id === tabActive ? "bg-[#F4F4F4]" : "bg-[#FFFDF9]"} `}
                  >
                    <div
                      className={`pl-8 border-l-2 ${
                        tabActive === id
                          ? "border-yellow"
                          : "border-transparent"
                      }`}
                    >
                      <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-7 lg:leading-[34px] text-primary mb-4">
                        {cityName}
                      </h3>
                      <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-6">
                        {location}
                      </p>
                      <p
                        className={`font-Raleway font-bold text-sm md:text-base text-black  ${
                          id === tabActive &&
                          "font-Raleway font-bold text-sm md:text-base text-success"
                        }`}
                      >
                        View Map
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <iframe
                  src={outletsData[tabActive].map}
                  width="100%"
                  height="500"
                  title="map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOutlets;
