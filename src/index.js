import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a2327',
    },
    secondary: {
      main: '#263238',
    },
    background: {
      default: '#303030',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.register();
