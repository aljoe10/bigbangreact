import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import './register.css';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [useremailError, setUseremailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let isValid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (useremail.trim() === '') {
      setUseremailError('Email is required');
      isValid = false;
    } else {
      setUseremailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const inpobj = {
        userName: username,
        useremail: useremail,
        password: password,
        role: role,
      };

      fetch('https://localhost:44374/api/Users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inpobj),
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            window.alert('Login failed, invalid credentials');
          } else {
            window.alert('Registered successfully');
            navigate('/');
          }
        })
        .catch((err) => {
          window.alert('Invalid credentials');
          console.error('Login Failed due to: ' + err.message);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id = "backgroundReg">
      <div id = "blur">
        <form onSubmit={handleSubmit} className="container" id = "registerForm">
          <div className="card register-card">
            <div className="card-header">
              <h2>Register</h2>
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
                ></input>
                {usernameError && (
                  <div className="text-danger">{usernameError}</div>
                )}
              </div>
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input
                  value={useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                  className="form-control"
                  autoComplete="off"
                ></input>
                {useremailError && (
                  <div className="text-danger">{useremailError}</div>
                )}
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <div className="password-input-container">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                  {passwordVisible ? (
                    <BsEyeSlash
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <BsEye
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
                {passwordError && (
                  <div className="text-danger">{passwordError}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="exampleDropdown">Role</label>
                <select
                  className="form-control"
                  id="exampleDropdown"
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">--Role--</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
