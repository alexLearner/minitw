import React from "react";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import Post from "./Post";
import Preloader from "../Preloader";
import { postType, userType } from "../../types";
import "./Posts.css"

const Posts = ({ posts, user, isFetched }) => {
  if (!isFetched) {
    return <Preloader className="posts posts_empty" />
  }

  if (!(posts && posts.length && isFetched)) {
    return (
      <div className="posts posts_empty">
        <p>
          There are no posts here yet <Icon type="frown"/>
        </p>
      </div>
    )
  }

  return (
    <div className="posts">
      {
        posts.map(post => (
          <Post
            userId={user.id}
            key={post.id}
            {...post}
          />
        ))
      }
    </div>
  )
};

Posts.defaultProps = {
  posts: [],
  isFetched: PropTypes.bool,
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(postType)
  ),
  user: PropTypes.shape(userType).isRequired,
};

export default Posts;