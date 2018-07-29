import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Home from "./Home";
import User from "./User";
import Header from "../components/Header";
import Modals from "../components/Modals";
import { ROOT } from "../config";
import { getUsers } from "../actions/users";
import "./Layout.css";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/users/:id",
    component: User
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={ROOT + route.path}
    exact={route.exact}
    render={props => (
      <route.component
        routes={route.routes}
        {...props}
      />
    )}
  />
);

class RouterLayout extends Component {
  componentDidMount() {
    const { isFetched, getUsers } = this.props;

    if (!isFetched) {
      // users data is required for correct work app
      // so load it in the Layout;
      getUsers()
    }
  }

  render() {
    return (
      <Router>
        <div className="layout">
          <Header />
          <div className="container layout_content">
            {
              routes.map((route, i) =>
                <RouteWithSubRoutes key={i} {...route} />
              )
            }
          </div>

          <Modals />
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({
    isFetched: state.users.isFetched,
  }),
  dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch),
  }),
)(RouterLayout);
