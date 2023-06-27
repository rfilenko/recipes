import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    color: ${theme.colors.text};
    font-family: 'Merriweather', serif;
  }

  html[data-theme-preference=dark] {
    body{
      background: ${theme.darkTheme.colors.bodyBg};
      color: ${theme.darkTheme.colors.text};
    }

    h4 {
      color: ${theme.darkTheme.colors.bodyText};
    }

    h4[class^="styled__StyledText"] svg {
      fill: ${theme.darkTheme.colors.bodyText};
    }
    [class^="styled__StyledSelect"] {
      background:${theme.darkTheme.colors.reddish};
      color: ${theme.darkTheme.colors.bodyText};
      border-color: ${theme.darkTheme.colors.reddish};
    }
    [class^="styled__StyledButton"] {
      background:${theme.darkTheme.colors.reddish}
    }

    .more {
      border-color:${theme.darkTheme.colors.reddish}
    }
    .more:hover {
      outline-color: ${theme.darkTheme.colors.orange};
    }
    .more:before {
      background: linear-gradient( -65deg,#2a2a2a,${theme.darkTheme.colors.orange});
    }

    .img-container:before {
      background: rgba(0,0,0,0.15);
    }

    [class^="styled__StyledHeader"] {
      background-image: linear-gradient( 120deg,#165155,#777922,#16585d );
    }
    [class^="styled__StyledHeader"] svg circle {
      filter: brightness(0.5);
    }

    .styled-input, .prep_time, .desc .serves {
      color: ${theme.darkTheme.colors.bodyText};
    }

    [class^="CategoriesList__CategoriesUl"] li {
      background:${theme.darkTheme.colors.reddish};
      border-color: ${theme.darkTheme.colors.reddish};
      color:${theme.darkTheme.colors.text};
    }
  }

  main {
        margin-top: 3.5rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-in;
    display: inline-block;
    &:hover {
      text-decoration: underline;
      opacity: .75;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Fira Sans', sans-serif;
    margin-top: 0.5em;
  }
  .filter-name {
    @media screen and (max-width: 460px) {
      padding: 1rem 2rem 0;
    }
  }
  .styled-input {
    border-radius: 0.5em;
    box-shadow: 0 5px 10px rgba(0,0,0,0.12);
    margin-right: .5rem;
    padding: 0.5em 1.5em;
    margin: 0 0.5em;
    min-width: 2rem;
    border: 2px dashed #2a2a2a;
    box-shadow: 1px 1px 13px 1px rgba(0,0,0,0.13);

      &:focus {
        background: rgba(255, 165, 0, .11);
        box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        border-color: ${theme.colors.reddish};
        color:  ${theme.colors.reddish};
      }
  }
  .servingsInput {
    min-width: 3rem;
    padding: 0.5rem;
    font-weight: bold;
  }
  ::placeholder { 
    color: #2a2a2a;
  }
  .hidden {
    display: none;
    visibility: hidden;
  }
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;  /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;            /* 3 */
}
.main-section {
  h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
.category-lastList {
  padding:0;
  border: 1px solid red;
}

@media screen and (min-width: ${theme.breakpoint.laptop}) {
  .main-section {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3rem;
  }
}

`;

export default GlobalStyle;
