import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "antd/lib/button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../../actions/user";
import "./SignIn.css";

class SignIn extends Component {
  state = { value: "" };

  change = event => {
    this.setState({ value: event.target.value })
  };

  submit = event => {
    const
      { login, close, body } = this.props,
      { callback } = body || {},
      { value } = this.state;

    console.log("body", body)

    event.preventDefault();

    login({ name: value});
    close();
    callback && callback();
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
          autoFocus
          value={value}
        />

        <Button
          className="comments_form_button"
          type="primary"
          htmlType="submit"
          disabled={!value}
        >
          Login
        </Button>

      </form>
    )
  }
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  callback: PropTypes.func,
};

export default connect(
  null,
  dispatch => ({
    login: bindActionCreators(login, dispatch),
  })
)(SignIn);