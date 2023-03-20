import React from "react";
import { useParams } from "react-router-dom";
import RecipesDetailsBanner from "../components/recipesDetails/RecipesDetailsBanner";
import RecipesIntroductionAndConclusion from "../components/recipesDetails/RecipesIntroductionAndConclusion";
import RelatedRecipes from "../components/recipesDetails/RelatedRecipes";
import { recipesPostData } from "../data/recipes/recipesPostData";

const RecipesDetails = () => {
  const {id} = useParams();
  const singleRecipe = recipesPostData?.find((item) => item.id === parseInt(id));
  return (
    <div>
      <RecipesDetailsBanner singleRecipe={singleRecipe} />
      <RecipesIntroductionAndConclusion />
      <RelatedRecipes />
    </div>
  );
};

export default RecipesDetails;
