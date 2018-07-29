import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import Comments from "../Comments";
import { postType } from "../../types";

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
  ...postType,
  userId: PropTypes.number,
};

export default Post;