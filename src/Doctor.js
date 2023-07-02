import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Navbar() {
  const isLoggedIn = sessionStorage.getItem("jwttoken") !== null;

  return (
    <>
      {isLoggedIn && (
        <nav
          style={{
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              Aljo's Academy
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/highlight">
                    Program Highlights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tech">
                    Course Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/syllabus">
                    Course Syllabus
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/teacher">
                    Teacher Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient">
                    Patient Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tempnewform">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

function Doctor() {
  const [p, setP] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://localhost:44374/api/Doctors`)
      .then((res) => {
        console.log(res);
        setP(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="Student-container">
        <h2>Doctor Data</h2>
        <table className="Student-table">
          <thead>
            <tr>
              <th>doctorid</th>
              <th>dname</th>
              <th>specialization</th>
              <th>email</th>
              <th>phonenumber</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {p.map((pdata) => (
              <tr key={pdata.doctorid}>
                <td>{pdata.doctorid}</td>
                <td>{pdata.dname}</td>
                <td>{pdata.specialization}</td>
                <td>{pdata.email}</td>
                <td>{pdata.phoneNumber}</td>
                <td>{pdata.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctor;
