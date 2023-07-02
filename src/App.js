import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import Doctor from './Doctor';
import Patient from './Patient';
import Admin from './Admin';
import { Register } from './register';
import ContactForm from './contact';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="register" element={<Register/>} />
    <Route exact path="/Admin" element={<Admin/>} />
    <Route exact path="/Doctor" element={<Doctor/>} />
    <Route exact path="/Patient" element={<Patient/>} />
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="/contact" element={<ContactForm/>} />
    
    </Routes>
    </Router>
  );
}

export default App;
