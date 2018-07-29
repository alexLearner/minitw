import * as c from "../constants";

export const login = payload => ({
  type: c.USER_LOGIN,
  payload
});

export const out = () => ({ type: c.USER_OUT });