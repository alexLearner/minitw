import * as c from "../constants";

import localStore from "../modules/localStore";

const
  storagePosts = localStore.get("posts"),

  initialState = {
    isFetched: !!storagePosts,
    data: storagePosts,
  };

export default function posts(state = initialState, action) {
  switch (action.type) {
    case c.POSTS_SET_DATA: {
      return {
        isFetched: true,
        data: action.payload,
      }
    }

    case c.POSTS_PUSH_COMMENT: {
      const
        { userId, content, sender, postId } = action.payload,
        time = (new Date()).getTime(),
        comment = {
          created: time,
          id: time,
          content,
          user: sender,
        },

        userPosts = state.data[userId].map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments
                ? [ ...post.comments, comment ]
                : [ comment]
            }
          }

          return post;
        });

      return {
        data: {
          ...state.data,
          [ userId ]: userPosts,
        }
      }
    }

    default:
      return state;
  }
}
