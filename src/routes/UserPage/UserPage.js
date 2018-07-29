import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Posts from "../../components/Posts/Posts";
import { getPosts } from "../../actions/posts";
import Avatar from "../../components/Avatar";
import "./UserPage.css";

class UserPage extends Component {
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
        bio,
      } = user || {};

    if (!user) {
      return (
        <div className="userpage" />
      )
    }

    return (
      <div className="userpage">
        <div className="userpage_header">
          <Avatar image={avatar} className="userpage_avatar" />

          <div>
            <h2>{name}</h2>
            <div dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        </div>

        <Posts posts={userPosts} user={user} />
      </div>
    )
  }
}

UserPage.propTypes = {
  normalizeData: PropTypes.object,
  posts: PropTypes.object,
  isFetched: PropTypes.bool,
  getPosts: PropTypes.func.isRequired,
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
)(UserPage));