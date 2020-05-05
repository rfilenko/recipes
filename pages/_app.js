import App from 'next/app';
import { theme } from 'components/styled/theme';
import RecipesContextProvider from 'components/contexts/RecipesContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/styled/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />

        <ThemeProvider theme={theme}>
          <RecipesContextProvider>
            <Component {...pageProps} />
          </RecipesContextProvider>
        </ThemeProvider>
      </>
    );
  }
}
