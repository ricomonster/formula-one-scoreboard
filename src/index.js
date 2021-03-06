// dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// context
import { FormulaOneProvider } from '@context/FormulaOneContext';

// pages
import Pages from '@pages';

// service worker
import * as serviceWorker from './serviceWorker';

// stylesheet
import '@assets/sass/index.scss';

ReactDOM.render(
  <FormulaOneProvider>
    <Pages.App />
  </FormulaOneProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
