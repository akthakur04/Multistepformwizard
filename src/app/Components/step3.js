import React, { useState, useEffect } from "react";

export const Step3 = ({ nextStep, prevStep, formData, updateFormData }) => {
  const [image1, setImage1] = useState(formData.image1 || null);
  const [image2, setImage2] = useState(formData.image2 || null);

  useEffect(() => {
    updateFormData({ image1, image2 });
  }, [image1, image2]);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file.size > 1024 * 1024) {
      alert("File size should be less than 1MB");
    } else {
      setImage(file);
    }
  };
  const handleNextClick = () => {
    // Check if the form is valid
    if (image1 == null || image2 == null) {
      window.alert("Please fill all the marked * fields.");
    }
    else {
      nextStep();
    }
  };

  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Image Upload:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 3 - 4</h2>
          </div>
        </div>
        <label className="fieldlabels">Upload Your Photo:</label>
        <input
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          type="file"
          name="pic1"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setImage1)}
        />
        <label className="fieldlabels">Upload Signature Photo:</label>
        <input
          style={{
            backgroundColor: "var(--input-bg-color)",
            color: "var(--input-text-color)",
          }}
                    type="file"
          name="pic2"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setImage2)}
        />
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={handleNextClick} // Handle next step click
      />
      <input
        // style={{
        //   backgroundColor: "white",
        //   color: "black",
        // }}
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </fieldset>
  );
};
