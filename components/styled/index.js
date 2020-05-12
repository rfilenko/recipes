import styled, { css } from 'styled-components';
import { theme } from './theme';
import { darken, rem } from 'polished';

export const StyledContainer = styled.div`
  font-size: ${theme.sizes.normal};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: ${theme.breakpoint.small}) {
    padding: 0 0.5rem;
  }
  @media screen and (min-width: ${theme.breakpoint.laptop}) {
    &&& .content {
      max-width: 85ch;
      margin: 0 auto 0.5rem;
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
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 2rem 3rem;
  justify-content: center;
  max-width: unset;
  /* TODO - make mixin for margin */
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '1rem')};
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
const linearBg = `background:linear-gradient(
    75deg,
    ${theme.colors.reddish},
    ${theme.colors.yellow}
  );`;

export const StyledButton = styled.button`
  background: ${(props) =>
    props.variant ? theme.colors[props.variant] : theme.colors.reddish};

  ${(props) => props.linear && linearBg}
  border: none;
  border-radius: 0.5em;
  box-shadow: ${theme.boxShadow.small};
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
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
  & svg {
    margin: 0 0.5rem;
  }
`;
export const StyledFooter = styled.footer`
  background-image: linear-gradient(120deg, #38cfd9, #ff5733, #38cfd9);
  padding: 0.5rem;
`;
export const StyledSelect = styled.select`
  margin: 0 0.5em;
  min-width: 2rem;
  border: 2px dashed ${theme.colors.bodyText};
  box-shadow: ${theme.boxShadow.normal};
  color: ${theme.colors.bodyText};
  padding: 0 0.5em;
  max-height: 1.85rem;
  cursor: pointer;

  &:focus {
    box-shadow: ${theme.boxShadow.medium};
    border-color: ${theme.colors.reddish};
    outline: none;
  }
  &[disabled] {
    color: ${theme.colors.mutedText};
    border-color: ${theme.colors.mutedText};
    cursor: no-drop;
  }
`;

export const StyledTag = styled(StyledButton)`
  color: ${theme.colors.bodyText};
  padding: 0.5em;
  & + & {
    margin-left: 0.25em;
  }

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
  /* margin-bottom: 1rem;
  max-width: 20rem; */
  position: relative;

  /* @media screen and (min-width: ${theme.breakpoint.mobile}) {
    margin-left: 1rem;
    max-width: 16rem;
  } */

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
    object-position: right;
    height: 100%;
    width: 100%;
    transition: ${theme.transition.normal};
    min-height: ${rem(256)};
    min-width: ${rem(350)};
  }
  &:hover {
    /* transition: ${theme.transition.normal}; */
    box-shadow: ${theme.boxShadow.medium};
    img {
      transform: scale(1.025, 1.025);
    }
  }
`;
export const StyledText = styled.h4`
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-bottom: 0;
  margin-top: ${(props) => (props.mt ? props.mt : '1rem')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
  text-transform: uppercase;
  & svg {
    margin: 0 0.5rem;
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
    display: flex;
    align-items: center;
    & svg {
      margin-right: 0.25rem;
    }
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
    .serves {
      color: ${theme.colors.mutedText};
      font-size: 0.8rem;
      margin-left: 0.5em;
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
      counter-reset: instructions-counter;
      list-style: none;
      padding: 0;
      padding-left: 0.5rem;
      @media screen and (min-width: ${theme.breakpoint.mobile}) {
        padding-left: 2rem;
      }
    }
    li {
      line-height: 1.5rem;
      margin-bottom: 0.75rem;
      text-align: justify;
      position: relative;
      counter-increment: instructions-counter;
      padding-left: 1.5rem;
      @media screen and (min-width: ${theme.breakpoint.mobile}) {
        padding-left: 1rem;
      }

      &:before {
        background: ${theme.colors.primary};
        border-radius: 999px;
        color: black;
        content: counter(instructions-counter) '. ';
        font-family: 'Fira Sans', sans-serif;
        font-weight: bold;
        position: absolute;
        left: -4%;
        height: 0.75rem;
        width: 0.75rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        z-index: -1;
      }
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
