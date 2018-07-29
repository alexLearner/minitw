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

    event.preventDefault();

    login({ name: value});
    close();
    callback && callback();
  };

  render() {
    const
      { value } = this.state,
      { close } = this.props;

    return (
      <form className="sign_in" onSubmit={this.submit}>
        <div className="sign_in_title">Login</div>
        <input
          type="text"
          name="name"
          onChange={this.change}
          placeholder="Your name"
          className="sign_in_input"
          autoFocus
          value={value}
        />

        <div className="sign_in_buttons">
          <Button
            className="comments_form_button"
            type="primary"
            htmlType="submit"
            disabled={!value}
          >
            Ok
          </Button>

          <Button
            className="comments_form_button"
            type="danger"
            onClick={close}
          >
            Close
          </Button>


        </div>


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