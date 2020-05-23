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

  const localRecipe = {
    name: 'Double pie crust recipe',
    id: 301,
    type: 'liked',
    servings: 12,
    slugUrl: 'pie-crust',
    lang: 'en',
    tags: ['apple', 'pie', 'crust'],
    description:
      'This homemade pie crust recipe yields a flaky tender crust with rich buttery flavor. It has simple, natural ingredients and uses only butter (NO SHORTENING). Also, learn how to form a fluted pie rim and “blind bake” or pre-bake pie crust.',
    ingridients: [
      '2 1/2 cups all-purpose flour plus more to dust, *measured correctly',
      '1/2 Tbsp granulated sugar',
      '1/2 tsp sea salt',
      '1/2 lb COLD unsalted butter(2 sticks) diced into 1/4" pieces',
      '6 Tbsp ice water(6 to 7 Tbsp)',
    ],
    instructions: [
      'Place flour, sugar and salt into the bowl of a food processor and pulse a few times to combine.',
      'Add cold diced butter and pulse the mixture until coarse crumbs form with some pea-sized pieces then stop mixing. Mixture should remain dry and powdery. ',
      'Add 6 Tbsp ice water and pulse just until moist clumps or small balls form. Press a piece of dough between your finger tips and if the dough sticks together, you have added enough water. If not, add more water a teaspoon full at a time. Be careful not to add too much water or the dough will be sticky and difficult to roll out.',
      'Transfer dough to a clean work surface, and gather dough together into a ball (it should not be smooth and DO NOT knead the dough). Divide dough in half and flatten to form 2 disks. Cover with plastic wrap and refrigerate 1 hour before using in recipes that call for pie crust.',
    ],
    time_prep: '15 mins',
    time_cook: '15 mins',
    time_total: '30 mins',
    image:
      'https://res.cloudinary.com/dq1embvfh/image/upload/v1590239518/pie-crust.jpg',
    video: 'https://www.youtube.com/watch?v=SKDki3BPLzU',
  };
  const [recipe, setRecipe] = useState(localRecipe);
  const router = useRouter();

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
    setLang(recipe.lang);
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

  if (!recipe) return <p>no recipe</p>;

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
                <Transformation fetchFormat="auto" quality="auto" />
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
