import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ROOT } from "../../config";
import { connect } from "react-redux";
import { open } from "../../actions/modals";
import { out } from "../../actions/user";
import "./Header.css";

const Header = ({ open, isAuth, name, out }) => (
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

        {
          !isAuth ? (
            <span
              className="header_nav_item"
              onClick={() => open("sign_in")}
            >
              Sign in
            </span>
          ) : [
              <span className="header_name" key="1">{name}</span>,
              <span
                className="header_nav_item"
                onClick={() => out()}
                key="2"
              >
                Sign out
              </span>
            ]
        }
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string,
  isAuth: PropTypes.bool,
  open: PropTypes.func.isRequired,
  out: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    name: state.user.name,
    isAuth: state.user.isAuth,
  }),
  dispatch => ({
    open: bindActionCreators(open, dispatch),
    out: bindActionCreators(out, dispatch),
  })
)(Header);