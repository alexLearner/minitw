import { normalize, schema } from 'normalizr';
import * as c from "../constants";
import localStore from "../modules/localStore";

const storageUsers = localStore.get("users"),

  userSchema = new schema.Entity('users'),
  userListSchema = [ userSchema ],

  normalizeUsers = (data) => normalize(data, userListSchema).entities.users,

  initialState = {
    isFetched: !!storageUsers,
    data: storageUsers,
    normalizeData: storageUsers ? normalizeUsers(storageUsers) : null,
  };


export default function users(state = initialState, action) {
  switch (action.type) {

    case c.USERS_SET_DATA: {
      return {
        isFetched: true,
        data: action.payload,
        normalizeData: normalizeUsers(action.payload),
      }
    }

    default:
      return state;
  }
}
