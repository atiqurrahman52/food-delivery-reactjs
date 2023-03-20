import React from "react";

const OurOutlets = () => {
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              <ul className="outlets">
                <li>
                  <a href="#outlet1">
                    <div className="mb-4 lg:mb-8">
                      <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-7 lg:leading-[34px] text-primary mb-4">
                        Sydney
                      </h3>
                      <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-6">
                        123 Sample St, Sydney NSW 2000 AU
                      </p>

                      <p>View Map</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#outlet2">
                    <div className="mb-4 lg:mb-8">
                      <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-7 lg:leading-[34px] text-primary mb-4">
                        New York
                      </h3>
                      <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-6">
                        123 Sample St, New York NY 10000 USA
                      </p>
                      <p>View Map</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#outlet3">
                    <div className="mb-4 lg:mb-8">
                      <h3 className="font-Playfair font-bold text-xl lg:text-2xl leading-7 lg:leading-[34px] text-primary mb-4">
                        London
                      </h3>
                      <p className="font-Raleway font-medium text-sm lg:text-base leading-[21px] lg:leading-6 text-primary/80 mb-6">
                        123 Sample St, London W1C 1DE, United Kingdom
                      </p>
                      <p>View Map</p>
                    </div>
                  </a>
                </li>
              </ul>

              <div>
                <div id="outlet1" className="outlet">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width={1000}
                    height={500}
                    frameborder="0"
                    style="border: 0"
                  ></iframe>
                </div>
                <div id="outlet2" className="outlet">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width="100%"
                    height="500"
                    frameborder="0"
                    style="border: 0"
                  ></iframe>
                </div>
                <div id="outlet3" className="outlet">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width="100%"
                    height="500"
                    frameborder="0"
                    style="border: 0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOutlets;
