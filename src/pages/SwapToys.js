import { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Toy from "../components/Toy";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";

const SwapToys = (props) => {
  const [allToys, setAllToys] = useState([]);
  const [authenticatedEmail, setAuthenticatedEmail] = useState(
    localStorage.getItem("authenticatedEmail") || ""
  );

  let email = localStorage.getItem("authenticatedEmail");
  console.log("From local Storage:", email);

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
  const myToyToSwap = location.state.toy;
  console.log("my toy to swap:", myToyToSwap);

  let navigate = useNavigate();
  const handleSubmit = (toy, e) => {
    e.preventDefault();
    let theirToyToSwap = toy;

    // We call the swap API between myToyToSwap and theirToyToSwap

    //   axios
    //     .post(`https://toyswap.herokuapp.com/toys/swap/`, {
    //       params: {
    //         format: "json",
    //       },
    //     })
    //     .then((response) => {
    //       console.log("success in getting userInfo!", response.data);
    //       setAllToys(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(`error in getting all toys! error message: ${error}`);
    //     });
    // }, []);

    axios
      .get(`https://toyswap.herokuapp.com/toys/all`, {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting userInfo!", response.data);
        // setAllToys(response.data);
        // Swap has succeeded so we navigate somewhere
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });

    console.log("their toy to swap:", theirToyToSwap);
  };

  // Filter all toys to hide toys I own
  let otherToys = allToys.filter((toy) => toy.owner_email !== email);
  console.log("other toys", otherToys);

  return (
    <Grid
    container
    justifyContent="center"
    alignItems="stretch"
  >
      {otherToys.map((toy) => (
        <Box sx={{ m:2, alignContent: 'flex-start'}}>
          <Grid item xs={4} alignItems="left">
          <Card sx={{ minWidth: 275, maxwidth: 250, minHeight: 375}}>
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
