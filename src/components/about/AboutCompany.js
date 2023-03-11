import React from "react";
import about from "../../assets/image/about/about.webp";

const AboutCompany = () => {
  return (
    <section id="about-company">
      <div className="bg-[#F9F6F1]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="">
                <p className="font-Raleway font-semibold text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-4">
                  Feature one
                </p>
                <p className="font-Playfair font-bold text-2xl lg:text-[32px] leading-[34px] lg:leading-[42px] text-primary mb-6">
                  About [company name]
                </p>
                <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  varius faucibus massa sollicitudin amet augue. Nibh metus a
                  semper purus mauris duis. Lorem eu neque, tristique quis duis.
                  Nibh scelerisque ac adipiscing velit non nulla in amet
                  pellentesque. Sit turpis pretium eget maecenas. Vestibulum
                  dolor mattis consectetur eget commodo vitae.
                </p>
                <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-4">
                  Amet pellentesque sit pulvinar lorem mi a, euismod risus
                  rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget
                  dictum quis est sed egestas tellus, a lectus. Quam ullamcorper
                  in fringilla arcu aliquet fames arcu.Lacinia eget faucibus
                  urna, nam risus nec elementum cras porta. Sed elementum, sed
                  dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit
                  sagittis in eleifend dignissim. Natoque mauris cras molestie
                  velit. Maecenas eget adipiscing quisque viverra lectus arcu,
                  tincidunt ultrices pellentesque.
                </p>
              </div>

              <div className="">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
