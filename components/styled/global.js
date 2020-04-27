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
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
      text-decoration: underline;
      opacity: .75;
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
`;

export default GlobalStyle;
