import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ROOT } from "../../config";
import "./Header.css";

const LINKS = [
  {
    to: "/",
    text: "Users",
    exact: true,
  },
  {
    to: "/create",
    text: "Sign In",
  },
];

const Header = () => (
  <header className="header">
    <div className="container header_container">
      <Link className="header_logo" to={ROOT + "/"}>MiniTW</Link>

      <nav className="header_nav">
        {
          LINKS.map(link => (
            <NavLink
              className="header_nav_item"
              activeClassName="active"
              key={link.to}
              to={ROOT + link.to}
              exact={link.exact}
            >
              {link.text}
            </NavLink>
          ))
        }
      </nav>
    </div>
  </header>
);

export default Header;