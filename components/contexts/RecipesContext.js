import { useState, createContext } from 'react';
import { RECIPES_LIST } from '../../data/recipes';
export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const { children } = props;
  const [recipesList, setRecipesList] = useState(RECIPES_LIST);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');
  return (
    <RecipesContext.Provider
      value={{
        recipesList,
        isFiltered,
        setIsFiltered,
        filterTitle,
        setFilterTitle,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
export default RecipesContextProvider;
