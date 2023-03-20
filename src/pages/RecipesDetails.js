import React from "react";
import RecipesDetailsBanner from "../components/recipesDetails/RecipesDetailsBanner";
import RecipesIntroductionAndConclusion from "../components/recipesDetails/RecipesIntroductionAndConclusion";
import RelatedRecipes from "../components/recipesDetails/RelatedRecipes";

const RecipesDetails = () => {
  return (
    <div>
      <RecipesDetailsBanner />
      <RecipesIntroductionAndConclusion />
      <RelatedRecipes />
    </div>
  );
};

export default RecipesDetails;
