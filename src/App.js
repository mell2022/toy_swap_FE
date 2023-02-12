import "./App.css";
import {
  BrowserRouter as Router,
  Link,
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
import NavTabs from "./components/NavTabs";
import { BottomNavigation } from "@mui/material";
import Logout from "./pages/Logout";
import { positions, textAlign } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Router>
        <NavTabs></NavTabs>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/mytoys" element={<MyToys />}></Route>
          <Route path="/swaptoys" element={<SwapToys />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
      <BottomNavigation sx={{bottom:0 , alignContent:'center'}} style={{position:"fixed", bottom:0, textAlign:'center',  left:"50%" }}>
        <footer class="page-footer">@2023 ToySwap Inc. </footer>
      </BottomNavigation>
    </div>
  );
}

export default App;
