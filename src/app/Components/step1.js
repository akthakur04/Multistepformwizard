import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";

export const Step1 = ({ nextStep, prevStep, formData, updateFormData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [userName, setUserName] = useState(formData.userName || "");
  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(formData.confirmPassword || "");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    updateFormData({ email, userName, password, confirmPassword });
  }, [email, userName, password, confirmPassword]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      validateEmail(e.target.value);
    }
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
    if (e.target.value === "") {
      setNameError("Please enter a user name");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      validatePasswords(e.target.value, confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (passwordError) {
      validatePasswords(password, e.target.value);
    }
  };

  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    if (passwordValue !== confirmPasswordValue) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordBlur = () => {
    validatePasswords(password, confirmPassword);
  };

  const handleConfirmPasswordBlur = () => {
    validatePasswords(password, confirmPassword);
  };

  const handleEmailBlur = (e) => {
    validateEmail(e.target.value);
  };

  const handleNextClick = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      window.alert("Please fill all the marked * fields.");
    } else if (emailError || passwordError) {
      window.alert("Fields have errors. Please correct them.");
    } else {
      nextStep();
    }
  };

  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Account Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 1 - 4</h2>
          </div>
        </div>
        <Tooltip title={emailError} open={Boolean(emailError)} placement="top">
          
          <label className="fieldlabels">Email: *</label>
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </Tooltip>
        <Tooltip title={nameError} open={Boolean(nameError)} placement="top">
          <label className="fieldlabels">Username: *</label>
          <input
            type="text"
            name="uname"
            placeholder="UserName"
            value={userName}
            onChange={handleUserChange}
          />
        </Tooltip>
        <Tooltip title={passwordError} open={Boolean(passwordError)} placement="top">
          <label className="fieldlabels">Password: *</label>
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </Tooltip>
        <Tooltip title={passwordError} open={Boolean(passwordError)} placement="top">
          <label className="fieldlabels">Confirm Password: *</label>
          <input
            type="password"
            name="cpwd"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
          />
        </Tooltip>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={handleNextClick}
      />
    </fieldset>
  );
};
