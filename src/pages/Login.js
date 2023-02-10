import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button, Grid } from "@mui/material";
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Image from './images/toystack.jpeg';
import Image2 from "../images/IMG_1863.jpeg";

const Login = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const [authenticatedEmail, setAuthenticatedEmail] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  const navigate = useNavigate();

  const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456",
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // TODO: Implement google login logic
    // For now we assume it works and we get the email back
    localStorage.setItem("authenticatedEmail", "kailee.wintheiser@f3qesh.com");
    localStorage.setItem("authenticatedUser", "Kailee Wintheiser");

    setAuthenticatedEmail("kailee.wintheiser@f3qesh.com");
    setAuthenticatedUser("Kailee Wintheiser");

    navigate("/mytoys");
    console.log("UnameOrEmail:", UnameOrEmail);
    console.log("password:", password);

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        console.log("User Loged In");
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("please check your username or Email");
    }
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
            onChange={(e) => setUnameOrEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handlesubmit}>
          Log in
        </Button>
      </Grid>
    </Grid>
  );
};
export default Login;
