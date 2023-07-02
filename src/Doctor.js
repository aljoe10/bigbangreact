import React, { useState, useEffect } from "react";
import axios from "axios";

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
  );
}

export default Doctor;
