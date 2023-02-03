// import logo from './logo.svg';
// import "./App.css";
// import { React, useEffect, useState } from "react";
import axios from "axios";
import ToyLists from "./components/ToyLists";

function App() {
  const gettoysbyemail = (email) => {
    // let latitude, longitude;
    const url = `https://toyswap.herokuapp.com/toys/${email}`;
    axios
      .get(url, {
        params: {
          q: email,
          format: "json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!");
      });

    return {};
  };

  const getalltoys = () => {
    axios
      .get("https://toyswap.herokuapp.com/toys", {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting all toys!", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });
  };


  return (
    <div id="App">
      <header>
        <h1>Toy Swap</h1>
        <section>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        // Wave 02: Render ChatLog component */}
        {/* <ChatLog entries={ChatData} updateMessage={updateLike}></ChatLog> */}
        <ToyLists></ToyLists>
      </main>
    </div>
  );
}

export default App;
