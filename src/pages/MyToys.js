import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";
import Toy from "../components/Toy";
import { Link, useNavigate } from "react-router-dom";

function MyToys() {
  const [userInfo, setUserInfo] = useState({});
  const [authenticatedEmail, setAuthenticatedEmail] = useState(
    localStorage.getItem("authenticatedEmail") || ""
  );

  let email = localStorage.getItem("authenticatedEmail");
  console.log("From local Storage:", email);

  console.log("From state", authenticatedEmail);

  let navigate = useNavigate();
  const handleSubmit = (toy, e) => {
    e.preventDefault();
    navigate("/swaptoys", { state: { toy: toy } });
  };

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

  if (userInfo.toys) {
    return (
      <div>
        <User
          first={userInfo.first}
          last={userInfo.last}
          email={userInfo.email}
          //toys={userInfo.toys}
        ></User>
        <div>
          {userInfo.toys.map((toy) => (
            <div key={toy.name}>
              <Toy data={toy}></Toy>
              {/* <button type="submit" onClick={(e) => handleSubmit(toy, e)}>
                Swap
              </button> */}
              <Link onClick={(e) => handleSubmit(toy, e)} to="/swaptoys">
                Choose
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
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
}

export default MyToys;
