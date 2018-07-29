import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";

const Comment = ({ user, content }) => (
  <div className="comments_item">
    <div className="comments_item_body">
      <Avatar
        image={ user.avatar }
        size="small"
        theme="circle"
      />

      <div className="comments_item_content">
        <div className="comments_item_name">{user.name}</div>

        { content }
      </div>
    </div>

    {/*<div className="comments_item_created">*/}
      {/*{ (new Date(created)).toDateString() }*/}
    {/*</div>*/}
  </div>
);

Comment.propTypes = {
  user: PropTypes.object,
  content: PropTypes.string,
  // created: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  // ]),
};

export default Comment;