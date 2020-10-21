import styled from 'styled-components';
import { theme } from '../styled/theme';
import { lighten } from 'polished';
import { useContext } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import { capitalize, getOccurrence } from '../../utils';

const CategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  li {
    color: ${theme.colors.reddish};
    font-size: 0.75rem;
    font-weight: bold;
    border: 2px solid ${theme.colors.reddish};
    margin-bottom: 0.25rem;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: ${theme.transition.normal};
    &:hover {
      color: ${theme.colors.white};
      background: ${lighten(0.2, `${theme.colors.reddish}`)};
    }
  }

  @media screen and (max-width: 767px) {
    li:not(:last-of-type) {
      margin-right: 0.25rem;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
const CategoriesList = ({ setLocalRecipes, setRecipesCount }) => {
  const { recipesList, setIsFiltered } = useContext(RecipesContext);

  const catList = [].concat(...recipesList.map((r) => r.category));
  const reducedCatList = catList.filter(
    (item, index) => catList.indexOf(item) === index
  );

  let arrCat = [];
  reducedCatList.forEach((item) => {
    let arr = [];
    arr.push(item, getOccurrence(catList, item));
    arrCat.push(arr);
  });
  const handleCatClick = (cat) => {
    const filteredList = recipesList.filter((item) =>
      item.category[0].includes(cat[0])
    );
    setLocalRecipes(filteredList);
    setIsFiltered(true);
    setRecipesCount(filteredList.length);
  };
  return (
    <div>
      <h3>All categories:</h3>
      <CategoriesUl>
        {arrCat &&
          arrCat.map((cat, idx) => (
            <li key={idx} onClick={() => handleCatClick(cat)}>
              {capitalize(cat[0])} <span>({cat[1]})</span>
            </li>
          ))}
      </CategoriesUl>
    </div>
  );
};
export default CategoriesList;
