import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
// import { RECIPES_LIST } from '../../data/recipes';
export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const { children } = props;
  const [recipesList, setRecipesList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(`api/recipes`);
      setRecipesList(res.data);
      localStorage.setItem('recipesLocal', JSON.stringify(res.data));
      console.log('Data stored in localStorage!', res.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('recipesLocal')) {
      const recipesFromLocalStorage = JSON.parse(
        localStorage.getItem('recipesLocal')
      );
      setRecipesList(recipesFromLocalStorage);
    } else {
      fetchData();
    }
  }, []);
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
