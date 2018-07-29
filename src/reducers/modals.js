import * as c from "../constants";

const
  initialState = {
    name: "",
    isVisible: false,
  };

export default function modals(state = initialState, action) {
  switch (action.type) {
    case c.MODALS_OPEN: {
      return {
        name: action.payload,
        isVisible: true,
      }
    }

    case c.MODALS_CLOSE: {
      return { isVisible: false }
    }

    default:
      return state;
  }
}
