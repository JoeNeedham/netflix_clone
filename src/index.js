import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { GlobalStyles } from './global-styles'
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={( firebase )}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
  ,
  document.getElementById('root')
);


