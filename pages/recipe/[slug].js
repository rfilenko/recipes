import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RECIPES_LIST } from '../../data/recipes';
import { RecipesContext } from 'components/contexts/RecipesContext';

import { Image, Transformation } from 'cloudinary-react';
import { theme } from 'components/styled/theme';
import BaseLayout from 'components/layouts/BaseLayout';
import ShareRecipe from 'components/shared/ShareRecipe';

import {
  StyledContainer,
  StyledButton,
  StyledH2,
  StyledTag,
  StyledText,
  StyledRecipeDetail,
  StyledVideoWrapper,
} from 'components/styled';

import { IoMdTimer } from 'react-icons/io';
import { GiKnifeFork, GiFruitBowl, GiBubblingBowl } from 'react-icons/gi';

const Recipe = ({ currentRecipe }) => {
  const {
    recipesList,
    timeCook,
    ingridientsTitle,
    instructions,
    tagsServings,
    сategorie,
    videoShareTitle,
    setLang,
  } = useContext(RecipesContext);

  const [recipe, setRecipe] = useState(null);
  const [coef, setCoef] = useState(1);
  const [servingsNum, setServingsNum] = useState(0);
  const [initialServings, setInitialServings] = useState(0);
  const [sameCategory, setSameCategory] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

  const handleServingsNum = ({ target }) => {
    setServingsNum(target.value);
    setCoef(target.value / initialServings);
  };

  let recipeItem;

  useEffect(() => {
    recipeItem = slug - 1;
    let currRecipe = recipesList[recipeItem];
    setRecipe(currRecipe);
    setLang(currRecipe.lang);
    const categoryList = recipesList.filter((r) => {
      return r.category[0] === currRecipe.category[0] && r.id !== currRecipe.id;
    });
    setSameCategory(categoryList);
    setInitialServings(currRecipe.servings);
    setServingsNum(currRecipe.servings);
  }, []);

  if (!recipe) return <p></p>;

  return (
    <BaseLayout title={`${recipe.slugUrl} recipe details`}>
      <StyledContainer>
        <StyledRecipeDetail className="content">
          <StyledH2 className="recipe-details">{recipe.name}</StyledH2>
          <p dangerouslySetInnerHTML={{ __html: recipe.description }} />
          <div className="prep_time">
            <p>
              <IoMdTimer size="1.25rem" color={theme.colors.text} />
              {timeCook[0]} - {recipe.time_prep}, &nbsp;
            </p>
            <p>
              {timeCook[1]} - {recipe.time_cook}, &nbsp;
            </p>
            <p>
              {timeCook[2]} - {recipe.time_total}
            </p>
          </div>
          <section className="category">
            <h3>
              {сategorie}:
              {Object.values(recipe.category).map((value, index) => {
                return <span key={index}>{value}</span>;
              })}
            </h3>
            <div className="tags">
              {tagsServings[0]}:
              {Object.values(recipe.tags).map((value, index) => {
                return (
                  <StyledTag key={index} as="span">
                    {value}
                  </StyledTag>
                );
              })}
            </div>
          </section>

          {/* // show sameCategory links */}
          {/* {sameCategory.length && (
            <div>
              Last added in this category:
              <ul className="category-lastList">
                {sameCategory.length &&
                  sameCategory
                    .slice(Math.max(sameCategory.length - 3, 1))
                    .map((i) => (
                      <li key={i.name}>
                        {' '}
                        <Link
                          // href="/recipe/[slug]"
                          href={`/recipe/${i.id}`}
                        >
                          <a>{i.name}</a>
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          )} */}

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
              <StyledText mb="1rem">
                <GiFruitBowl size="1.25rem" color={theme.colors.text} />
                {ingridientsTitle}:
              </StyledText>
              <input
                className="styled-input servingsInput"
                type="number"
                value={servingsNum}
                min="1"
                max="10"
                onChange={(e) => handleServingsNum(e, coef)}
              />
              {recipe.servings && (
                <span className="serves">
                  ({recipe.servings * coef} {tagsServings[1]}{' '}
                  <GiKnifeFork size=".75rem" color={theme.colors.mutedText} />)
                </span>
              )}
              <ul>
                {Object.values(recipe.ingridients).map((value, index) => {
                  let ingridientVal;
                  const val = value[0] * coef;
                  // whether a value is an integer
                  if (Number.isInteger(val)) {
                    ingridientVal = val;
                  } else {
                    ingridientVal = val.toFixed(2);
                  }
                  const hasNumber = value[0] !== null;
                  return (
                    <li key={index}>
                      {`${hasNumber ? ingridientVal : ''} ${value[1]}`}{' '}
                    </li>
                  );
                })}
              </ul>
              {!!recipe.link && (
                <Link href="/recipe/double-pie-crust">
                  <StyledButton variant="primary" mr="1rem" mb="0">
                    double pie crust recipe
                  </StyledButton>
                </Link>
              )}

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
                          {recipe.list.map((m) => {
                            const ingridientVal = m[0] * coef;
                            const hasNumber = m[0] !== null;

                            return (
                              <li key={m}>
                                {`${hasNumber ? ingridientVal : ''} ${m[1]}`}
                              </li>
                            );
                          })}
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
          <ShareRecipe recipe={recipe} />
        </StyledRecipeDetail>
      </StyledContainer>
    </BaseLayout>
  );
};

export default Recipe;

export async function getStaticProps({ req }) {
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
