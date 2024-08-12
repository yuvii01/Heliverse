// components/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [grades, setGrades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrades = async () => {
      const response = await axios.get('http://localhost:3000/api/grade/get-grades');
      setGrades(response.data);
    };
    fetchGrades();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {grades.map((grade) => (
          <li key={grade._id}>{grade.subject} - {grade.grade}</li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;