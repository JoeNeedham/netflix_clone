import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import 'normalize.css';
import { App } from './lib/firebase.prod';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


