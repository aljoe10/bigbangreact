import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
//import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import './login.css';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword] = useState(false);  //setShowPassword
  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 5) {
      setPasswordError("Password must have a minimum of 5 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (validate()) {
  //     if (username === "Alvin") {
  //       if (password === "123") {
  //         usenavigate("/highlight");
  //       } else {
  //         window.alert("Incorrect password");
  //       }
  //     } else {
  //       window.alert("Incorrect Username");
  //     }
  //   }
  // };

  const handleLoginUsingAPI = (e) => {
    e.preventDefault();

    if (validate()) {
      let inpobj = {
        userName: username,
        password: password,
      };

      fetch("https://localhost:44374/api/Token", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inpobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            window.alert("Invalid Credentials");
          } else {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("jwttoken", resp.token);
            console.log(resp.token);
            const decodedToken = jwt_decode(resp.token);
            console.log(decodedToken);
            const role =
              decodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ];
            // console.log(role); 
            // usenavigate("/highlight");

            if (role === "Admin") {
              usenavigate("/Admin");
            } else if (role === "Doctor") {
              usenavigate("/Patient");
            } else {
              usenavigate("/Doctor");
            }
          }
        })
        .catch((err) => {
          window.alert("Please enter the details correctly");
        });
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  return (
    <div id = "background">
      <div id = "blur">
        <form onSubmit={handleLoginUsingAPI} className="container" id = "loginForm">
          <div className="card login-card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body"> 
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
                {usernameError && <div className="text-danger">{usernameError}</div>}
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                  {/* <span className="input-group-text" onClick={togglePasswordVisibility}>
                    {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                  </span> */}
                </div>
                {passwordError && <div className="text-danger">{passwordError}</div>}
              </div>
            </div>
            <div className="card-footer">
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <div className="mt-4" id="reg">
                <span>Create New Account? </span> 
                <Link className="btn btn-success mt-2" to={"/register"} style = {{width: '25%'}}>
                  Register
                </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
  );
};
