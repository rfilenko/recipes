import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import fetch from 'isomorphic-fetch';
import { Image, Transformation } from 'cloudinary-react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import BaseLayout from 'components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import { IoMdTimer } from 'react-icons/io';
import { GiKnifeFork, GiFruitBowl } from 'react-icons/gi';
import { theme } from 'components/styled/theme';
import {
  StyledContainer,
  StyledH2,
  StyledTag,
  StyledText,
  StyledRecipeDetail,
  StyledVideoWrapper,
} from 'components/styled';

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
              <p>
                <IoMdTimer size="1.25rem" color={theme.colors.text} />
                preparation - {recipe.time_prep},
              </p>
              <p> time to cook - {recipe.time_cook}, </p>
              <p> total - {recipe.time_total}</p>
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
                  <Transformation fetchFormat="auto" />
                </Image>
              </div>
              <div>
                <StyledText>
                  <GiFruitBowl size="1.25rem" color={theme.colors.text} />{' '}
                  Ingridients:
                </StyledText>
                {recipe.servings && (
                  <span className="serves">
                    (for {recipe.servings} servings{' '}
                    <GiKnifeFork size=".75rem" color={theme.colors.mutedText} />
                    )
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

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: '1' } },
      { params: { slug: '2' } },
      { params: { slug: '3' } },
      { params: { slug: '4' } },
      { params: { slug: '5' } },
      { params: { slug: '6' } },
      { params: { slug: '7' } },
    ],
    fallback: true,
  };
}
