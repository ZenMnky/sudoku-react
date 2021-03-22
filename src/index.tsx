import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './core/reportWebVitals';

import { Content, Title } from './components';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Oh Yeah 😸 </Title>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
