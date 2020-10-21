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
  const [сategorie, setCategorie] = useState('Category');
  const [instructions, setInstructions] = useState([
    'Instructions',
    'Modifications',
  ]);
  const [tagsServings, setTagsServings] = useState(['tags', 'servings']);
  const [videoShareTitle, setVideoShareTitle] = useState([
    'Watch the video below',
    'share recipe',
  ]);

  const setLang = (lang) => {
    switch (lang) {
      case 'cz':
        setTimeCook(['připrava', 'čas vaření', 'celkem']);
        setIngridientsTitle('Suroviny');
        setInstructions(['Příprava jídla', 'varianty']);
        setTagsServings(['štítky', 'porce']);
        setVideoShareTitle(['Mrkněte taky na video', 'Sdilet recept']);
        break;
      case 'ua':
        setTimeCook(['підготовка', 'час готування', 'загалом']);
        setIngridientsTitle('Інгредієнти');
        setInstructions(['Приготування', 'Варіанти']);
        setTagsServings(['теги', 'порції']);
        setVideoShareTitle([
          'Перегляньте також відео рецепту',
          'Поширити рецепт',
        ]);
        break;
      case 'ru':
        setTimeCook(['подготовка', 'время готовки', 'всего']);
        setIngridientsTitle('Ингредиенты');
        setInstructions(['Приготовление', 'Варианты']);
        setTagsServings(['теги', 'порции']);
        setVideoShareTitle(['Посмотрите также видео', 'Поделиться рецептом']);
        break;
      default:
        setIngridientsTitle('Ingridients');
    }
  };

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
        сategorie,
        setCategorie,
        videoShareTitle,
        setVideoShareTitle,
        setLang,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
export default RecipesContextProvider;
