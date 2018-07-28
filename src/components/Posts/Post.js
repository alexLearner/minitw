import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import Comments from "../Comments";

const Post = ({ created, content, comments, title }) => (
  <Card className="posts_item">
    <div className="posts_item_header">
      <div className="posts_item_title">{title}</div>
      <span>{created}</span>
    </div>

    <div
      className="posts_item_content"
      dangerouslySetInnerHTML={{ __html : content }}
    />

    <div className="posts_item_comments">
      <Comments comments={comments} />
    </div>

  </Card>

);

Post.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
};

export default Post;