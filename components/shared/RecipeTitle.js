import { useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { StyledH2 } from '../styled';

const RecipeTitle = ({ recipesCount, recipesTitle }) => {
  const {
    isFiltered,
    filterTitle,
    recipesLang,
    recipesLangisFiltered,
  } = useContext(RecipesContext);

  return (
    <StyledH2 mt={'1rem'} className="recipes-title">
      {isFiltered ? 'Found: ' : 'Total: '} {recipesCount} {recipesTitle}{' '}
      {recipesCount === 1 ? 'recipe' : 'recipes'}
      {recipesLangisFiltered && (
        <>
          ,<span> lang - {recipesLang}</span>
        </>
      )}
      {isFiltered && <span> {filterTitle}</span>}
    </StyledH2>
  );
};
export default RecipeTitle;
