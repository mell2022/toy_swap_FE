import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  console.log("props", props);
  let user = props;
  return (
    <div>
      <h2>{user.first}</h2>
      <section>
        <p>{user.last}</p>
        <p>{user.email}</p>
        {console.log("test", user.toys)}
        {/* <p>{user.toys}</p> */}
        <div>
          {user.toys.map((t) => (
            <div key={t.name}>
              <p>{t.name}</p>
              <p>{t.brand}</p>
              <p>{t.type}</p>
              <img src={t.imageurl} alt={t.name} width="300" height="300"></img>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

User.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  email: PropTypes.string,
  toys: PropTypes.arrayOf(PropTypes.object),
  // user: PropTypes.object
};

export default User;
