import React, {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn")
  );
  const navigate = useNavigate();
  let email = localStorage.getItem("authenticatedEmail");
  let user = localStorage.getItem("authenticatedUser");

  const handleChange = (event, newValue) => {
    console.log("handleChange", newValue, event);
    event.preventDefault();
    if (newValue === 0) {
      setIsLoggedIn(false);
      navigate("/");
    } else if (newValue === 1) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
      navigate("/mytoys");
    } else if (newValue === 2) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
      navigate("/swaptoys");
    } else if (newValue === 3) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
      navigate("/about");
    } else if (newValue === 4) {
      console.log("logout");
      // log the user out of the database and set the flag
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", false);
      navigate("/logout");
    }

    setValue(newValue);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          display: "grid",
          borderColor: "divider",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        <Box
          sx={{
            alignContent: "flex-start",
            justifyContent: "flex-start",
            gridColumn: "span 3",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login" {...a11yProps(0)}></Tab>
            <Tab label="My Toys" {...a11yProps(1)} />
            <Tab label="Swap Toys" {...a11yProps(2)} />
            <Tab label="About" {...a11yProps(3)}></Tab>
            <Tab label="Logout" {...a11yProps(4)}></Tab>
          </Tabs>
        </Box>
        {isLoggedIn && (
          <Box
            sx={{
              alignContent: "flex-end",
              justifyContent: "flex-end",
              flexGrow: 1,
              flexDirection: "row-reverse",
              gridColumn: "5",
            }}
          >
            <Typography
              sx={{ m: [-1, 0, -1, 0] }}
              variant="button"
              gutterBottom
            >
              {user}
            </Typography>
            <Typography
              sx={{ m: [-1, 0, -1, 0] }}
              variant="subtitle2"
              gutterBottom
            >
              {email}
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}
