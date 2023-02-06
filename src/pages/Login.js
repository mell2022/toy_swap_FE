import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const [authenticatedEmail, setAuthenticatedEmail] = useState("")
  const navigate = useNavigate()

  const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456",
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // TODO: Implement google login logic
    // For now we assume it works and we get the email back
    localStorage.setItem("authenticatedEmail", "john@gmail.com");
    setAuthenticatedEmail("john@gmail.com");
    navigate("/mytoys");
  

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        console.log("User Loged In");
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("please check you username or Email");
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="Email or UserName">Email or username</label>
          <input
            type="text"
            placeholder="email or username"
            required
            value="blah"
            // value={UnameOrEmail}
            onChange={(e) => setUnameOrEmail(e.target.value)}
            className="Input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            placeholder="Password"
            required
            value="pass"
            // value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="Input"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      
    </div>
  );
};
export default Login;
