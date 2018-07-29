import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import './index.css';
import './antd.css';
import Router from './routes';
import {
  updatePostsInStorage,
  updateUserInStorage
} from "./subscribers";

const initialState = {};
const store = configureStore(initialState);

store.subscribe(updatePostsInStorage(store));
store.subscribe(updateUserInStorage(store));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
