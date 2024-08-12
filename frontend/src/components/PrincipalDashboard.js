// components/PrincipalDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PrincipalDashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClassrooms = async () => {
      const response = await axios.get('http://localhost:3000/api/classroom/get-classrooms');
      setClassrooms(response.data);
    };
    fetchClassrooms();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>Principal Dashboard</h1>
      <ul>
        {classrooms.map((classroom) => (
          <li key={classroom._id}>{classroom.name}</li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default PrincipalDashboard;