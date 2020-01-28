import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './stylesheets/theme';
import Router from './Router';
import Nav from './components/Nav/Nav.js';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Nav/>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
