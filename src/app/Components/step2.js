import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export const Step2 = ({ nextStep, prevStep,formData,updateFormData }) => {
  const [firstName, setFirstName] = useState(formData.firstName||"");
  const [lastName, setLastName] = useState(formData.lastName||"");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phone, setPhone] = useState(formData.phone||"");
  const [phoneError, setPhoneError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (firstNameError) {
      validateFirstName(e.target.value);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (lastNameError) {
      validateLastName(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (phoneError) {
      validatePhone(e.target.value);
    }
  };

  const validateFirstName = (value) => {
    if (!value.trim()) {
      setFirstNameError("Please enter your first name");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = (value) => {
    if (!value.trim()) {
      setLastNameError("Please enter your last name");
    } else {
      setLastNameError("");
    }
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(value)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleFirstNameBlur = () => {
    validateFirstName(firstName);
  };

  const handleLastNameBlur = () => {
    validateLastName(lastName);
  };

  const handlePhoneBlur = () => {
    validatePhone(phone);
  };
  useEffect(() => {
    updateFormData({ firstName, lastName, phone });
  }, [firstName, lastName, phone]);

  const handleNextClick = () => {
    // Check if the form is valid
    if (firstName == "" || lastName === "" || phone === "") {
      window.alert("Please fill all the marked * fields.");
    }
    // Check if there are any errors
    else {
      if (firstNameError || lastNameError || phoneError) {
        window.alert("Fields have errors. Please correct them.");
      } else {
        nextStep();
      }
    }
  };

  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Personal Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 2 - 4</h2>
          </div>
        </div>
        <Tooltip title={firstNameError} open={Boolean(firstNameError)} placement="top">
          <label className="fieldlabels">First Name: *</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
          />
        </Tooltip>
        <Tooltip title={lastNameError} open={Boolean(lastNameError)} placement="top">
          <label className="fieldlabels">Last Name: *</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
          />
        </Tooltip>
        <Tooltip title={phoneError} open={Boolean(phoneError)} placement="top">
          <label className="fieldlabels">Phone Number: *</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
        </Tooltip>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={handleNextClick} // Handle next step click
      />

      <input
        type="button"
        name="prev"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep} // Handle previous step click
      />
    </fieldset>
  );
};

