import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button, Grid, Stack, Alert } from "@mui/material";
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Image from './images/toystack.jpeg';
import Image2 from "../images/IMG_1863.jpeg";

export default function Login(props) {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const [authenticatedEmail, setAuthenticatedEmail] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn in Login Page", isLoggedIn);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    // TODO: Implement google login logic
    // For now we assume it works and we get the email back
    localStorage.setItem("authenticatedEmail", "kailee.wintheiser@f3qesh.com");
    localStorage.setItem("authenticatedUser", "Kailee Wintheiser");
    localStorage.setItem("isLoggedIn", true);

    setAuthenticatedEmail("kailee.wintheiser@f3qesh.com");
    setAuthenticatedUser("Kailee Wintheiser");
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);

  };
  return (
    <Grid container justifyContent="flex-end" alignItems="center" height="100%">
      <Grid item xs={12}>
        <img src={Image2} alt="ToySwap, the greatest tool ever." width={400} />
      </Grid>
      <Grid item xs={12}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="username"
            label="Email or Username"
            variant="standard"
            // onChange={(e) => setUnameOrEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            // onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handlesubmit}>
          Log in
        </Button>
      </Grid>
      <Grid container  justifyContent="flex-end" alignItems="center">
      <Grid item xs/>
      <Grid item xs={6}>
        <Stack sx={{ width: "100%", m:4 }} spacing={2}>
            {isLoggedIn && (
              <Alert severity="success" onClose={()=>{}}>
                You have successfully logged in! Please go to your toys list and select a toy to swap!
              </Alert>
            )}
        </Stack>
      </Grid>
      <Grid item xs/>
      </Grid>
    </Grid>
  );
}
