import React from "react";
import PropTypes from "prop-types";
import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import "./Comments.css";

const Comments = ({ comments }) => (
  <div className="comments">
    {
      (comments && comments.length) ? (
        comments.map(comment => (
          <Comment
            key={comment.id}
            {...comment}
          />
        ))
      ) : (
        <div className="comments_empty">Not comments yet. Add your comment!</div>
      )
    }

    <CommentsForm />
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;