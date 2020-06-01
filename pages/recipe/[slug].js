import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { RECIPES_LIST } from '../../data/recipes';
import Link from 'next/link';
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
  const {
    recipesList,
    isFiltered,
    setIsFiltered,
    recipeLang,
    timeCook,
    setTimeCook,
    ingridientsTitle,
    setIngridientsTitle,
    instructions,
    setInstructions,
    tagsServings,
    setTagsServings,
    videoShareTitle,
    setVideoShareTitle,
  } = useContext(RecipesContext);

  const [recipe, setRecipe] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  let recipeItem;

  const setLang = (lang) => {
    switch (lang) {
      case 'cz':
        setTimeCook(['připrava', 'čas vaření', 'celkem']);
        setIngridientsTitle('Suroviny');
        setInstructions(['Příprava jídla', 'varianty']);
        setTagsServings(['štítky', 'porce']);
        setVideoShareTitle(['Mrkněte taky na video', 'Sdilet recept']);
        break;
      case 'ua':
        setTimeCook(['підготовка', 'час готування', 'загалом']);
        setIngridientsTitle('Інгредієнти');
        setInstructions(['Приготування', 'Варіанти']);
        setTagsServings(['теги', 'порції']);
        setVideoShareTitle([
          'Перегляньте також відео рецепту',
          'Поширити рецепт',
        ]);
        break;
      case 'ru':
        setTimeCook(['подготовка', 'время готовки', 'всего']);
        setIngridientsTitle('Ингредиенты');
        setInstructions(['Приготовление', 'Варианты']);
        setTagsServings(['теги', 'порции']);
        setVideoShareTitle(['Посмотрите также видео', 'Поделиться рецептом']);
        break;
      default:
        setIngridientsTitle('Ingridients');
    }
  };


  useEffect(() => {
    recipeItem = slug - 1;
    let currRecipe = recipesList[recipeItem];
    setRecipe(currRecipe);
    setLang(currRecipe.lang);
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
        <StyledRecipeDetail className="content">
          <StyledH2>{recipe.name}</StyledH2>
          <p dangerouslySetInnerHTML={{ __html: recipe.description }} />
          <div className="prep_time">
            <p>
              <IoMdTimer size="1.25rem" color={theme.colors.text} />
              {timeCook[0]} - {recipe.time_prep}, &nbsp;
            </p>
            <p>
              {timeCook[1]} - {recipe.time_cook},&nbsp;
            </p>
            <p>
              {timeCook[2]} - {recipe.time_total}
            </p>
          </div>

          <div className="tags">
            <p>
              {tagsServings[0]}:
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
                <Transformation
                  fetchFormat="auto"
                  quality="auto"
                />
              </Image>
            </div>
            <div>
              <StyledText>
                <GiFruitBowl size="1.25rem" color={theme.colors.text} />
                {ingridientsTitle}:
              </StyledText>
              {recipe.servings && (
                <span className="serves">
                  ({recipe.servings} {tagsServings[1]}{' '}
                  <GiKnifeFork size=".75rem" color={theme.colors.mutedText} />)
                </span>
              )}
              <ul>
                {Object.values(recipe.ingridients).map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
              {
                !!recipe.link && (
                  <Link href="/recipe/double-pie-crust">
                    <StyledButton variant="primary" mr="1rem" mb="0">
                      double pie crust recipe
                  </StyledButton>
                  </Link>
                )
              }

              {recipe.modifications && (
                <div>
                  <StyledText mb="1rem">
                    <GiBubblingBowl size="1.25rem" color={theme.colors.text} />
                    {instructions[1]}:
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
            <StyledText>{instructions[0]}:</StyledText>
            <ul>
              {Object.values(recipe.instructions).map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </div>
          {!!recipe.video && (
            <>
              <h4>{videoShareTitle[0]}</h4>
              <StyledVideoWrapper>
                <ReactPlayer url={recipe.video} controls />
              </StyledVideoWrapper>
            </>
          )}
          {navigator.share && (
            <StyledFlex>
              <StyledButton linear onClick={shareAPI} mb="1rem">
                {videoShareTitle[1]}
                <FaShareAlt />
              </StyledButton>
            </StyledFlex>
          )}
        </StyledRecipeDetail>
      </StyledContainer>
    </BaseLayout>
  );
};

export default Recipe;

export async function getStaticProps({ req }) {
  return {
    props: {

    }
  }
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
