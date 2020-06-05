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
  const [recipesTitle, setRecipesTitle] = useState(' ');
  const [recipesCount, setRecipesCount] = useState(null);

  const [value, setValue] = useState('');
  const filterRecipesByName = () => {
    const filteredList = recipesList.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setLocalRecipes(filteredList);
    setRecipesCount(filteredList.length);
  };
  const handleInput = (e) => {
    setValue(e.target.value);
    filterRecipesByName;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    filterRecipesByName();
  };

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

          {/* //filter recipes by name */}
          <form className="filter-name" onSubmit={handleFormSubmit}>
            <input
              type="text"
              onChange={handleInput}
              onKeyUp={filterRecipesByName}
              defaultValue={value}
              placeholder="search a recipe"
            />
          </form>
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
    </BaseLayout>
  );
};
export default Index;
