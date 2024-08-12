// frontend/src/components/Classroom/ClassroomList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);

  // useEffect(() => {
  //   const fetchClassrooms = async () => {
  //     const response = await axios.get('/api/classrooms');
  //     setClassrooms(response.data);
  //   };

  //   fetchClassrooms();
  // }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Classrooms</h2>
      <Link
        to="/classrooms/create"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 inline-block"
      >
        Create Classroom
      </Link>
      <div className="grid grid-cols-1 gap-4">
        {classrooms.map((classroom) => (
          <div
            key={classroom._id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">{classroom.name}</h3>
            <p>Teacher: {classroom.teacher?.name || 'Unassigned'}</p>
            <Link
              to={`/classrooms/${classroom._id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomList;
