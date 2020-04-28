import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  StyledRecipe,
  StyledH2,
  StyledFlex,
  StyledTag,
  StyledButton,
} from '../styled';

const Recipes = (props) => {
  const { list, handleTag, type, isFiltered, filterTitle } = props;
  // const [localRecipes, setLocalRecipes] = useState([]);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [filterTitle, setFilterTitle] = useState('');

  // useEffect(() => {
  //   setLocalRecipes(list);
  // }, []);

  const recipeTitle = (
    <StyledH2 mt={'1rem'}>
      {type} recipes
      {isFiltered && <b> with filter - </b>}
      <span>{filterTitle}</span>
    </StyledH2>
  );
  return (
    <>
      {recipeTitle}
      <StyledFlex>
        {!!list &&
          list.length > 0 &&
          list.map((recipe) => (
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
                    <StyledTag key={t} onClick={() => handleTag(t)}>
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
    </>
  );
};
export default Recipes;
