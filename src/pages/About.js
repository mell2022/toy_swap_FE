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
        Most kids love to play with toys but get tired of same toys pretty quickly.
        As a result, parents are forced to buy new toys as the older toys get abondoned
        by their children. As such, a toy swap will allow parents to provide new toys without 
        spending a penny and also help reduce the amount of toys they have. This app 
        allow parents to choose toys based on their children's age and need as the children 
        learn and discover new toys.
        <br/>
      </Typography>
      </Grid>
    <Grid item xs/>
    </Grid>
  );
};

export default About;
