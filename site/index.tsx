import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  author: 'galaxyw',
  enthusiasmLevel: 2,
  languageName: 'js',
});

ReactDOM.render(
  <Provider store={store}>
    {/*<App />*/}
    <div>galaxyw...</div>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
