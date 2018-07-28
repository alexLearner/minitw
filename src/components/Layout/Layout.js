import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <div className="container layout_content">
          { children }
        </div>
      </div>
    )
  }
}

export default Layout;