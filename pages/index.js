import { useState, useEffect } from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import {
  StyledContainer,
  StyledRecipe,
  StyledH2,
  StyledFlex,
  StyledTag,
  StyledButton,
} from '../components/styled';
import { RECIPES_LIST } from '../data/recipes';

const Index = () => {
  const [localRecipes, setLocalRecipes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');

  const handleTag = (e) => {
    let currTag = e.currentTarget.textContent;
    const filteredList = localRecipes.filter((recipe) =>
      recipe.tags.includes(currTag)
    );
    setLocalRecipes(filteredList);
    setFilterTitle(`${currTag}`);
    setIsFiltered(true);
  };
  const handleClearTag = (e) => {
    setLocalRecipes(RECIPES_LIST);
    setIsFiltered(false);
    setFilterTitle(``);
  };
  useEffect(() => {
    setLocalRecipes(RECIPES_LIST);
  }, []);

  const recipeTitle = (
    <StyledH2>
      All recipes
      {isFiltered && <b> with filter - </b>}
      <span>{filterTitle}</span>
    </StyledH2>
  );

  return (
    <BaseLayout title="Recipes app 🍩">
      <StyledContainer>
        {recipeTitle}
        {isFiltered && (
          <StyledButton mb="1rem" onClick={handleClearTag}>
            Clear filter
          </StyledButton>
        )}
        <StyledFlex>
          {!!localRecipes &&
            localRecipes.length > 0 &&
            localRecipes.map((recipe) => (
              <StyledRecipe key={recipe.name}>
                <h4>{recipe.name}</h4>
                <Link href={`/recipes/[slug]`} as={`/recipes/${recipe.id}`}>
                  <StyledButton className="read-more"> read more </StyledButton>
                </Link>
                <div>
                  <p>
                    preparation: {recipe.time_prep}, {''}
                    total time: <span>{recipe.time_total}</span>
                  </p>
                  <p>
                    {recipe.tags.map((t) => (
                      <StyledTag key={t} onClick={handleTag}>
                        {t}
                      </StyledTag>
                    ))}
                  </p>
                </div>
                <div className="img-container">
                  <img src={recipe.image} alt={recipe.name} />
                </div>
              </StyledRecipe>
            ))}
        </StyledFlex>
      </StyledContainer>
    </BaseLayout>
  );
};
export default Index;
