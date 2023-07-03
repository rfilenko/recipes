import { useContext, useEffect } from 'react';
import { RecipesContext } from 'components/contexts/RecipesContext';
import { StyledFlex, StyledButton } from 'components/styled';

const ToggleThemeButton = ({ btnText }) => {
    let prefersDark;
    let currentTheme;
    useEffect(() => {
        prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        if (localStorage.getItem('theme-preference')) {
            currentTheme = localStorage.getItem('theme-preference');
        } else if (prefersDark.matches) {
            currentTheme = 'dark';
        } else {
            // default
            currentTheme = 'light';
        }
        document.documentElement.setAttribute('data-theme-preference', currentTheme);
    }, []);

 
    const handleFilterButton = () => {
        currentTheme = document.documentElement.getAttribute('data-theme-preference') === "dark" ? "light" : "dark";
        setTheme(currentTheme);
    };
    function setTheme(currentTheme) {
        const pressed = currentTheme === 'dark' ? 'true' : 'false';
        document.documentElement.setAttribute('data-theme-preference', currentTheme);
        localStorage.setItem('theme-preference', currentTheme);
    }
    prefersDark?.addEventListener('change', function (event) {
        currentTheme = event.matches ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    return (
        <StyledFlex mb="0" posAbs>
        <StyledButton className="filter-btn" onClick={handleFilterButton}>
            {btnText}
        </StyledButton>
        </StyledFlex>
    );
};

export default ToggleThemeButton;
