import { useContext } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { RecipesContext } from '../contexts/RecipesContext';
import Link from 'next/link';
import styled from 'styled-components';
import { StyledRecipe, StyledGrid, StyledTag, StyledButton } from '../styled';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const StyledTagsWrap = styled('p')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const Recipes = (props) => {
  const { handleTag, list } = props;
  const { isFiltered, filterTitle } = useContext(RecipesContext);

  return (
    <>
      <StyledGrid mt="1rem">
        {!!list &&
          list.length > 0 &&
          list.map((recipe) => (
            <StyledRecipe key={recipe.name}>
              <h4>
                <Link href={`/recipe/[slug]`} as={`/recipe/${recipe.id}`}>
                  <a>{recipe.name}</a>
                </Link>
              </h4>

              <Link href={`/recipe/[slug]`} as={`/recipe/${recipe.id}`}>
                <StyledButton className="more">
                  <span>more</span> <FaLongArrowAltRight />
                </StyledButton>
              </Link>
              <div>
                <p>
                  preparation: {recipe.time_prep}, {''}
                  total time: <span>{recipe.time_total}</span>
                </p>
                <StyledTagsWrap>
                  {recipe.tags.map((t) => (
                    <StyledTag
                      key={t}
                      onClick={
                        handleTag
                          ? () => handleTag(t)
                          : () => console.log('none tags')
                      }
                    >
                      {t}
                    </StyledTag>
                  ))}
                </StyledTagsWrap>
              </div>

              <div className="img-container">
                <Image
                  cloudName={process.env.CLOUDINARY_CLOUD_NAME}
                  publicId={recipe.slugUrl}
                  alt={recipe.name.toLowerCase()}
                >
                  <Transformation fetchFormat="auto" quality="auto" />
                </Image>
                {recipe.img && recipe.img.length > 0 ? <p>no image</p> : null}
              </div>
            </StyledRecipe>
          ))}
      </StyledGrid>
    </>
  );
};
export default Recipes;
