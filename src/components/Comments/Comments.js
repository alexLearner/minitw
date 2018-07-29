import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import "./Comments.css";

class Comments extends Component {
  componentDidMount() {
    this.scrollBottom();
  }

  componentDidUpdate({ comments }) {
    const oldComments = this.props.comments;

    if (oldComments && comments.length !== oldComments.length) {
      this.scrollBottom()
    }
  }

  scrollBottom = () => {
    this.container.scrollTop = 99999;
  };

  render() {
    let { comments, postId, userId } = this.props;

    return (
      <div className="comments">
        <div
          className="comments_container"
          ref={elem => this.container = elem}
        >
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
        </div>

        <CommentsForm
          postId={postId}
          userId={userId}
        />
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
};

export default Comments;