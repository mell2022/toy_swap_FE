import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, Grid, Box } from "@mui/material";

const About = () => {
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
        An app that allow users to swap used/new toys with other users based on
        their children's age and need.
        An app that allow users to swap used/new toys with other users based on
        their children's age and need.
        An app that allow users to swap used/new toys with other users based on
        their children's age and need.
        <br/>
        <br/>
        <br/>
        An app that allow users to swap used/new toys with other users based on
        their children's age and need.
        <br/>
        <br/>
        <br/>
        An app that allow users to swap used/new toys with other users based on
        their children's age and need.
      </Typography>
      </Grid>

    <Grid item xs/>
    </Grid>
  );
};

export default About;
