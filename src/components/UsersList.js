import React from "react";
import PropTypes from "prop-types";
import User from "./User";

const UsersList = (props) => {
  const users = props.users;
  console.log("users", users)
  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>
        <User 
          first={user.first} 
          last={user.last} 
          email={user.email}
          toys={user.toys}
          >
        </User>
        </div>
    
      ))}
      
    </div>
  );
};
// return requires an argument
// return <div>{entries}</div>;

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default UsersList;
