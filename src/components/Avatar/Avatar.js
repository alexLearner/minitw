import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Avatar.css"

const Avatar = ({ image, alt = "", theme, size, className }) => (
  <img src={image} alt={alt} className={cx("avatar", size, theme, className)} />
);

Avatar.defaultProps = {
  theme: "",
  size: "",
};

Avatar.propTypes = {
  image: PropTypes.string.isRequred,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "small"
  ]),
  theme: PropTypes.oneOf([
    "circle"
  ])

};

export default Avatar;