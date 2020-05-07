import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { RECIPES_LIST } from '../../data/recipes';
import { useRouter } from 'next/router';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { Image, Transformation } from 'cloudinary-react';
import { theme } from 'components/styled/theme';
import BaseLayout from 'components/layouts/BaseLayout';
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

import { IoMdTimer } from 'react-icons/io';
import { FaShareAlt } from 'react-icons/fa';
import { GiKnifeFork, GiFruitBowl, GiBubblingBowl } from 'react-icons/gi';

const Recipe = ({ currentRecipe }) => {
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
  if (!recipe) return <p></p>;

  return (
    <BaseLayout title={`${recipe.slugUrl} details`}>
      <StyledContainer>
        <StyledRecipeDetail>
          <StyledH2>{recipe.name}</StyledH2>
          <p dangerouslySetInnerHTML={{ __html: recipe.description }} />
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
                <GiFruitBowl size="1.25rem" color={theme.colors.text} />
                Ingridients:
              </StyledText>
              {recipe.servings && (
                <span className="serves">
                  (for {recipe.servings} servings{' '}
                  <GiKnifeFork size=".75rem" color={theme.colors.mutedText} />)
                </span>
              )}
              <ul>
                {Object.values(recipe.ingridients).map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>

              {recipe.modifications && (
                <div>
                  <StyledText mb="1rem">
                    <GiBubblingBowl size="1.25rem" color={theme.colors.text} />
                    Modifications:
                  </StyledText>
                  {recipe.modifications.map((recipe) => {
                    return (
                      <div key={recipe.title}>
                        <span className="serves">{recipe.title}</span>
                        <ul>
                          {recipe.list.map((m) => (
                            <li key={m}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
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
  );
};

export default Recipe;

export async function getStaticProps({}) {
  return {
    props: {},
  };
}
export async function getStaticPaths() {
  const paths = Object.values(RECIPES_LIST).map((value) => {
    return { params: { slug: value.id.toString() } };
  });
  return {
    paths,
    fallback: true,
  };
}
