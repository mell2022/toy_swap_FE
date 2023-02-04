import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ToyLists = () => {
  // const [users, setUsers] = useState([])
  let toys = [];
  useEffect(() => {
    axios
      .get("https://toyswap.herokuapp.com/toys", {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        toys = response.data;
        // const userToys = response.data.map((user)=> {
        //   return {
        //     first:user.first,
        //     last:user.last,
        //     email:user.email,
        //     toys:user.toys

        //   }
        // })
        // setUsers(userToys)
        console.log(response.data);
        // toys = response.data
        console.log("success in getting all toys!", response);
        // return response.data;
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>My toys</h1>
      {/* {toys} */}
      <div>
        {toys.map((toy) => (
          <div>
            <p>toy.brand</p>
            <p>toy.first</p>
            <p>toy.last</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyLists;
