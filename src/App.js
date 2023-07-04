import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import { Register } from './register';
import Doctor from './Doctor';
import Patient from './Patient';
import Admin from './Admin';
import Home from './Home';
import ContactForm from './contact';
import { NotFound } from './NotFound';
import Intro from './intro';
import Facilities from './specialities';


function App() {
  return (
    <Router>
      <Routes>
    <Route exact path="/" element={<Intro/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="register" element={<Register/>} />
    <Route exact path="/Admin" element={<Admin/>} />
    <Route exact path="/Doctor" element={<Doctor/>} />
    <Route exact path="/Patient" element={<Patient/>} />
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="/Specialities" element={<Facilities/>} />
    <Route exact path="/contact" element={<ContactForm/>} />
    <Route exact path="*" element={<NotFound/>} />
    
    </Routes>
    </Router>
  );
}

export default App;
