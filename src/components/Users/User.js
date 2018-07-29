import React from "react";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";
import { ROOT } from "../../config";
import Avatar from "../Avatar";
import { userType } from "../../types";

const User = ({ id, avatar, name }) => (
  <Link
    to={`${ROOT}/users/${id}`}
    className="users_item"
  >
    <Card
      cover={<Avatar className="users_item_avatar" image={avatar} />}
      hoverable
    >
      <div className="users_item_name">{name}</div>

      <div className="users_item_buttons">
        <Button
          className="users_item_button"
          type="dashed"
        >
          Look posts
        </Button>
      </div>
    </Card>
  </Link>
);

User.propTypes = userType;

export default User;