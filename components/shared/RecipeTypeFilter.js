import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { StyledButton } from 'components/styled';

const RecipeTypeFilter = ({
  setLocalRecipes,
  setRecipesTitle,
  setRecipesCount,
}) => {
  const {
    recipesList,
    likedList,
    newList,
    setIsFiltered,
    setDisableLangSelect,
  } = useContext(RecipesContext);

  //filter recipes by type
  const handleFilter = (e) => {
    const type = e.currentTarget.textContent;
    setIsFiltered(true);
    setDisableLangSelect(true);
    if (type === '💖') {
      setLocalRecipes(likedList);
      setRecipesTitle('liked ');
      setRecipesCount(likedList.length);
    } else {
      setLocalRecipes(newList);
      setRecipesTitle('new ');
      setRecipesCount(newList.length);
    }
  };
  useEffect(() => {
    setLocalRecipes(recipesList);
    setRecipesCount(recipesList.length);
  }, []);

  return (
    <>
      <StyledButton mr=".5rem" onClick={handleFilter} title="Liked recipes">
        💖
      </StyledButton>
      <StyledButton
        mr=".5rem"
        variant="primary"
        title="New recipes"
        onClick={handleFilter}
      >
        🆕
      </StyledButton>
    </>
  );
};
export default RecipeTypeFilter;
