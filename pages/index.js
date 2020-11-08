import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import Recipes from 'components/shared/Recipes';
import RecipeTypeFilter from 'components/shared/RecipeTypeFilter';
import LangSelect from 'components/shared/LangSelect';
import BaseLayout from 'components/layouts/BaseLayout';
import { StyledContainer, StyledFlex } from 'components/styled';
import FilterButton from '../components/shared/FilterButton';
import CategoriesList from '../components/shared/CategoriesList';
import RecipeTitle from '../components/shared/RecipeTitle';

const Index = () => {
  const {
    recipesList,
    isFiltered,
    setIsFiltered,
    setFilterTitle,
    setRecipesLang,
    recipesLangisFiltered,
    setRecipesLangisFiltered,
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
  const handleInput = ({ target }) => {
    setValue(target.value);
    filterRecipesByName;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
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

  const clearAllFilters = () => {
    setLocalRecipes(recipesList);
    setRecipesLangisFiltered(false);
    setRecipesCount(recipesList.length);
    setRecipesLang('lang');
  };
  useEffect(() => {
    clearAllFilters();
  }, []);

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
              className="styled-input servingsInput"
              id="search-recipe"
              type="text"
              onChange={handleInput}
              onKeyUp={filterRecipesByName}
              defaultValue={value}
              placeholder="search a recipe"
            />
            <label className="sr-only" htmlFor="search-recipe">
              Search a recipe
            </label>
          </form>

          {isFiltered && (
            <FilterButton
              handleFilter="handleClearTag"
              btnText="Clear type filter"
              setLocalRecipes={setLocalRecipes}
              setRecipesTitle={setRecipesTitle}
              setRecipesCount={setRecipesCount}
            />
          )}

          {recipesLangisFiltered && (
            <FilterButton
              handleFilter="handleClearLang"
              btnText="Clear lang filter"
              setLocalRecipes={setLocalRecipes}
              setRecipesTitle={setRecipesTitle}
              setRecipesCount={setRecipesCount}
            />
          )}
        </StyledFlex>
        <RecipeTitle recipesTitle={recipesTitle} recipesCount={recipesCount} />
        <section className="main-section">
          {/* list of categories */}
          <CategoriesList
            setLocalRecipes={setLocalRecipes}
            setRecipesCount={setRecipesCount}
            clearAllFilters={clearAllFilters}
          />
          {/* list of recipes */}
          <Recipes handleTag={handleTag} list={localRecipes} />
        </section>
      </StyledContainer>
    </BaseLayout>
  );
};
export default Index;
