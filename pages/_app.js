import App from 'next/app';
import { theme } from '../components/styled/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/styled/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div style={{ margin: 0 }}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    );
  }
}
