import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark`}
        style={{
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Aljo's Hospitals
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
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/specialities">
                  Specialities
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/syllabus">
                  Course Syllabus
                </Link>
              </li> */}
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li> */}
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/teacher">
                    Teacher Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient">
                    Patient Data
                  </Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Doctor() {
  const [p, setP] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredDoctors =
    filter === "All" ? p : p.filter((pdata) => pdata.status === filter);

  return (
    <div>
      <Navbar />
      <div className="Student-container">
        <h2 className="header" style={{ textAlign: "center" }}>Doctor Records</h2>
        <div className="filter-container">
          <label htmlFor="filter" className="filter-label">
            Filter Doctor Status:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
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
            {filteredDoctors.map((pdata) => (
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
