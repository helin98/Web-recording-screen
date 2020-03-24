import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
// import ReactDOM from 'react-dom';
// import { hydrate, render } from 'react-dom';
import { render } from 'react-snapshot';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
// const rootElement = document.getElementById('root');

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ThemeProvider>,
//     rootElement
//   );
// } else {
//   render(
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ThemeProvider>,
//     rootElement
//   );
// }PUBLIC_URL=/aaa
// "homepage": "https://github.com/ouweiya/ouweiya.github.io/Web-recording-screen",
serviceWorker.unregister();
