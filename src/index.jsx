import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'babel-polyfill';

import App from './App/AppContainer';
import { appReducer } from './App/AppReducer';

const reducers = combineReducers({
  app: appReducer
});
const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('profile-app')
);
