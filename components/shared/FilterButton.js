import { useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { StyledFlex, StyledButton } from 'components/styled';

const FilterButton = ({
  handleFilter,
  btnText,
  setLocalRecipes,
  setRecipesTitle,
  setRecipesCount,
}) => {
  const {
    recipesList,
    setIsFiltered,
    setFilterTitle,
    recipesLang,
    setRecipesLang,
    setDisableLangSelect,
    setRecipesLangisFiltered,
  } = useContext(RecipesContext);

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
  //cancel filter by lang
  const handleClearLang = (e) => {
    setLocalRecipes(recipesList);
    setIsFiltered(false);
    setDisableLangSelect(false);
    setRecipesCount(recipesList.length);
    setRecipesLangisFiltered(false);
    setRecipesLang('lang');
  };

  const handleFilterButton = () => {
    if (handleFilter === 'handleClearTag') {
      handleClearTag();
    }
    if (handleFilter === 'handleClearLang') {
      handleClearLang();
    }
  };
  return (
    <StyledFlex mb="0" posAbs>
      <StyledButton className="filter-btn" onClick={handleFilterButton}>
        {btnText}
      </StyledButton>
    </StyledFlex>
  );
};

export default FilterButton;
