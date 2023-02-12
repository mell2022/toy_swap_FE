import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";
import Toy from "../components/Toy";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";

function MyToys() {
  const [userInfo, setUserInfo] = useState({});
  const [authenticatedEmail, setAuthenticatedEmail] = useState(
    localStorage.getItem("authenticatedEmail") || ""
  );

  let email = localStorage.getItem("authenticatedEmail");
  console.log("From local Storage:", email);
  console.log("isLoggedIn", localStorage.getItem("isLoggedIn"));

  console.log("From state", authenticatedEmail);

  let navigate = useNavigate();
  const handleSubmit = (toy, e) => {
    e.preventDefault();
    navigate("/swaptoys", { state: { toy: toy } });
  };

  useEffect(() => {
    axios
      .get(`https://toyswap.herokuapp.com/toys/${email}`, {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting userInfo!", response.data);
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });
  }, []);

  if (userInfo.toys) {
    return (
      // <Box sx={{ flexGrow: 1 }}>
        // <Grid
        //   container
        //   spacing={6}
        //   justifyContent="flex-start"
        //   alignItems="flex-start"
        // >
        <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
      >
          {/* <Grid item xs={12} alignItems="left">
            <User
              first={userInfo.first}
              last={userInfo.last}
              email={userInfo.email}
              //toys={userInfo.toys}
            ></User>
          </Grid> */}
          {userInfo.toys.map((toy) => (
            <Box sx={{m:2, alignContent:'flex-start'}}>
            <Grid item xs={4} alignItems="left">
            <Card sx={{ minWidth: 275, maxwidth: 250, minHeight: 275}}>
            {/* // <Grid item xs={4} key={toy.name}>
            //   <Card sx={{ minWidth: 275, maxwidth: 250 }}> */}
                <CardContent key={toy.name}>
                  <Toy data={toy}></Toy>
                  {/* <button type="submit" onClick={(e) => handleSubmit(toy, e)}>
                Swap
              </button> */}
                  <Button
                    variant="text"
                    onClick={(e) => handleSubmit(toy, e)}
                    to="/swaptoys"
                  >
                    Choose
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            </Box>
          ))}
        </Grid>
      // </Box>
    );
  } else {
    return (
      <div>
        <User
          first={userInfo.first}
          last={userInfo.last}
          email={userInfo.email}
          toys={userInfo.toys}

        ></User>
      </div>
    );
  }
}

export default MyToys;
