// frontend/src/components/Dashboard/StudentDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    const fetchClassroom = async () => {
      let token  = JSON.stringify(localStorage.getItem('token'));
      // const val = JSON.stringify(token) ;
      // console.log("token is" , token)
    
       axios.get('http://localhost:5000/api/classrooms' ,{
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      }).then((result) => {
        console.log("response is the ", result)

        setClassroom(result.data);
      }).catch((err) => {
        console.error(err , "is classroom")
      });
      
      
    };

    fetchClassroom();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      {classroom && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{classroom.name}</h3>
          <p>Teacher: {classroom.teacher?.name}</p>
          <h4 className="text-md font-semibold mt-4">Timetable:</h4>
          <ul>
            {classroom?.timetable?.map((period) => (
              <li key={period.id}>
                {period.subject} - {period.startTime} to {period.endTime}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
