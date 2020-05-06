import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import fetch from 'isomorphic-fetch';
import { Image, Transformation } from 'cloudinary-react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import BaseLayout from 'components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import { IoMdTimer } from 'react-icons/io';
import { FaShareAlt } from 'react-icons/fa';
import { GiKnifeFork, GiFruitBowl } from 'react-icons/gi';
import { theme } from 'components/styled/theme';
import {
  StyledContainer,
  StyledButton,
  StyledH2,
  StyledTag,
  StyledText,
  StyledRecipeDetail,
  StyledVideoWrapper,
  StyledFlex,
} from 'components/styled';

const Recipe = (props) => {
  const { recipesList } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  let recipeItem;

  const shareAPI = () => {
    if (navigator.share) {
      const recipeFullUrl = window.location.href;
      navigator
        .share({
          title: `${recipe.slugUrl}`,
          text: `${recipe.description}`,
          url: `${recipeFullUrl}`,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  };
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
            {navigator.share && (
              <StyledFlex>
                <StyledButton linear onClick={shareAPI} mb="1rem">
                  share recipe <FaShareAlt />
                </StyledButton>
              </StyledFlex>
            )}
          </StyledRecipeDetail>
        </StyledContainer>
      </BaseLayout>
    </>
  );
};

export default Recipe;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async (ctx) => {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/api/recipes`);
  const data = await res.json();
  const paths = data.map((d) => ({
    params: { slug: d.id.toString() },
  }));
  return { paths, fallback: false };
};
