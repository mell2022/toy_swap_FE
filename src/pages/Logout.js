import React from "react";
import { Typography, Grid, Box } from "@mui/material";


const Logout = () => {
  localStorage.setItem("isLoggedIn", false);
  return (

    <Grid
    container
    justifyContent="flex-start"
    alignItems="flex-start"
  >
    <Grid item xs/>
    <Grid item xs={6}
        >
      <Typography variant="h6" m={5}> About</Typography>
      <Typography variant="subtitle1">
        You have successfully logged out. Please use the login button above to log in.
        <br/>
      </Typography>
      </Grid>
    <Grid item xs/>
    </Grid>
  );
};

export default Logout;
