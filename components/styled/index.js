import styled, { css } from 'styled-components';
import { theme } from './theme';
import { darken } from 'polished';

export const StyledContainer = styled.div`
  font-size: ${theme.sizes.normal};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: ${theme.breakpoint.small}) {
    padding: 0 0.5rem;
  }
  @media screen and (min-width: ${theme.breakpoint.laptop}) {
    & > * {
      max-width: 85ch;
    }
  }
`;
export const StyledH2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
  span {
    color: ${theme.colors.reddish};
  }
`;
export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.spaceAround ? 'space-around' : 'center'};
  align-items: ${(props) => (props.align ? props.align : 'inherit')};
  /* TODO - make mixin for margin */
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
  margin-left: ${(props) => (props.ml ? props.ml : '0')};
  margin-right: ${(props) => (props.mr ? props.mr : '0')};
`;
export const StyledHeader = styled.header`
  background-image: linear-gradient(
    120deg,
    ${theme.colors.primary},
    ${theme.colors.yellow},
    ${theme.colors.primary}
  );
  box-shadow: ${theme.boxShadow.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: relative;
  height: 44px;
  position: fixed;
  top: 0;
  z-index: 99;

  a {
    color: ${theme.colors.white};
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    margin: 0 0.5rem;
    text-transform: uppercase;
    transition: ${theme.transition.normal};

    &:hover {
      color: ${darken(0.2, `${theme.colors.primary}`)};
      opacity: 0.89;
      text-decoration: none;
    }
  }
`;

export const StyledButton = styled.button`
  background: ${(props) =>
    props.variant ? theme.colors[props.variant] : theme.colors.reddish};
  border: none;
  border-radius: 0.5em;
  box-shadow: ${theme.boxShadow.small};
  color: ${theme.colors.white};
  cursor: pointer;
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '.5em')};
  margin-left: ${(props) => (props.ml ? props.ml : '0')};
  margin-right: ${(props) => (props.mr ? props.mr : '0')};
  padding: 0.5em 1.5em;
  transition: ${theme.transition.normal};
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: ${theme.boxShadow.medium};
    opacity: 0.75;
    transform: translate3d(0px, -1px, 0px);
  }
  &:focus {
    outline: 1px dotted
      ${(props) =>
        props.variant ? theme.colors.secondary : theme.colors.reddish};
    outline-offset: 2px;
  }
`;
export const StyledFooter = styled.footer`
  background-image: linear-gradient(120deg, #38cfd9, #ff5733, #38cfd9);
  padding: 0.5rem;
`;

export const StyledTag = styled(StyledButton)`
  color: ${theme.colors.bodyText};
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
  max-width: 20rem;
  position: relative;

  @media screen and (min-width: ${theme.breakpoint.mobile}) {
    margin-left: 1rem;
    max-width: 16rem;
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
    background: rgba(0, 0, 0, 0.15);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .more {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: transparent;
    border: 1px solid ${theme.colors.white};
    font-weight: bold;
    padding: 0.5em 1.5em;
    text-transform: capitalize;
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
    height: 100%;
    width: 100%;
    transition: ${theme.transition.normal};
  }
  &:hover {
    img {
      transform: scale(1.025, 1.025);
    }
  }
`;
export const StyledText = styled.h4`
  color: ${theme.colors.text};
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-bottom: 0;
  margin-top: 1rem;
  text-transform: uppercase;
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
    font-size: 75%;
    font-weight: bold;
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
  .instructions {
    ul {
      list-style: decimal;
      padding: 0;
      padding-left: 1rem;
    }
    li {
      line-height: 1.5rem;
      margin-bottom: 0.75rem;
      text-align: justify;
    }
  }
`;

export const StyledVideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 2rem;
  & > div {
    max-width: 100%;
    height: 0 !important;
  }
  h4 {
    font-size: 1.25rem;
    text-align: center;
  }
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
