import React from "react";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import User from "./User";
import "./Users.css"
import {userType} from "../../types";

const Users = ({ data }) => {
  if (!(data && data.length)) {
    return (
      <div className="users users_empty">
        <p>
          There are no users here yet <Icon type="frown"/>
        </p>
      </div>
    )
  }

  return (
    <div className="users">
      {
        data.map(user => (
          <User
            key={user.id}
            {...user}
          />
        ))
      }
    </div>
  )
};

Users.defaultProps = {
  data: [],
};

Users.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(userType)
  ),
};

export default Users;