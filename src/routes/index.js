import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import { ROOT } from "../config";
import Layout from "../components/Layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
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
  render() {
    return (
      <Router>
        <Layout>
          {
            routes.map((route, i) =>
              <RouteWithSubRoutes key={i} {...route} />
            )
          }
        </Layout>
      </Router>
    )
  }
}

export default RouterLayout;
