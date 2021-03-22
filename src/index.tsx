import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './core/reportWebVitals';

import { Content, Title, Card } from './components';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku 😸 </Title>
      <Card data-cy="card">This is a card section</Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
