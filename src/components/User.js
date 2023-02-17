import React from "react";
import PropTypes from "prop-types";
import Toy from "./Toy";
import Typography from "@mui/material/Typography";

const User = (props) => {
  let user = props;
  if (user.toys) {
    return (
      <div>
        <Typography variant="h5" component="div">
          {user.first} {user.last}
        </Typography>
        <section>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
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
  } else {
    return (
      <div>
        {console.log("testa", user)}
        <Typography variant="h5" component="div">
          {user.first} {user.last}
        </Typography>
        <section>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
          <div>
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
