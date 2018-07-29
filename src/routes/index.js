import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Home from "./Home";
import UserPage from "./UserPage";
import NotFound from "./NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    component: UserPage
  },
  {
    path: "/",
    component: NotFound
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
            <Switch>
              {
                routes.map((route, i) =>
                  <RouteWithSubRoutes key={i} {...route} />
                )
              }
            </Switch>
          </div>

          <Footer />
          <Modals />
        </div>
      </Router>
    )
  }
}

RouterLayout.propTypes = {
  isFetched: PropTypes.bool,
  getUsers: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isFetched: state.users.isFetched,
  }),
  dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch),
  }),
)(RouterLayout);
