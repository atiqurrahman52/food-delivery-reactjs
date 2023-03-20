import React from "react";

const RecipesBanner = () => {
  return (
    <section id="recipes-banner">
      <div className="recipes-banner bg-cover bg-center bg-no-repeat h-[300px] md:block hidden">
        <div className="container">
          <div className="pt-[105px]">
            <h3 className="font-Playfair font-bold text-5xl leading-[58px] text-white mb-2">
              Recipes
            </h3>
            <p className="font-Raleway font-medium text-base leading-6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

   {/* For mobile banner  */}

      <div className="recipes-mobile-banner bg-cover bg-center bg-no-repeat h-[300px] md:hidden block">
        <div className="container">
          <div className="pt-[105px]">
            <h3 className="font-Playfair font-bold text-2xl leading-[29px] text-white mb-2">
              Recipes
            </h3>
            <p className="font-Raleway text-base leading-6 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesBanner;
