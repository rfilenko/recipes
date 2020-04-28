import { useContext } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import Link from 'next/link';
import { StyledRecipe, StyledFlex, StyledTag, StyledButton } from '../styled';

const Recipes = (props) => {
  const { handleTag, list } = props;
  const { isFiltered, filterTitle } = useContext(RecipesContext);
  return (
    <>
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