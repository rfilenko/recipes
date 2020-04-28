import styled, { css } from 'styled-components';
import { theme } from './theme';

export const StyledContainer = styled.div`
  font-size: ${theme.sizes.normal};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: ${theme.breakpoint.small}) {
    padding: 0 0.5rem;
  }
`;
export const StyledH2 = styled.h2`
  text-align: center;
  span {
    color: ${theme.colors.reddish};
  }
`;
export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spaceAround ? 'space-around' : 'center'};
  /* TODO - make mixin for margin */
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '.5em')};
  margin-left: ${(props) => (props.ml ? props.ml : '0')};
  margin-right: ${(props) => (props.mr ? props.mr : '0')};
`;

export const StyledButton = styled.button`
  background: ${(props) =>
    props.variant ? theme.colors[props.variant] : theme.colors.reddish};
  border: none;
  border-radius: 0.5em;
  box-shadow: ${theme.boxShadow.normal};
  color: ${theme.colors.white};
  cursor: pointer;
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '.5em')};
  margin-left: ${(props) => (props.ml ? props.ml : '0')};
  margin-right: ${(props) => (props.mr ? props.mr : '0')};
  padding: 0.5em 1.5em;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
  &:focus {
    outline: 1px dotted
      ${(props) =>
        props.variant ? theme.colors.secondary : theme.colors.reddish};
    outline-offset: 2px;
  }
`;

export const StyledTag = styled(StyledButton)`
  color: ${theme.colors.bodyText};
  font-size: 75%;
  margin: 0 0.25em;
  padding: 0.5em;

  @media screen and (max-width: ${theme.breakpoint.mobile}) {
    font-size: ${theme.sizes.small};
    letter-spacing: 0.05em;
  }
`;

export const StyledRecipe = styled.div`
  box-shadow: ${theme.boxShadow.normal};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 16rem;
  position: relative;

  @media screen and (min-width: ${theme.breakpoint.small}) {
    margin-left: 1rem;
  }

  & > *:not(.img-container) {
    padding: 0.5em;
  }
  .img-container {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    max-height: 200px;
    overflow: hidden;
    position: relative;
  }
  .img-container:before {
    background: rgba(0, 0, 0, 0.25);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .read-more {
    position: absolute;
    background: transparent;
    border: 1px solid ${theme.colors.white};
    bottom: 1rem;
    font-weight: bold;
    right: 1rem;
    padding: 0.5em 1.5em;
    z-index: 3;
    &:focus {
      outline: 1px dotted ${theme.colors.white};
      outline-offset: 2px;
    }
  }

  h4 {
    color: ${theme.colors.bodyText};
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
    color: ${theme.colors.mutedText};
    font-size: 0.8rem;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      display: flex;
    }
  }
  p {
    margin: 0 0 0.5rem;
  }
  .tags {
    display: flex;
    font-size: 60%;
    justify-content: center;
    margin-bottom: 1rem;

    p {
      display: flex;
      align-items: center;
    }
  }

  .recipe_img {
    position: relative;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      width: 35%;
    }

    img {
      border-radius: 0.25em;
      height: 100%;
      object-fit: cover;
      width: 100%;

      @media screen and (max-width: ${theme.breakpoint.small}) {
        margin-bottom: 1rem;
        max-height: 250px;
      }
    }

    &::before {
      background-image: linear-gradient(
        120deg,
        ${theme.colors.yellow},
        ${theme.colors.primary}
      );
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: hard-light;
      opacity: 0.35;
    }
  }

  .desc {
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      display: flex;
      justify-content: space-between;
    }
    margin-bottom: 1rem;

    div:nth-child(2) {
      max-width: 30rem;
    }
    p {
      color: ${theme.colors.text};
      font-weight: bold;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    ul {
      list-style: disc;
      margin-top: 0.5em;
    }
    li {
      font-size: 1rem;
      margin-bottom: 0.25em;
    }
  }
`;
