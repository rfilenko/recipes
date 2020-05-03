import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
// import { RECIPES_LIST } from '../../data/recipes';
export const RecipesContext = createContext();
import { useRouter } from 'next/router';

const RecipesContextProvider = (props) => {
  const router = useRouter();
  // console.log(router.pathname);

  const { children } = props;
  const [recipesList, setRecipesList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/recipes`);
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
  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;
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
