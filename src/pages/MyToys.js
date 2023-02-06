import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";

function MyToys() {
  const [userInfo, setUserInfo] = useState({});
  const [authenticatedEmail, setAuthenticatedEmail] = useState(
    localStorage.getItem("authenticatedEmail") || ""
  );

  let email = localStorage.getItem("authenticatedEmail");
  console.log("From local Storage:", email);

  console.log("From state", authenticatedEmail);

  useEffect(() => {
    axios
      .get(`https://toyswap.herokuapp.com/toys/${email}`, {
        params: {
          format: "json",
        },
      })
      .then((response) => {
        console.log("success in getting userInfo!", response.data);
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(`error in getting all toys! error message: ${error}`);
      });
  }, []);

  return (
    <div>
      <User
        first={userInfo.first}
        last={userInfo.last}
        email={userInfo.email}
        toys={userInfo.toys}
      ></User>
    </div>
  );
}

export default MyToys;
