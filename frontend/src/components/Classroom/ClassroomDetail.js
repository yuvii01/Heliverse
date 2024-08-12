// frontend/src/components/Classroom/ClassroomDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClassroomDetail = () => {
  const { id } = useParams();
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    const fetchClassroom = async () => {
      const response = await axios.get(`/api/classrooms/${id}`);
      setClassroom(response.data);
    };

    fetchClassroom();
  }, [id]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Classroom Details</h2>
      {classroom && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold"> Classroom Name : {classroom.name}</h3>
          <p className='px-10'>Teacher: {classroom.teacher?.name || 'Unassigned'}</p>
          <h4 className="text-md font-semibold mt-4">Timetable:</h4>
          <ul>
            {classroom.timetable.map((period) => (
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

export default ClassroomDetail;
