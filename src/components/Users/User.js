import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { ROOT } from "../../config";

const DEFAULT_AVATAR = "https://cdn.dribbble.com/users/264/screenshots/1035073/untitled-2.jpg";

const User = ({ id, avatar, first_name, last_name }) => (
  <Card
    className="users_item"
    cover={<img src={avatar || DEFAULT_AVATAR} alt="" />}
    hoverable
  >
    <div className="users_item_name">{first_name} {last_name}</div>

    <div className="users_item_buttons">
      <Link to={`${ROOT}/edit/${id}`}>
        <Button
          className="users_item_button"
          type="dashed"
        >
          Look news
        </Button>
      </Link>
    </div>
  </Card>
);

User.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  removeUser: PropTypes.func.isRequired,
};

export default User;