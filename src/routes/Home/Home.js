import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spin from "antd/lib/spin";
import Users from "../../components/Users/Users";
import { userType } from "../../types";

class Home extends Component {
  render() {
    const { isFetched, data } = this.props;

    if (!isFetched) {
      return <div> Loading <Spin size="large" /> </div>
    }

    return (
      <div className="home">
        <Users data={data} />
      </div>
    )
  }
}

Home.propTypes = {
  isFetched: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape(userType)
  ),
};

export default connect(
  state => ({
    data: state.users.data,
    isFetched: state.users.isFetched,
  }),
)(Home);