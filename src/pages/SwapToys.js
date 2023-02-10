import { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Toy from "../components/Toy";
import {useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const SwapToys = (props) => {
  const [allToys, setAllToys] = useState([]);
  const [authenticatedEmail, setAuthenticatedEmail] = useState(
    localStorage.getItem("authenticatedEmail") || ""
  );
  const [showFailedAlert, setShowFailedAlert] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);

  let email = localStorage.getItem("authenticatedEmail");

  useEffect(() => {
    axios
      .get(`https://toyswap.herokuapp.com/toys/all`, {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting userInfo!", response.data);
        setAllToys(response.data);
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });
  }, []);

  const location = useLocation();

  let navigate = useNavigate();
  const handleSubmit = (toy, e) => {
    e.preventDefault();
    if (
      location === null ||
      location.state === null ||
      location.state.toy === null
    ) {
      setShowFailedAlert(true);
      return;
    }
    const myToyToSwap = location.state.toy;
    console.log("my toy to swap:", myToyToSwap);

    let theirToyToSwap = toy;
    console.log("their toy to swap:", theirToyToSwap);

    // We call the swap API between myToyToSwap and theirToyToSwap

    let url = `https://toyswap.herokuapp.com/toys/swap/${email}/${myToyToSwap.name}/${theirToyToSwap.owner_email}/${theirToyToSwap.name}`;
    axios
      .post(url, {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting swapped!", response.data);
        setShowPassAlert(true)
      })
      .catch((error) => {
        console.log(`error in swapping toys! error message: ${error}`);
      });
  };

  // Filter all toys to hide toys I own
  console.log("alltoys", allToys);
  let otherToys = allToys.filter((toy) => toy.owner_email !== email);
  console.log("other toys", otherToys);

  return (
    <Grid container justifyContent="center" alignItems="stretch">
      <Stack sx={{ width: "100%" }} spacing={2}>
        {showFailedAlert && (
          <Alert severity="warning" onClose={()=>{}}>
            You have not selected a toy to swap. Please click on My Toys and choose your toy to swap!
          </Alert>
        )}
        {showPassAlert && (
          <Alert severity="success" onClose={()=>{}}>
            You have successfully swapped your toy!
          </Alert>
        )}
      </Stack>
      {otherToys.map((toy) => (
        <Box sx={{ m: 2, alignContent: "flex-start" }}>
          <Grid item xs={4} alignItems="left">
            <Card sx={{ minWidth: 275, maxwidth: 250, minHeight: 300 }}>
              <CardContent key={toy.name}>
                <Toy data={toy}></Toy>
                <Button
                  variant="text"
                  onClick={(e) => handleSubmit(toy, e)}
                  to="/swaptoys"
                >
                  Select to Swap
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};
SwapToys.prototypes = {
  data: PropTypes.object,
};

export default SwapToys;
