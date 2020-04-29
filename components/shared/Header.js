import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styled/theme';
import { darken } from 'polished';
import Logo from './Logo';

const StyledHeader = styled.header`
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
  position: fixed;
  top: 0;
  z-index: 99;
  height: 44px;

  a {
    color: ${theme.colors.white};
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    margin: 0 0.5rem;
    text-transform: uppercase;
    transition: all 0.15s ease;

    &:hover {
      color: ${darken(0.2, `${theme.colors.primary}`)};
      opacity: 0.89;
      text-decoration: none;
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Link href="/">
        <a>Recipes app</a>
      </Link>
    </StyledHeader>
  );
};
export default Header;
