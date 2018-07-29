import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import Textarea from "../Textarea";
import { pushComment } from "../../actions/posts";
import { open } from "../../actions/modals";

class CommentsForm extends Component {
  state = { value: "" };

  submit = event => {
    const
      { value } = this.state,
      {
        userId,
        pushComment,
        postId,
        isAuth,
        open,
      } = this.props;

    event.preventDefault();

    const fn = () => {
      pushComment(userId, postId, value);
      this.setState({ value: "" });
      this.textarea.clear();
    };

    if (isAuth) {
      fn();
    } else {
      open("sign_in", { callback: fn })
    }
  };

  change = value => {
    this.setState({ value: value.trim() });
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
          ref={elem => this.textarea = elem}
        />

        <Button
          className="comments_form_button"
          type="primary"
          htmlType="submit"
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
    open: bindActionCreators(open, dispatch),
  })
)(CommentsForm);