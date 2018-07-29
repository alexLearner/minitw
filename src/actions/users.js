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
//
// export const pushComment = (userId, content) =>
//   (dispatch, getState) => {
//     const
//       { id, name, avatar } = getState().user,
//       sender = { id, name, avatar };
//
//     return {
//       type: c.USERS_PUSH_COMMENT,
//       payload: {
//         userId,
//         content,
//         sender,
//       }
//     }
//   };
