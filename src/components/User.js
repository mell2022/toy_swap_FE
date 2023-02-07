import React from "react";
import PropTypes from "prop-types";
import Toy from "./Toy";

const User = (props) => {
  let user = props;
  if(user.toys){
    return (
      <div>
        <h2>{user.first}</h2>
        <section>
          <p>{user.last}</p>
          <p>{user.email}</p>
          <div>
            {user.toys.map((toy) => (
              <div key={toy.name}>
                <Toy data={toy}></Toy>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  else {
    return (
      <div>
        {console.log("testa", user)}
        <h2>{user.first}</h2>
  
        <section>
          <p>{user.last}</p>
          <p>{user.email}</p>
          <div>
            {/* {user.toys.map((toy) => (
              <div>
                <Toy data={toy}></Toy>
              </div>
            ))} */}
          </div>
        </section>
      </div>
    );
  }
};

User.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  email: PropTypes.string,
  toys: PropTypes.arrayOf(PropTypes.object),
};

export default User;
