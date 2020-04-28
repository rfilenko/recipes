import { useState, useEffect } from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import Recipes from '../components/shared/Recipes';
import {
  StyledContainer,
  StyledRecipe,
  StyledH2,
  StyledFlex,
  StyledTag,
  StyledButton,
} from '../components/styled';
import { LIKED_RECIPES_LIST, NEW_RECIPES_LIST } from '../data/recipes';

const Index = () => {
  const [localRecipes, setLocalRecipes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');

  const handleTag = (e) => {
    // let currTag = e.currentTarget.textContent;
    let currTag = e;
    const filteredList = localRecipes.filter((recipe) =>
      recipe.tags.includes(currTag)
    );
    setLocalRecipes(filteredList);
    setFilterTitle(`${currTag}`);
    setIsFiltered(true);
  };
  const handleClearTag = (e) => {
    setLocalRecipes(LIKED_RECIPES_LIST);
    setIsFiltered(false);
    setFilterTitle(``);
  };
  useEffect(() => {
    setLocalRecipes(LIKED_RECIPES_LIST);
  }, []);

  return (
    <BaseLayout title="Recipes app 🍩">
      <StyledContainer>
        {/* clear filter btn */}
        {isFiltered && (
          <StyledFlex>
            <StyledButton mt="1rem" onClick={handleClearTag}>
              Clear filter
            </StyledButton>
          </StyledFlex>
        )}

        <Recipes
          type={'liked'}
          handleTag={handleTag}
          list={LIKED_RECIPES_LIST}
        />
        <Recipes type={'new'} handleTag={handleTag} list={NEW_RECIPES_LIST} />
      </StyledContainer>
    </BaseLayout>
  );
};
export default Index;
