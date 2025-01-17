import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('https://threewinternship.onrender.com/api/users', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setSubmissions([]);
    }
  };

  useEffect(() => {
    fetchSubmissions();

    const interval = setInterval(fetchSubmissions, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.container}>
        <button onClick={() => navigate(`/`)} style={styles.adminButton}>
        User Section
      </button>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <div style={styles.submissionsContainer}>
        {submissions.length === 0 ? (
          <p style={styles.noSubmissions}>No submissions yet.</p>
        ) : (
          submissions.map((submission) => (
            <div key={submission.id} style={styles.submissionCard}>
              <h2 style={styles.submissionTitle}>{submission.name}</h2>
              <p style={styles.submissionHandle}>{submission.socialHandle}</p>
              <div style={styles.imageContainer}>
                {Array.isArray(submission.images) &&
                  submission.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Uploaded Image ${index + 1}`}
                      style={styles.image}
                    />
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#f7f7f7',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  submissionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  noSubmissions: {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
    marginTop: '50px',
  },
  submissionCard: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  submissionTitle: {
    fontSize: '20px',
    color: '#007BFF',
    margin: '10px 0',
  },
  submissionHandle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '1px solid #ddd',
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
};

export default AdminDashboard;
