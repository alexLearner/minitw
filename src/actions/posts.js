import * as c from "../constants";
import Requests from "../modules/API/Requests";

export const setPosts = payload => ({
  type: c.POSTS_SET_DATA,
  payload
});

export const getPosts = () => dispatch => {
  Requests
    .getPosts()
    .then(res => dispatch(setPosts(res)))
};

export const pushComment = (userId, postId, content) =>
  (dispatch, getState) => {
    const
      { id, name, avatar } = getState().user,
      sender = { id, name, avatar };

    dispatch({
      type: c.POSTS_PUSH_COMMENT,
      payload: {
        userId,
        postId,
        content,
        sender,
      }
    })
  };