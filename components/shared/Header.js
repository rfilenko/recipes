import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { StyledHeader, StyledFlex, StyledButton } from '../styled/';

const Header = () => {
  const router = useRouter();
  const isRecipePage = router.pathname.includes('/recipes');
  const handleBack = () => {
    router.push('/');
  };

  return (
    <StyledHeader>
      <StyledFlex>
        {isRecipePage && (
          <StyledButton variant="primary" onClick={handleBack} mr="1rem" mb="0">
            Go back &#8592;
          </StyledButton>
        )}

        <StyledFlex align="center">
          <Logo />
          <Link href="/">
            <a>Recipes app</a>
          </Link>
        </StyledFlex>
      </StyledFlex>
    </StyledHeader>
  );
};
export default Header;
