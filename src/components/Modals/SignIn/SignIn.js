import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "antd/lib/button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPosts} from "../../../actions/posts";
import "./SignIn.css";

class SignIn extends Component {
  state = { value: "" };

  change = event => {
    this.setState({ value: event.target.value })
  };

  submit = event => {
    event.preventDefault();


  };

  render() {
    const { value } = this.state;

    return (
      <form className="sign_in" onSubmit={this.submit}>
        <h2>Login</h2>
        <input
          type="text"
          name="name"
          onChange={this.change}
          placeholder="Your name"
          className="sign_in_input"
          value={value}
        />

        <Button
          className="comments_form_button"
          type="primary"
          key="submit"
          disabled={!value}
        >
          Login
        </Button>

      </form>
    )
  }
}

SignIn.propTypes = {
  comments: PropTypes.array,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
};

export default connect(
  null,
  dispatch => ({
    login: bindActionCreators(getPosts, dispatch)
  })
)(SignIn);