import React from "react";
import { NavLink, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ROOT } from "../../config";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import { open } from "../../actions/modals";
import "./Header.css";

const Header = ({ open }) => (
  <header className="header">
    <div className="container header_container">
      <Link className="header_logo" to={ROOT + "/"}>MiniTW</Link>

      <nav className="header_nav">
        <NavLink
          className="header_nav_item"
          activeClassName="active"
          to={ROOT + "/"}
          exact={true}
        >
          Users
        </NavLink>

        <span
          className="header_nav_item"
          onClick={() => open("sign_in")}
        >
          Sign in
        </span>

      </nav>
    </div>
  </header>
);

export default connect(
  null,
  dispatch => ({
    open: bindActionCreators(open, dispatch)
  })
)(Header);