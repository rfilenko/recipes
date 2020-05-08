import { useState, useEffect, useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';

import { StyledSelect } from 'components/styled';

const LangSelect = ({ setLocalRecipes, setRecipesCount }) => {
  const {
    recipesList,
    isFiltered,
    setIsFiltered,
    recipesLang,
    setRecipesLang,
    recipesLangisFiltered,
    setRecipesLangisFiltered,
    disableLangSelect,
    setDsableLangSelect,
  } = useContext(RecipesContext);
  //select
  const langList = recipesList.map((recipe) => recipe.lang);
  const filteredlangList = langList.filter(function (item, pos) {
    return langList.indexOf(item) == pos;
  });
  const handleSelect = (e) => {
    const val = e.target.value;
    const filteredList = recipesList.filter((item) => item.lang == val);
    setLocalRecipes(filteredList);
    setRecipesCount(filteredList.length);
    setRecipesLangisFiltered(true);
    setRecipesLang(val);
    setIsFiltered(false);
  };
  useEffect(() => {
    setRecipesLang('all');
  }, []);

  return (
    <StyledSelect
      disabled={disableLangSelect}
      title={disableLangSelect ? 'Clear filter first 😋' : null}
      onChange={handleSelect}
      defaultValue={recipesLang}
    >
      <option value="all" disabled={!isFiltered}>
        all
      </option>
      {filteredlangList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
};
export default LangSelect;
