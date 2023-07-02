import React, { useState } from 'react';
//import './TempNewForm.css';
import ContactChild from './contactchild';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [buttonClick, setButtonClick] = useState('');
  const [checkValid, setCheckValid] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  //const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };

//   const handleImageChange = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length < 4) {
      setCheckValid('Name is too short');
      setButtonClick('');
    } else if (!email || !contact) {
      setCheckValid('Fill in the required fields');
      setButtonClick('');
    } else if (!/^\d{10}$/.test(contact)) {
      setCheckValid('Invalid contact number');
      setButtonClick('');
    } else {
      setButtonClick(firstName);
      setCheckValid('');
      setFormSubmitted(true);
      alert(`Form is submitted: ${firstName}`);
    }
  };

  return (
    <div className="mine">
      {formSubmitted ? (
        <>
          <p className="mt-4">Your Form is submitted</p>
          <p>Name: {firstName}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact}</p>
          {/* <p>{selectedImage && <img src={selectedImage} alt="Selected" className="selected-image" />}</p> */}

          <ContactChild firstName={firstName} email={email} contact={contact} />
        </>
      ) : (
        <>
          <div className="work mt-4">
            <p className="mb-2">How Can We Help You</p>
            <p className="greetings">Get In Touch With Us</p>
            <p>Enter Your Info: {buttonClick}</p>

            <div className="contain">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control custom-input"
                    type="text"
                    placeholder="Name"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control custom-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control custom-input"
                    type="text"
                    placeholder="Phone No."
                    value={contact}
                    onChange={handleContactChange}
                  />
                </div>
                {/* <div className="mb-3">
                  <input
                    className="form-control custom-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div> */}
                {checkValid && <p className="error">{checkValid}</p>}
                <div className="btn-container">
                  <button type="submit" className="btn btn-primary">
                    Submit Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;
