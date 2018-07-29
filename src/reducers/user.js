import * as c from "../constants";

const
  initialState = {
    isAuth: true,

    name: "test",
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
