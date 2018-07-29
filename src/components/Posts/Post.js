import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import Comments from "../Comments";

const Post = ({ id, created, content, comments, title, userId }) => (
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
      <Comments
        userId={userId}
        postId={id}
        comments={comments}
      />
    </div>
  </Card>
);

Post.propTypes = {
  created: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  comments: PropTypes.array,
  userId: PropTypes.number,
};

export default Post;