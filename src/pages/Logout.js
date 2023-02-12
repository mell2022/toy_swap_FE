import React from "react";

const Logout = () => {
  localStorage.setItem("isLoggedIn", false);
  return (
    <div>
      <h1>Logout</h1>
      <p>
        You have successfully logged out. Please use the login button above to
        log in.
      </p>
    </div>
  );
};

export default Logout;
