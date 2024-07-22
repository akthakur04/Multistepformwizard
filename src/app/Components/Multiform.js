"use client"; // Mark this component as a client component
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Success } from "./success";
import styles from "./MultiStepForm.css";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phone: "",
    image1: null,
    image2: null,
  });
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <div
      className="container-fluid"
      style={{
        boxSizing: "border-box",
        boxShadow: "0px 2px 4px rgb(224,224,224)",
        borderRadius: "4px",
        border: "0.8px solid rgb(224,224,224)",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading" style={{ marginBottom: "50px" }}>
              Sign Up Your User Account
            </h2>
            {currentStep !== 4 && <p>Fill all form field to go to next step</p>}
            <form id="msform">
              <ul id="progressbar">
                <li className={currentStep >= 1 ? "active" : ""} id="account">
                  <strong>Account</strong>
                </li>
                <li className={currentStep >= 2 ? "active" : ""} id="personal">
                  <strong>Personal</strong>
                </li>
                <li
                  className={currentStep >= 3 ? "active" : ""}
                  id="PhotoVerify"
                >
                  <strong>Image</strong>
                </li>
                <li className={currentStep >= 4 ? "active" : ""} id="confirm">
                  <strong>Finish</strong>
                </li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  // style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
              <br />

              {currentStep === 1 && (
                <Step1
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {currentStep === 2 && (
                <Step2
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {currentStep === 3 && (
                <Step3
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {currentStep === 4 && (
                <Success
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
