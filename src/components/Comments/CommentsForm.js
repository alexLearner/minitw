import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import Textarea from "../Textarea";
import { pushComment } from "../../actions/posts";

class CommentsForm extends Component {
  state = { value: "" };

  submit = event => {
    const
      { value } = this.state,
      { userId, pushComment, postId, isAuth } = this.props;

    event.preventDefault();

    if (isAuth) {
      pushComment(userId, postId, value)
    } else {
      alert("AUTH")
    }
  };

  change = value => {
    this.setState({ value });
  };

  render() {
    const
      { value } = this.state;

    return (
      <form
        className="comments_form"
        onSubmit={this.submit}
      >
        <Textarea
          onChange={this.change}
          placeholder="Write comment"
          className="comments_form_textarea"
          onEnter={this.submit}
        />

        <Button
          className="comments_form_button"
          type="primary"
          key="submit"
          disabled={!value}
        >
          Comment
        </Button>
      </form>
    )
  }
}

CommentsForm.propTypes = {
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    isAuth: state.user.isAuth,
  }),
  dispatch => ({
    pushComment: bindActionCreators(pushComment, dispatch),
  })
)(CommentsForm);