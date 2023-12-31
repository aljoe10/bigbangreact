import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Footer from "./Footer";

function Patient() {
  const navigate = useNavigate();
  const [p, setP] = useState([]);
  const [setDeleteMessage] = useState("");
  const [addData, setAddData] = useState({
    pname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    bloodType: "",
  });
  const [addMessage, setAddMessage] = useState("");
  const [editData, setEditData] = useState({
    patientid: "",
    pname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    bloodType: "",
  });
  const [disp] = useState("none");
  const [showCreateForm, setShowCreateForm] = useState(false); // New state variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://localhost:44374/api/Patients`)
      .then((res) => {
        console.log(res);
        setP(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePatients = (patientid) => {
    axios
      .delete(`https://localhost:44374/api/Patients/${patientid}`)
      .then((res) => {
        console.log(res);
        setDeleteMessage("Data deleted successfully!!!");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    axios
      .post(`https://localhost:44374/api/Patients`, addData)
      .then((res) => {
        console.log(res);
        setAddMessage("Data added successfully!");
        setAddData({
          pname: "",
          gender: "",
          dateOfBirth: "",
          email: "",
          phoneNumber: "",
          bloodType: "",
        });
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditInputChange = (e) => {
    setEditData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
      status: prevData.status,
    }));
  };

  const editPatients = (patientid) => {
    const patient = p.find((pdata) => pdata.patientid === patientid);
    if (patient) {
      setEditData(patient);
    }
  };

  const saveEdit = () => {
    axios
      .put(
        `https://localhost:44374/api/Patients/${editData.patientid}`,
        editData
      )
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <><nav
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
        </div>
        <button className="btn btn-link nav-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav><div className="Student-container">
        <h2 className="header" style={{ textAlign: "center" }}>
          Patient Records
        </h2>
        <table className="Student-table">
          <thead>
            <tr>
              <th>patientid</th>
              <th>pname</th>
              <th>gender</th>
              <th>dateofbirth</th>
              <th>email</th>
              <th>phonenumber</th>
              <th>bloodtype</th>
            </tr>
          </thead>
          <tbody>
            {p.map((pdata) => (
              <tr key={pdata.patientid}>
                <td>{pdata.patientid}</td>
                <td>{pdata.pname}</td>
                <td>{pdata.gender}</td>
                <td>{pdata.dateOfBirth}</td>
                <td>{pdata.email}</td>
                <td>{pdata.phoneNumber}</td>
                <td>{pdata.bloodType}</td>
                <td>
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => editPatients(pdata.patientid)}
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      width: "80px",
                      marginRight: "5px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => deletePatients(pdata.patientid)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "80px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="add-form"
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            display: showCreateForm ? "block" : "none", // Conditionally display the form
          }}
        >
          <h4>Create Patient Appointment</h4>
          <div className="form-group">
            <label htmlFor="pname">pname:</label>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
              value={addData.pname}
              onChange={handleAddInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">gender:</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={addData.gender}
              onChange={handleAddInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">dateofbirth:</label>
            <input
              type="text"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={addData.dateOfBirth}
              onChange={handleAddInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={addData.email}
              onChange={handleAddInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">phone number:</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={addData.phoneNumber}
              onChange={handleAddInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="bloodType">bloodtype:</label>
            <input
              type="text"
              className="form-control"
              id="bloodType"
              name="bloodType"
              value={addData.bloodType}
              onChange={handleAddInputChange} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add Data
          </button>
          {addMessage && (
            <div className="alert alert-success mt-2" role="alert">
              {addMessage}
            </div>
          )}
        </div>
        {editData.patientid && (
          <div
            className="edit-form"
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h4>Edit Patient Appointment Details</h4>
            <div className="form-group">
              <label htmlFor="edit-pname">pname:</label>
              <input
                type="text"
                className="form-control"
                id="edit-pname"
                name="pname"
                value={editData.pname}
                onChange={handleEditInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="edit-gender">gender:</label>
              <input
                type="text"
                className="form-control"
                id="edit-gender"
                name="gender"
                value={editData.gender}
                onChange={handleEditInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="edit-email">email:</label>
              <input
                type="text"
                className="form-control"
                id="edit-email"
                name="email"
                value={editData.email}
                onChange={handleEditInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="edit-phonenumber">phonenumber:</label>
              <input
                type="text"
                className="form-control"
                id="edit-phonenumber"
                name="phonenumber"
                value={editData.phoneNumber}
                onChange={handleEditInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="edit-bloodType">bloodtype:</label>
              <input
                type="text"
                className="form-control"
                id="edit-bloodType"
                name="bloodType"
                value={editData.bloodType}
                onChange={handleEditInputChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={saveEdit}>
              Save Changes
            </button>
            <div
              className="alert alert-success mt-2"
              role="alert"
              style={{ display: disp }}
            >
              Data has been changed successfully!
            </div>
          </div>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowCreateForm(!showCreateForm)} // Toggle the display of the form
        >
          Create
        </button>
        <Footer/>
      </div></>
  );
}

export default Patient;
