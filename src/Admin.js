import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  // Doctor state variables and methods
  const [doctors, setDoctors] = useState([]);
  const [setDeleteDoctorMessage] = useState("");
  const [addDoctorData, setAddDoctorData] = useState({
    dname: "",
    specialization: "",
    email: "",
    phoneNumber: "",
    status: "",
  });
  const [addDoctorMessage, setAddDoctorMessage] = useState("");
  const [editDoctorData, setEditDoctorData] = useState({
    doctorid: "",
    dname: "",
    specialization: "",
    email: "",
    phoneNumber: "",
    status: "",
  });
  const [displayEditDoctorForm, setDisplayEditDoctorForm] = useState(false);

  // Patient state variables and methods
  const [patients, setPatients] = useState([]);
  const [setDeletePatientMessage] = useState("");
  const [addPatientData, setAddPatientData] = useState({
    pname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    bloodType: "",
  });
  const [addPatientMessage, setAddPatientMessage] = useState("");
  const [editPatientData, setEditPatientData] = useState({
    patientid: "",
    pname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    bloodType: "",
  });
  const [displayEditPatientForm, setDisplayEditPatientForm] = useState(false);

  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);

  // Doctor related methods

  const fetchDoctors = () => {
    axios
      .get(`https://localhost:44374/api/Doctors`)
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDoctor = (doctorId) => {
    axios
      .delete(`https://localhost:44374/api/Doctors/${doctorId}`)
      .then((res) => {
        console.log(res);
        setDeleteDoctorMessage("Doctor deleted successfully!");
        fetchDoctors();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setAddDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addDoctor = () => {
    axios
      .post(`https://localhost:44374/api/Doctors`, addDoctorData)
      .then((res) => {
        console.log(res);
        setAddDoctorMessage("Doctor added successfully!");
        setAddDoctorData({
            dname: "",
            specialization: "",
            email: "",
            phoneNumber: "",
            status: "",
        });
        fetchDoctors();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditDoctorInputChange = (e) => {
    setEditDoctorData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const editDoctor = (doctorId) => {
    const doctor = doctors.find((doc) => doc.doctorId === doctorId);
    if (doctor) {
      setEditDoctorData(doctor);
      setDisplayEditDoctorForm(true);
    }
  };

  const toggleStatus = (data) => {
    setEditDoctorData({
      doctorid: data.doctorid,
      dname: `${data.dname}`,
      specialization: `${data.specialization}`,
      email: `${data.email}`,
      phoneNumber: `${data.phoneNumber}`,
      status: `${
        data.status.toLowerCase() === "active" ? "Inactive" : "Active"
      }`,
    });
  };

  useEffect(() => {
    saveEditDoctor();
  }, [editDoctorData]);

  const saveEditDoctor = () => {
    axios
      .put(`https://localhost:44374/api/Doctors/${editDoctorData.doctorId}`, editDoctorData)
      .then((res) => {
        console.log(res);
        fetchDoctors();
        setDisplayEditDoctorForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Patient related methods

  const fetchPatients = () => {
    axios
      .get(`https://localhost:44374/api/Patients`)
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePatient = (patientId) => {
    axios
      .delete(`https://localhost:44374/api/Patients/${patientId}`)
      .then((res) => {
        setDeletePatientMessage("Patient deleted successfully!");
        fetchPatients();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddPatientInputChange = (e) => {
    const { name, value } = e.target;
    setAddPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addPatient = () => {
    axios
      .post(`https://localhost:44374/api/Patients`, addPatientData)
      .then((res) => {
        setAddPatientMessage("Patient added successfully!");
        setAddPatientData({
            pname: "",
            gender: "",
            dateOfBirth: "",
            email: "",
            phoneNumber: "",
            bloodType: "",
        });
        fetchPatients();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditPatientInputChange = (e) => {
    setEditPatientData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const editPatient = (patientId) => {
    const patient = patients.find((pat) => pat.patientId === patientId);
    if (patient) {
      setEditPatientData(patient);
      setDisplayEditPatientForm(true);
    }
  };

  const saveEditPatient = () => {
    axios
      .put(`https://localhost:44374/api/Patients/${editPatientData.patientId}`, editPatientData)
      .then((res) => {
        fetchPatients();
        setDisplayEditPatientForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Admin-container">
      {/* Doctor section */}
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
          {doctors.map((docdata) => (
            <tr key={docdata.doctorid}>
              <td>{docdata.doctorid}</td>
              <td>{docdata.dname}</td>
              <td>{docdata.specialization}</td>
              <td>{docdata.email}</td>
              <td>{docdata.phoneNumber}</td>
              <td>{docdata.status}</td>
              <td>
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => editDoctor(docdata.doctorid)}
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
                  onClick={() => deleteDoctor(docdata.doctorid)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "80px",
                  }}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => toggleStatus(docdata)}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "125px",
                    height: "30px",
                  }}
                >
                  Active Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="add-form"
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
      >
        <h4>Add Doctor Details</h4>
        <div className="form-group">
          <label htmlFor="dname">dname:</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            name="dname"
            value={addDoctorData.dname}
            onChange={handleAddDoctorInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">specialization:</label>
          <input
            type="text"
            className="form-control"
            id="specialization"
            name="specialization"
            value={addDoctorData.specialization}
            onChange={handleAddDoctorInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={addDoctorData.email}
            onChange={handleAddDoctorInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">phone number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={addDoctorData.phoneNumber}
            onChange={handleAddDoctorInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">status:</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={addDoctorData.status}
            onChange={handleAddDoctorInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addDoctor}>
          Add Data
        </button>
        {addDoctorMessage && (
          <div className="alert alert-success mt-2" role="alert">
            {addDoctorMessage}
          </div>
        )}
      </div>
      {editDoctorData.doctorid && (
        <div
          className="edit-form"
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h4>Edit Doctors</h4>
          <div className="form-group">
            <label htmlFor="edit-dname">dname:</label>
            <input
              type="text"
              className="form-control"
              id="edit-dname"
              name="dname"
              value={editDoctorData.dname}
              onChange={handleEditDoctorInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-specialization">specialization:</label>
            <input
              type="text"
              className="form-control"
              id="edit-specialization"
              name="specialization"
              value={editDoctorData.specialization}
              onChange={handleEditDoctorInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-email">email:</label>
            <input
              type="text"
              className="form-control"
              id="edit-email"
              name="email"
              value={editDoctorData.email}
              onChange={handleEditDoctorInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-phonenumber">phonenumber:</label>
            <input
              type="text"
              className="form-control"
              id="edit-phonenumber"
              name="phonenumber"
              value={editDoctorData.phoneNumber}
              onChange={handleEditDoctorInputChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={saveEditDoctor}>
            Save Changes
          </button>
          <div
            className="alert alert-success mt-2"
            role="alert"
            style={{ display: displayEditDoctorForm }}
          >
            Data has been changed successfully!
          </div>
        </div>
      )}
      
      {/* Patient section */}
      <h2>Patient Data</h2>
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
          {patients.map((patdata) => (
            <tr key={patdata.patientid}>
              <td>{patdata.patientid}</td>
              <td>{patdata.pname}</td>
              <td>{patdata.gender}</td>
              <td>{patdata.dateOfBirth}</td>
              <td>{patdata.email}</td>
              <td>{patdata.phoneNumber}</td>
              <td>{patdata.bloodType}</td>
              <td>
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => editPatient(patdata.patientid)}
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
                  onClick={() => deletePatient(patdata.patientid)}
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
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
      >
        <h4>Add Patient Details</h4>
        <div className="form-group">
          <label htmlFor="pname">pname:</label>
          <input
            type="text"
            className="form-control"
            id="pname"
            name="pname"
            value={addPatientData.pname}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">gender:</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={addPatientData.gender}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">dateofbirth:</label>
          <input
            type="text"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={addPatientData.dateOfBirth}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={addPatientData.email}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">phone number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={addPatientData.phoneNumber}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodType">bloodtype:</label>
          <input
            type="text"
            className="form-control"
            id="bloodType"
            name="bloodType"
            value={addPatientData.bloodType}
            onChange={handleAddPatientInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addPatient}>
          Add Data
        </button>
        {addPatientMessage && (
          <div className="alert alert-success mt-2" role="alert">
            {addPatientMessage}
          </div>
        )}
      </div>
      {editPatientData.patientid && (
        <div
          className="edit-form"
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h4>Edit Patient</h4>
          <div className="form-group">
            <label htmlFor="edit-pname">pname:</label>
            <input
              type="text"
              className="form-control"
              id="edit-pname"
              name="pname"
              value={editPatientData.pname}
              onChange={handleEditPatientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-gender">gender:</label>
            <input
              type="text"
              className="form-control"
              id="edit-gender"
              name="gender"
              value={editPatientData.gender}
              onChange={handleEditPatientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-email">email:</label>
            <input
              type="text"
              className="form-control"
              id="edit-email"
              name="email"
              value={editPatientData.email}
              onChange={handleEditPatientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-phonenumber">phonenumber:</label>
            <input
              type="text"
              className="form-control"
              id="edit-phonenumber"
              name="phonenumber"
              value={editPatientData.phoneNumber}
              onChange={handleEditPatientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-bloodType">bloodtype:</label>
            <input
              type="text"
              className="form-control"
              id="edit-bloodType"
              name="bloodType"
              value={editPatientData.bloodType}
              onChange={handleEditPatientInputChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={saveEditPatient}>
            Save Changes
          </button>
          <div
            className="alert alert-success mt-2"
            role="alert"
            style={{ display: displayEditPatientForm }}
          >
            Data has been changed successfully!
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
