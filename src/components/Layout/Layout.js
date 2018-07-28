import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users";
import Header from "../Header";
import "./Layout.css";

class Layout extends Component {
  componentDidMount() {
    const { isFetched, getUsers } = this.props;

    if (!isFetched) {
      // users data is required for correct work app
      // so load it in the Layout;
      getUsers()
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Header />
        <div className="container layout_content">
          { children }
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  fetched: PropTypes.bool,
  getUsers: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isFetched: state.users.isFetched,
  }),
  dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch),
  }),
)(Layout);
