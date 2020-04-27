import styled, { css } from 'styled-components';
import { theme } from './theme';

const boxShadow = '1px 1px 13px 1px rgba(0, 0, 0, 0.13)';

export const StyledContainer = styled.div`
  font-size: ${theme.SIZES.normal};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 767px) {
    padding: 0 0.5rem;
  }
`;
export const StyledH2 = styled.h2`
  text-align: center;
  span {
    color: ${theme.COLORS.reddish};
  }
`;
export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spaceAround ? 'space-around' : 'center'};
`;

export const StyledButton = styled.button`
  border: none;
  background: ${(props) => (props.variant ? 'orange' : theme.COLORS.reddish)};
  color: ${theme.COLORS.white};
  padding: 0.5em 1.5em;
  margin: 0 0 ${(props) => (props.mb ? props.mb : '.5em')};
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;

export const StyledTag = styled(StyledButton)`
  font-size: 75%;
  padding: 0.5em;
  margin: 0 0.25em;
`;

export const StyledRecipe = styled.div`
  box-shadow: ${boxShadow};
  position: relative;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 20rem;

  @media screen and (min-width: 700px) {
    margin-left: 1rem;
  }

  & > *:not(.img-container) {
    padding: 0.5em;
  }
  .img-container {
    position: relative;
    max-height: 200px;
    overflow: hidden;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }
  .img-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }
  .read-more {
    background: transparent;
    border: 1px solid ${theme.COLORS.white};
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 0.5em 1.5em;
    font-weight: bold;
    z-index: 3;
  }

  h4 {
    color: ${theme.COLORS.bodyText};
    margin: 0;
    text-transform: uppercase;
  }
  > div {
    flex-grow: 3;
  }
  p:nth-child(2) {
    display: flex;
    margin: 0;
  }
  p {
    font-size: 65%;
    margin: 0 0 0.5em;
    span {
      font-weight: bold;
    }
  }

  img {
    object-fit: cover;
  }
`;
export const StyledRecipeDetail = styled.div`
  .prep_time {
    font-size: 0.8rem;
    color: #ccc;
    @media screen and (min-width: 768px) {
      display: flex;
    }
  }
  p {
    margin: 0 0 0.5rem;
  }
  .tags {
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    font-size: 60%;
    p {
      display: flex;
      align-items: center;
    }
  }

  .recipe_img {
    position: relative;
    @media screen and (min-width: 768px) {
      width: 35%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25em;
      @media screen and (max-width: 767px) {
        max-height: 250px;
        margin-bottom: 1rem;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(120deg, #eaee44, #33d0ff);
      opacity: 0.35;
      mix-blend-mode: hard-light;
    }
  }

  .desc {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    margin-bottom: 1rem;

    div:nth-child(2) {
      max-width: 30rem;
    }
    ul {
      list-style: disc;
      margin-top: 0.5em;
    }
    li {
      margin-bottom: 0.25em;
      font-size: 1rem;
    }
  }
`;
