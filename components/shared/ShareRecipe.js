import React, { useContext } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { StyledFlex, StyledButton } from '../styled/';
import { FaShareAlt } from 'react-icons/fa';

const ShareRecipe = ({ recipe }) => {
  const { videoShareTitle } = useContext(RecipesContext);

  const shareAPI = () => {
    const recipeFullUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: `${recipe.slugUrl}`,
          text: `${recipe.description}`,
          url: `${recipeFullUrl}`,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  };
  return (
    <>
      {navigator.share && (
        <StyledFlex>
          <StyledButton linear onClick={shareAPI} mb="1rem">
            {videoShareTitle[1]}
            <FaShareAlt />
          </StyledButton>
        </StyledFlex>
      )}
    </>
  );
};
export default ShareRecipe;
