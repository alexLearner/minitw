import * as c from "../constants";

export const open = payload => ({
  type: c.MODALS_OPEN,
  payload
});

export const close = payload => ({
  type: c.MODALS_CLOSE,
  payload
});
