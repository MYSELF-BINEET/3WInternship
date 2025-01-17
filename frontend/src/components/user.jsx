import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserSubmissionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    socialHandle: "",
    images: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formElement = e.target; // Reference to the form element
    const data = new FormData(formElement); // Collect form data directly from the form
  
    try {
      const response = await fetch("http://localhost:5050/api/users", {
        method: "POST",
        body: data,
      });
  
      if (response.ok) {
        toast.success("Submission Successful");
        setFormData({
          name: "",
          socialHandle: "",
          images: [],
        }); // Reset the state
        formElement.reset(); // Clear the form fields visually
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred during submission.");
    }
  };
  

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(`/admin`)} style={styles.adminButton}>
        Admin Login
      </button>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>User Submission Form</h1>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <label style={styles.label}>Social Media Handle:</label>
        <input
          type="text"
          name="socialHandle"
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        {/* <label style={styles.label}>Upload Images:</label>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          required
          style={styles.fileInput}
        /> */}
        <label style={styles.label}>Upload Images:</label>
        <div style={styles.fileInputContainer}>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            required
            style={styles.fileInput}
            id="fileUpload"
          />
          <label htmlFor="fileUpload" style={styles.customFileLabel}>
            Choose Files
          </label>
          <span style={styles.fileInfo}>
            {formData.images.length > 0
              ? `${formData.images.length} file(s) selected`
              : "No files selected"}
          </span>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f7f7f7",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  adminButton: {
    alignSelf: "flex-end",
    marginBottom: "20px",
    padding: "10px 20px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  form: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
  },
//   label: {
//     fontSize: "16px",
//     color: "#555",
//   },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
//   fileInput: {
//     padding: "5px",
//   },
  submitButton: {
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "center",
  },
  label: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
    display: "block",
  },
  fileInputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "10px",
    position: "relative",
  },
  fileInput: {
    opacity: 0,
    position: "absolute",
    zIndex: -1,
  },
  customFileLabel: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "14px",
    color: "#fff",
    background: "#007BFF",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  customFileLabelHover: {
    background: "#0056b3",
  },
  fileInfo: {
    fontSize: "14px",
    color: "#333",
    fontStyle: "italic",
  },
};

export default UserSubmissionForm;
