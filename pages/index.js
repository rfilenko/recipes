import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import Recipes from 'components/shared/Recipes';
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
  } = useContext(RecipesContext);
  const likedList = recipesList.filter((recipe) => recipe.type === 'liked');
  const newList = recipesList.filter((recipe) => recipe.type === 'new');

  const [localRecipes, setLocalRecipes] = useState([]);
  const [recipesTitle, setRecipesTitle] = useState('All ');
  const handleTag = (e) => {
    const filteredList = recipesList.filter((recipe) =>
      recipe.tags.includes(e)
    );
    setLocalRecipes(filteredList);
    setFilterTitle(`with ${e}`);
    setIsFiltered(true);
  };
  const handleClearTag = (e) => {
    setLocalRecipes(recipesList);
    setIsFiltered(false);
    setFilterTitle(``);
    setRecipesTitle('All ');
  };
  //filter by type
  const handleFilter = (e) => {
    const type = e.currentTarget.textContent;
    if (type === '💖') {
      setLocalRecipes(likedList);
      setRecipesTitle('Liked ');
      setIsFiltered(true);
    } else {
      setLocalRecipes(newList);
      setRecipesTitle('New ');
      setIsFiltered(true);
    }
  };
  useEffect(() => {
    setLocalRecipes(recipesList);
  }, []);
  const recipeTitle = (
    <StyledH2 mt={'1rem'}>
      {recipesTitle} recipes
      {isFiltered && <span> {filterTitle}</span>}
    </StyledH2>
  );

  return (
    <BaseLayout title="Recipes App 🍩">
      <StyledContainer>
        <StyledFlex mt="1rem" mb="0px">
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
        </StyledFlex>
        {recipeTitle}
        {/* clear filter btn */}
        {isFiltered ? (
          <StyledFlex>
            <StyledButton onClick={handleClearTag}>Clear filter</StyledButton>
          </StyledFlex>
        ) : null}

        <Recipes handleTag={handleTag} list={localRecipes} />
      </StyledContainer>
    </BaseLayout>
  );
};
export default Index;
