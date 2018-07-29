import { combineReducers } from 'redux';
import users from './users';
import user from './user';
import posts from './posts';

export default function createRootReducer() {
  return combineReducers({
    users,
    user,
    posts,
  });
}
