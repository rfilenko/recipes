import { useState, createContext } from 'react';
import { RECIPES_LIST } from 'data/recipes';
export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const { children } = props;
  //all recipes
  const [recipesList, setRecipesList] = useState(RECIPES_LIST);
  const likedList = recipesList.filter((recipe) => recipe.type === 'liked');
  const newList = recipesList.filter((recipe) => recipe.type === 'new');

  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');

  const [recipesLang, setRecipesLang] = useState('lang');
  const [recipesLangisFiltered, setRecipesLangisFiltered] = useState(false);
  const [disableLangSelect, setDisableLangSelect] = useState(false);

  //translations
  const [recipeLang, setRecipeLang] = useState('Ingridients');
  const [timeCook, setTimeCook] = useState([
    'preparation',
    'time to cook',
    'total',
  ]);
  const [ingridientsTitle, setIngridientsTitle] = useState('');
  const [instructions, setInstructions] = useState([
    'Instructions',
    'Modifications',
  ]);
  const [tagsServings, setTagsServings] = useState(['tags', 'servings']);
  const [videoShareTitle, setVideoShareTitle] = useState([
    'Watch the video below',
    'share recipe',
  ]);

  return (
    <RecipesContext.Provider
      value={{
        recipesList,
        likedList,
        newList,
        isFiltered,
        setIsFiltered,
        filterTitle,
        setFilterTitle,
        recipesLang,
        setRecipesLang,
        recipesLangisFiltered,
        setRecipesLangisFiltered,
        disableLangSelect,
        setDisableLangSelect,
        recipeLang,
        setRecipeLang,
        timeCook,
        setTimeCook,
        ingridientsTitle,
        setIngridientsTitle,
        instructions,
        setInstructions,
        tagsServings,
        setTagsServings,
        videoShareTitle,
        setVideoShareTitle,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
export default RecipesContextProvider;
