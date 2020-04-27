import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styled/theme';
import { darken } from 'polished';

const StyledHeader = styled.header`
  background: ${theme.colors.primary};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${theme.colors.white};
    margin: 0 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Fira Sans', sans-serif;
    text-decoration-color: ${theme.colors.secondary};
    transition: all 0.15s ease;
    &:hover {
      text-decoration-style: double;
      text-decoration-line: underline;
      opacity: 0.89;
      color: ${darken(0.2, `${theme.colors.primary}`)};
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>Recipes</a>
      </Link>
    </StyledHeader>
  );
};
export default Header;
