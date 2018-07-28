import React from "react";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import Post from "./Post";
import "./Posts.css"

const Posts = ({ posts }) => {
  if (!(posts && posts.length)) {
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
};

Posts.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.object,
};

export default Posts;