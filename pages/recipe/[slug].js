import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { Image, Transformation } from 'cloudinary-react';
import { RecipesContext } from '../../components/contexts/RecipesContext';
import BaseLayout from '../../components/layouts/BaseLayout';
import {
  StyledContainer,
  StyledH2,
  StyledTag,
  StyledText,
  StyledRecipeDetail,
  StyledVideoWrapper,
} from '../../components/styled';
import { useRouter } from 'next/router';

const Recipe = () => {
  const { recipesList } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  let recipeItem;

  useEffect(() => {
    recipeItem = slug - 1;
    let currRecipe = recipesList[recipeItem];
    setRecipe(currRecipe);
  }, []);

  if (!recipe) return <p></p>;

  return (
    <>
      <BaseLayout title={`${recipe.slugUrl} details`}>
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
                {!recipe.image && <p>no image </p>}
                <Image
                  cloudName={process.env.CLOUDINARY_CLOUD_NAME}
                  publicId={recipe.slugUrl}
                  alt={recipe.name.toLowerCase()}
                >
                  <Transformation fetchFormat="auto" quality="auto" />
                </Image>
              </div>
              <div>
                <StyledText>Ingridients:</StyledText>
                {recipe.servings && (
                  <span className="serves">
                    (for {recipe.servings} servings)
                  </span>
                )}
                <ul>
                  {Object.values(recipe.ingridients).map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="instructions">
              <StyledText>Instructions:</StyledText>
              <ul>
                {Object.values(recipe.instructions).map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
            {!!recipe.video && (
              <>
                <h4>Watch the Video Below</h4>
                <StyledVideoWrapper>
                  <ReactPlayer url={recipe.video} controls />
                </StyledVideoWrapper>
              </>
            )}
          </StyledRecipeDetail>
        </StyledContainer>
      </BaseLayout>
    </>
  );
};

export default Recipe;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export async function getStaticPaths(ctx) {
  return {
    paths: [{ params: { slug: '1' } }],
    fallback: true,
  };
}
