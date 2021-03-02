import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
