import PropTypes from "prop-types";

export const userType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export const commentType = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape(userType).isRequired,
  created: PropTypes.number,
  content: PropTypes.string.isRequired,
};

export const postType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentType)
  )
};