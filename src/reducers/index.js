import { combineReducers } from 'redux';
import users from './users';
import user from './user';

export default function createRootReducer() {
  return combineReducers({
    users,
    user,
  });
}
