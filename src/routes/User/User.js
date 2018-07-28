import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Posts from "../../components/Posts/Posts";
import "./User.css";

class User extends Component {
  render() {
    const
      {
        normalizeData,
        match: { params: { id } },
      } = this.props,
      user = normalizeData && normalizeData[id],
      {
        avatar,
        first_name,
        last_name,
        posts,
      } = user || {};

    if (!user) {
      return (
        <div className="userpage"></div>
      )
    }

    return (
      <div className="userpage">
        <div className="userpage_header">
          <img className="userpage_avatar" src={avatar} />

          <div>
            <h2>{first_name} {last_name}</h2>
          </div>
        </div>

        <Posts posts={posts} user={user} />
      </div>
    )
  }
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  normalizeData: PropTypes.object,
  posts: PropTypes.object,
};

export default withRouter(connect(
  state => ({
    normalizeData: state.users.normalizeData,
  }),
)(User));