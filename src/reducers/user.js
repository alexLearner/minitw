import * as c from "../constants";
import localStore from "../modules/localStore";

const
  storageUser = localStore.get("user"),

  initialState = {
    isAuth: !!storageUser,
    name: storageUser && storageUser.name,
  };

export default function user(state = initialState, action) {
  switch (action.type) {
    case c.USER_LOGIN: {
      return {
        isAuth: true,
        ...action.payload,
      }
    }

    case c.USER_OUT: {
      return { isAuth: false }
    }

    default:
      return state;
  }
}
