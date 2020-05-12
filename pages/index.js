import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import Recipes from 'components/shared/Recipes';
import RecipeTypeFilter from 'components/shared/RecipeTypeFilter';
import LangSelect from 'components/shared/LangSelect';
import BaseLayout from 'components/layouts/BaseLayout';

import {
  StyledContainer,
  StyledFlex,
  StyledH2,
  StyledButton,
} from 'components/styled';

const Index = () => {
  const {
    recipesList,
    isFiltered,
    filterTitle,
    setIsFiltered,
    setFilterTitle,
    recipesLang,
    setRecipesLang,
    recipesLangisFiltered,
    setRecipesLangisFiltered,
    setDisableLangSelect,
  } = useContext(RecipesContext);

  const [localRecipes, setLocalRecipes] = useState([]);
  const [oneRecipe, setOneRecipe] = useState([]);
  const [recipesTitle, setRecipesTitle] = useState(' ');
  const [recipesCount, setRecipesCount] = useState(null);

  //cancel filter by recipe tags
  const handleTag = (e) => {
    const filteredList = recipesList.filter((recipe) =>
      recipe.tags.includes(e)
    );
    setLocalRecipes(filteredList);
    setFilterTitle(`with ${e}`);
    setIsFiltered(true);
    setRecipesCount(filteredList.length);
  };

  //cancel filter by recipe tags
  const handleClearTag = (e) => {
    setRecipesLang('lang');
    setLocalRecipes(recipesList);
    setIsFiltered(false);
    setFilterTitle(``);
    setRecipesTitle(' ');
    setRecipesCount(recipesList.length);
    setRecipesLang(recipesLang);
    setDisableLangSelect(false);
  };

  const handleClearLang = (e) => {
    setLocalRecipes(recipesList);
    setIsFiltered(false);
    setDisableLangSelect(false);
    setRecipesCount(recipesList.length);
    setRecipesLangisFiltered(false);
    setRecipesLang('lang');
  };

  const clearAllFilters = () => {
    setLocalRecipes(recipesList);
    setRecipesLangisFiltered(false);
    setRecipesCount(recipesList.length);
    setRecipesLang('lang');
  };
  useEffect(() => {
    clearAllFilters();
  }, []);

  // Random recipe of the day
  const today = new Date().toLocaleDateString();
  let todayLocalStorage;
  let one = [];

  function getNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const setRandom = () => {
    if (!todayLocalStorage) {
      localStorage.setItem('today', JSON.stringify(today));
      todayLocalStorage = JSON.parse(localStorage.getItem('today'));
    }
    //get random num
    const randomRecipeLocalStorage = JSON.parse(
      localStorage.getItem('randomRecipe')
    );

    if (randomRecipeLocalStorage && today === todayLocalStorage) {
      one[0] = recipesList[randomRecipeLocalStorage];
      setOneRecipe(one);
    } else {
      const randomRecipe = getNumBetween(1, recipesList.length);
      localStorage.setItem('randomRecipe', JSON.stringify(randomRecipe));
      one[0] = recipesList[randomRecipe];
      setOneRecipe(one);
    }
  };

  useEffect(() => {
    setRandom();
  }, []);

  const recipeTitle = (
    <StyledH2 mt={'1rem'}>
      {recipesCount} {recipesTitle} {recipesCount === 1 ? 'recipe' : 'recipes'}
      {recipesLangisFiltered && (
        <>
          ,<span> lang - {recipesLang}</span>
        </>
      )}
      {isFiltered && <span> {filterTitle}</span>}
    </StyledH2>
  );

  return (
    <BaseLayout title="🍩 Recipes App">
      <StyledContainer>
        <StyledFlex mt="1rem" mb="0px">
          <RecipeTypeFilter
            setRecipesCount={setRecipesCount}
            setLocalRecipes={setLocalRecipes}
            setRecipesTitle={setRecipesTitle}
          />
          <LangSelect
            setLocalRecipes={setLocalRecipes}
            setRecipesCount={setRecipesCount}
          />
        </StyledFlex>
        {recipeTitle}
        {/* clear filter btn */}
        {isFiltered ? (
          <StyledFlex>
            <StyledButton onClick={handleClearTag}>
              Clear type filter
            </StyledButton>
          </StyledFlex>
        ) : null}

        {/* clear filter btn */}
        {recipesLangisFiltered ? (
          <StyledFlex>
            <StyledButton onClick={handleClearLang}>
              Clear lang filter
            </StyledButton>
          </StyledFlex>
        ) : null}

        {/* list of recipes */}
        <Recipes handleTag={handleTag} list={localRecipes} />
      </StyledContainer>
      {/* recipe of the day */}

      <h2>Random recipe of the day</h2>
      <Recipes handleTag={handleTag} list={oneRecipe} />
    </BaseLayout>
  );
};
export default Index;
