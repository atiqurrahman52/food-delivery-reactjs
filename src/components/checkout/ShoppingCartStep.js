import { CaretLeft } from "@phosphor-icons/react";

import BillingSidebar from "./BillingSidebar";

const ShoppingCartStep = ({ currentStep, handleNext }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="border border-[#EBEBEB] p-4 lg:p-6 rounded-xl mb-8">
              <p className="font-Playfair font-bold text-base lg:text-2xl leading-[19px] lg:leading-[34px] text-primary mb-4">
                01. Shopping Cart
              </p>
              <div className="lg:grid grid-cols-12 mb-4 hidden">
                <div className="col-span-12 lg:col-span-6">
                  <p className="font-Raleway font-medium text-base leading-6 text-primary/80">
                    Item
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <p className="font-Raleway font-medium text-base leading-6 text-primary/80">
                    Quantity
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <p className="font-Raleway font-bold text-base leading-6 text-primary/80">
                    Subtotal
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row relative border-b py-4">
                <div className="md:w-1/2">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <div className="w-full lg:w-[76px] h-full lg:h-[76px] bg-[#FFEEDC]">
                      <img src="../assets/image/food/food-3.webp" alt="" />
                    </div>

                    <div className="">
                      <p className="font-Playfair font-bold text-base lg:text-xl leading-[30px] text-primary mb-1">
                        Baby Carrots 1
                      </p>
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/60">
                        4 kg
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-row-reverse lg:flex-row justify-between">
                  <div className="flex items-center lg:w-1/2">
                    <input
                      className="border border-success rounded text-center"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                    />
                  </div>

                  <div className="flex items-center space-x-4 lg:w-1/2">
                    <p className="font-Raleway font-bold text-base leading-[18px] text-success">
                      $ 1,750
                    </p>

                    <i className="ph-x text-2xl text-[#9C9C9C] absolute lg:static -top-2.5 right-0"></i>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row relative border-b py-4">
                <div className="md:w-1/2">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <div className="w-full lg:w-[76px] h-full lg:h-[76px] bg-[#FFEEDC]">
                      <img src="../assets/image/food/food-3.webp" alt="" />
                    </div>

                    <div className="">
                      <p className="font-Playfair font-bold text-base lg:text-xl leading-[30px] text-primary mb-1">
                        Baby Carrots 1
                      </p>
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/60">
                        4 kg
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-row-reverse lg:flex-row justify-between">
                  <div className="flex items-center lg:w-1/2">
                    <input
                      className="border border-success rounded text-center"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                    />
                  </div>

                  <div className="flex items-center space-x-4 lg:w-1/2">
                    <p className="font-Raleway font-bold text-base leading-[18px] text-success">
                      $ 1,750
                    </p>

                    <i className="ph-x text-2xl text-[#9C9C9C] absolute lg:static -top-2.5 right-0"></i>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row relative border-b py-4">
                <div className="md:w-1/2">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <div className="w-full lg:w-[76px] h-full lg:h-[76px] bg-[#FFEEDC]">
                      <img src="../assets/image/food/food-3.webp" alt="" />
                    </div>

                    <div className="">
                      <p className="font-Playfair font-bold text-base lg:text-xl leading-[30px] text-primary mb-1">
                        Baby Carrots 1
                      </p>
                      <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/60">
                        4 kg
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-row-reverse lg:flex-row justify-between">
                  <div className="flex items-center lg:w-1/2">
                    <input
                      className="border border-success rounded text-center"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                    />
                  </div>

                  <div className="flex items-center space-x-4 lg:w-1/2">
                    <p className="font-Raleway font-bold text-base leading-[18px] text-success">
                      $ 1,750
                    </p>

                    <i className="ph-x text-2xl text-[#9C9C9C] absolute lg:static -top-2.5 right-0"></i>
                  </div>
                </div>
              </div>

              <button
                type=""
                className="flex items-center w-max ml-auto space-x-2 px-4 pt-4"
              >
                <span className="text-success text-xl">
                  <i className="ph-plus"></i>
                </span>
                <p className="font-Overpass font-semibold text-sm leading-[21px] text-success">
                  Add More
                </p>
              </button>
            </div>

            <div>
              <button className="button flex items-center justify-center space-x-[6px] lg:space-x-2.5 border border-[#EBEBEB] rounded-xl w-[101px] h-11 lg:h-12 mb-16">
                <CaretLeft size={18} />
                <p className="font-Raleway font-bold text-base leading-6 text-primary">
                  Back
                </p>
              </button>
            </div>
          </div>

          <BillingSidebar label="Checkout" handleNext={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartStep;
