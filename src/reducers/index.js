import { combineReducers } from 'redux';
import users from './users';
import user from './user';
import posts from './posts';
import modals from './modals';

export default function createRootReducer() {
  return combineReducers({
    users,
    user,
    posts,
    modals,
  });
}
