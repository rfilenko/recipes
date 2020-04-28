import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styled/theme';
import { darken } from 'polished';

const StyledHeader = styled.header`
  background-image: linear-gradient(
    120deg,
    ${theme.colors.yellow},
    ${theme.colors.primary}
  );
  box-shadow: ${theme.boxShadow.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;

  a {
    color: ${theme.colors.white};
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    margin: 0 0.5rem;
    text-decoration: none;
    text-decoration-color: ${theme.colors.secondary};
    text-transform: uppercase;
    transition: all 0.15s ease;
    &:hover {
      color: ${darken(0.2, `${theme.colors.primary}`)};
      text-decoration-line: underline;
      text-decoration-style: double;
      opacity: 0.89;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>Recipes app</a>
      </Link>
    </StyledHeader>
  );
};
export default Header;
