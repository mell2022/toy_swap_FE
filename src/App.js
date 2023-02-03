// import logo from './logo.svg';
// import "./App.css";
// import { React, useEffect, useState } from "react";
import axios from 'axios';

function App() {
  axios
    .get("http://127.0.0.1:5000/toys")
    .then(() => {
      console.log("response");
    })
    .catch(() => {
      console.log("error");
    });
}

export default App;
