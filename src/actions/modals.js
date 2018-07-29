import * as c from "../constants";

export const open = ( name, body ) => ({
  type: c.MODALS_OPEN,
  payload: {
    name,
    body,
  }
});

export const close = payload => ({
  type: c.MODALS_CLOSE,
  payload
});
