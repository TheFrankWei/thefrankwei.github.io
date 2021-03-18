import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './stylesheets/theme';
import Router from './Router';
import Nav from './components/Nav/Nav.js';
import Background from './components/Background/Background';

const App = () => {
  return (
    <React.Fragment>
      <Background/>
    <BrowserRouter>
    
      <ThemeProvider theme={theme}>
        <Nav/>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
