import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box } from "@mui/material";
export const Success = ({ formData, prevStep }) => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
        <div className="col-5">
            <h6 className="steps">Step 4 - 4</h6>
          </div>

          <div className="col-7">
            <h2 className="fs-title">Success!</h2>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TaskAltIcon
            // marginBottom={3}
            sx={{
              fontSize: "100px",
              padding:1,

              marginBottom:3,
              textAlign: "center",
              cursor: "pointer",
              color: "green",
            }}
          />
        </Box>
        <h2 className="purple-text text-center">
          <strong>Registration Completed Successfully!</strong>
        </h2>
        <div className="row justify-content-center">
          <div className="col-7 text-center">
            <h4 className="purple-text text-center">Summary</h4>
            <p>Email: {formData.email}</p>
            <p>Username: {formData.userName}</p>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Phone: {formData.phone}</p>
            {/* <p>Address: {formData.address}</p> */}
          </div>
        </div>
      </div>
      {/* <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      /> */}
    </fieldset>
  );
};
