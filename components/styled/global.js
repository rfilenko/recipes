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
      padding: 1rem 2rem;
    }
    input {
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
        border-color: #FF5733;
      }
    }
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

`;

export default GlobalStyle;
