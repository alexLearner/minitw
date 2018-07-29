import * as c from "../constants";
import Requests from "../modules/API/Requests";

export const setUsers = payload => ({
  type: c.USERS_SET_DATA,
  payload
});

export const getUsers = () => dispatch => {
  Requests
    .getUsers()
    .then(res => dispatch(setUsers(res)))
};
