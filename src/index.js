import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import './index.scss';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
