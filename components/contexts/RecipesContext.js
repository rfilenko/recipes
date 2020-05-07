import { useState, createContext, useEffect } from 'react';
import { RECIPES_LIST } from '../../data/recipes';
export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const { children } = props;
  const [recipesList, setRecipesList] = useState(RECIPES_LIST);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');
  //translations
  const [recipeLang, setRecipeLang] = useState('Ingridients');
  const [recipeServings, setRecipeServings] = useState('servings');
  const [ingridientsTitle, setIngridientsTitle] = useState('');
  const [instructions, setInstructions] = useState('Instructions');
  const [modifications, setModifications] = useState('Modifications');
  const [tags, setTags] = useState('tags');
  const [videoTitle, setVideoTitle] = useState('Watch the Video Below');

  return (
    <RecipesContext.Provider
      value={{
        recipesList,
        isFiltered,
        setIsFiltered,
        filterTitle,
        setFilterTitle,
        recipeLang,
        setRecipeLang,
        recipeServings,
        setRecipeServings,
        ingridientsTitle,
        setIngridientsTitle,
        instructions,
        setInstructions,
        modifications,
        setModifications,
        tags,
        setTags,
        videoTitle,
        setVideoTitle,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
export default RecipesContextProvider;
