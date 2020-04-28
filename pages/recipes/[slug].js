import React, { useState, useEffect } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { LIKED_RECIPES_LIST, NEW_RECIPES_LIST } from '../../data/recipes';
import {
  StyledContainer,
  StyledH2,
  StyledTag,
  StyledRecipeDetail,
} from '../../components/styled';
import { useRouter } from 'next/router';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  let recipeItem;

  useEffect(() => {
    let currRecipe;
    //liked recipes
    if (slug < 100) {
      recipeItem = slug - 1;
      currRecipe = LIKED_RECIPES_LIST[recipeItem];
    }
    //new recipes to try out
    else {
      recipeItem = slug - 101;
      currRecipe = NEW_RECIPES_LIST[recipeItem];
    }
    setRecipe(currRecipe);
  }, []);

  if (!recipe) return <p></p>;

  return (
    <BaseLayout title="Recipe details 🍪">
      <StyledContainer>
        <StyledRecipeDetail>
          <StyledH2>{recipe.name}</StyledH2>

          <p>{recipe.description}</p>
          <div className="prep_time">
            <p>Preparation - {recipe.time_prep}, </p>
            <p>time to cook - {recipe.time_cook}, </p>
            <p>total - {recipe.time_total}</p>
          </div>

          <div className="tags">
            <p>
              tags:
              {Object.values(recipe.tags).map((value, index) => {
                return (
                  <StyledTag key={index} as="span">
                    {value}
                  </StyledTag>
                );
              })}
            </p>
          </div>
          <div className="desc">
            <div className="recipe_img">
              <img src={recipe.image} alt={recipe.name.toLowerCase()} />
            </div>
            <div>
              <p>Ingridients:</p>
              <ul>
                {Object.values(recipe.ingridients).map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
          </div>
        </StyledRecipeDetail>
      </StyledContainer>
    </BaseLayout>
  );
};

export default Recipe;
