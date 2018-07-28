import * as c from "../constants";

const
  initialState = {
    isFetched: false,
    data: null,
  };

export default function users(state = initialState, action) {
  switch (action.type) {

    case c.USERS_SET_DATA: {
      return {
        isFetched: true,
        data: action.payload,
      }
    }

    default:
      return state;
  }
}
