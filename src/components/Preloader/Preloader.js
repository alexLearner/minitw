import React from "react";
import PropTypes from "prop-types";
import Spin from "antd/lib/spin";

const Preloader = ({ className }) => (
  <div className={className}>
    Loading <Spin size="large" />
  </div>
);

Preloader.propTypes = {
  className: PropTypes.string,
};

export default Preloader;