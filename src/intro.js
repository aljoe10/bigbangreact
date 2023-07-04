import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './intro.css'; 

const Intro = () => {

  return (
    <>
    <div id = "introBackground">
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark`}
        style={{
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">Aljo's Hospital</a>
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
                <Link className="nav-link" to="/login">Login / Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="image-container"
      >
        <div className="blur-overlay"></div>
        <div className="content">
          <h1>Welcome to Aljo's Hospital</h1>
          <p>
            We are committed to providing high-quality healthcare services to our patients.
          </p>
        </div>
      </div>
      </div>
    </>
    
  );
};

export default Intro;
