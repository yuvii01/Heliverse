// components/TeacherDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const [timetables, setTimetables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimetables = async () => {
      const response = await axios.get('http://localhost:3000/api/timetable/get-timetables');
      setTimetables(response.data);
    };
    fetchTimetables();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <ul>
        {timetables.map((timetable) => (
          <li key={timetable._id}>{timetable.subject}</li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeacherDashboard;