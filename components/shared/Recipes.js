import { useContext } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { RecipesContext } from '../contexts/RecipesContext';
import Link from 'next/link';
import { StyledRecipe, StyledGrid, StyledTag, StyledButton } from '../styled';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Recipes = (props) => {
  const { handleTag, list } = props;
  const { isFiltered, filterTitle } = useContext(RecipesContext);
  return (
    <>
      <StyledGrid mt="1rem">
        {!!list &&
          list.length > 0 &&
          list.map((recipe) => (
            <Link
              href={`/recipe/[slug]`}
              as={`/recipe/${recipe.id}`}
              key={recipe.name}
            >
              <StyledRecipe>
                <h4>{recipe.name}</h4>
                <div>
                  <p>
                    preparation: {recipe.time_prep}, {''}
                    total time: <span>{recipe.time_total}</span>
                  </p>
                  <p>
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
                  </p>
                </div>
                <div className="img-container">
                  <Image
                    cloudName={process.env.CLOUDINARY_CLOUD_NAME}
                    publicId={recipe.slugUrl}
                    alt={recipe.name.toLowerCase()}
                  >
                    <Transformation
                      fetchFormat="auto"
                      quality="auto"
                      effect="saturation:50"
                    />
                  </Image>
                  {recipe.img && recipe.img.length > 0 ? <p>no image</p> : null}
                </div>
              </StyledRecipe>
            </Link>
          ))}
      </StyledGrid>
    </>
  );
};
export default Recipes;
