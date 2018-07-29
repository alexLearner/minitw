import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Posts from "../../components/Posts/Posts";
import "./User.css";
import { getPosts } from "../../actions/posts";

class User extends Component {
  componentDidMount() {
    const { isFetched, getPosts } = this.props;

    if (!isFetched) {
      getPosts();
    }
  }

  render() {
    const
      {
        normalizeData,
        posts,
        match: { params: { id } },
      } = this.props,
      user = normalizeData && normalizeData[id],
      userPosts = posts && posts[id],
      {
        avatar,
        name,
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
            <h2>{name}</h2>
          </div>
        </div>

        <Posts posts={userPosts} user={user} />
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
    isFetched: state.posts.isFetched,
    posts: state.posts.data,
  }),
  dispatch => ({
    getPosts: bindActionCreators(getPosts, dispatch)
  })
)(User));