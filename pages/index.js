import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from '../components/contexts/RecipesContext';
import Recipes from '../components/shared/Recipes';
import BaseLayout from '../components/layouts/BaseLayout';
import {
  StyledContainer,
  StyledFlex,
  StyledH2,
  StyledButton,
} from '../components/styled';

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
  const handleTag = (e) => {
    const filteredList = recipesList.filter((recipe) =>
      recipe.tags.includes(e)
    );
    setLocalRecipes(filteredList);
    setFilterTitle(`${e}`);
    setIsFiltered(true);
  };
  const handleClearTag = (e) => {
    setLocalRecipes(recipesList);
    setIsFiltered(false);
    setFilterTitle(``);
  };
  //filter by type
  const handleFilter = (e) => {
    const type = e.currentTarget.textContent;
    type === '🧡' ? setLocalRecipes(likedList) : setLocalRecipes(newList);
  };
  useEffect(() => {
    setLocalRecipes(recipesList);
  }, []);
  const recipeTitle = (
    <StyledH2 mt={'1rem'}>
      All recipes
      {isFiltered && <b> with </b>}
      <span>{filterTitle}</span>
    </StyledH2>
  );

  return (
    <BaseLayout title="Recipes App 🍩">
      <StyledContainer>
        <StyledFlex mt="1rem">
          <StyledButton mr=".5rem" onClick={handleFilter} title="Liked recipes">
            🧡
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
        {isFiltered && (
          <StyledFlex>
            <StyledButton onClick={handleClearTag}>Clear filter</StyledButton>
          </StyledFlex>
        )}

        <Recipes handleTag={handleTag} list={localRecipes} />
      </StyledContainer>
    </BaseLayout>
  );
};
export default Index;
