import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import Textarea from "../Textarea";

class CommentsForm extends Component {
  render() {
    const
      {
        user,
      } = this.props;

    return (
      <form className="comments_form">
        <Textarea placeholder="Write comment" className="comments_form_textarea" />

        <Button
          className="comments_form_button"
          type="primary"
        >
          Comment
        </Button>
      </form>
    )
  }
}

CommentsForm.propTypes = {
  user: PropTypes.user,
};

export default connect(
  state => ({
    user: state.user,
  }),
)(CommentsForm);