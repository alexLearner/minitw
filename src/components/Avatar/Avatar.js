import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Avatar.css"

const DEFAULT_AVATAR = "https://cdn.dribbble.com/users/264/screenshots/1035073/untitled-2.jpg";

const Avatar = ({ image, alt = "", theme, size, className }) => (
  <img
    src={image || DEFAULT_AVATAR}
    alt={alt}
    className={cx("avatar", size, theme, className)}
  />
);

Avatar.defaultProps = {
  image: ""
};

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "small",
  ]),
  theme: PropTypes.oneOf([
    "circle"
  ])

};

export default Avatar;