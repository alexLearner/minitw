import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import './antd.css';
import './index.css';
import Router from './routes';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
