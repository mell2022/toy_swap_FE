import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import MyToys from "./pages/MyToys";
import SwapToys from "./pages/SwapToys";
import About from "./pages/About";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import { BottomNavigation } from "@mui/material";
// import images from "./images/Toystack.jpeg";
// import "./App.css";

function App() {
  // const [allUsers, setAllUsers] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://toyswap.herokuapp.com/toys", {
  //       params: {
  //         format: "json",
  //       },
  //     })
  //     .then((response) => {
  //       // console.log("success in getting all toys!", response.data);
  //       setAllUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(`error in getting all toys! error message: ${error}`);
  //     });
  // }, []);

  // return (
  //   <div id="App">
  //     <header>
  //       <h1>Toy Swap</h1>
  //       <section></section>
  //     </header>
  //     <main>
  //       {console.log("yaaay2", allUsers)}
  //       <UsersList users={allUsers}></UsersList>
  //     </main>
  //     <BrowserRouter>
  //     <Routes>
  //       {/* <Route path="/" element={<index />}></Route> */}
  //       {/* <Route path="/user" element={<User />}></Route>
  //       <Route path="/UsersList" element={<UsersList />}></Route> */}
  //     </Routes>
  //   </BrowserRouter>
  //   </div>
  // );

  return (
    <div className="App">
      {/* <div> className="bg"</div> */}
      <Router>
        <NavTabs></NavTabs>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/mytoys" element={<MyToys />}></Route>
          <Route path="/swaptoys" element={<SwapToys />}></Route>
          <Route path="/about" element={<About />}></Route>

          {/* <Route path="/user" element={<User />}></Route>
          <Route path="/userslist" element={<UsersList />}></Route> */}
        </Routes>
      </Router>
      <BottomNavigation>
        {/* <footer class="page-footer">Sticky footer</footer> */}
      </BottomNavigation>
    </div>
  );
}

export default App;
