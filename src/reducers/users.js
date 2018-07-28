import * as c from "../constants";
import { normalize, schema } from 'normalizr';

const
  initialState = {
    isFetched: false,
    data: null,
  },

  userSchema = new schema.Entity('users'),
  userListSchema = [ userSchema ];

export default function users(state = initialState, action) {
  switch (action.type) {

    case c.USERS_SET_DATA: {

      console.log("GET DATA");


      return {
        isFetched: true,
        data: normalize(action.payload, userListSchema).entities.users
      }
    }

    default:
      return state;
  }
}
