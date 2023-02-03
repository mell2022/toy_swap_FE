import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ToyLists = () => {
  let toys = []
  useEffect(()=>{
    axios
    .get("https://toyswap.herokuapp.com/toys", {
      params: {
        format: "json",
      },
    })
    .then((response) => {
      toys = response.data
      console.log("success in getting all toys!", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(`error in getting all toys! error message: ${error}`);
    });
  },[])

  return (
    <div>
      <h1>My toys</h1>
      {toys}
    </div>
  );
}



export default ToyLists;