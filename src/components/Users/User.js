import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { ROOT } from "../../config";

const DEFAULT_AVATAR = "https://cdn.dribbble.com/users/264/screenshots/1035073/untitled-2.jpg";

const User = ({ id, avatar, name }) => (
  <Link to={`${ROOT}/users/${id}`} className="users_item">
    <Card
      cover={<img src={avatar || DEFAULT_AVATAR} alt="" />}
      hoverable
    >
      <div className="users_item_name">{name}</div>

      <div className="users_item_buttons">
          <Button
            className="users_item_button"
            type="dashed"
          >
            Look news
          </Button>
      </div>
    </Card>
  </Link>

);

User.propTypes = {
  name: PropTypes.string,
};

export default User;