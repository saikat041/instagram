import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// components
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/signup" component={signup} />
      </Switch>

    </Router>
    </MuiThemeProvider>
  );
}

export default App;
