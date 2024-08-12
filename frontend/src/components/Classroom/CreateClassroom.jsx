import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router';

const CreateClassroom = () => {



    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);


    const navigator = useNavigate() ;
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);

      };


      
    const toggle = () => {
      setDrop(!drop);  
    };
      const {users , setClassroom} = useContext(AuthContext) ;

      const [students, setStudents] = useState([]);
      const [selstudent,  setselected] = useState(null);
      const [teachers, setTeachers] = useState([]);
    
      const fetchStudents = () => {
        if (users) {
          const stud = users.filter((user) => user.role === 'student');
          console.log('Fetched students:', stud); // Debug log
          setStudents(stud);
        }
      };
    
      const fetchTeachers = () => {
        if (users) {
          const teach = users.filter((user) => user.role === 'teacher');
          console.log('Fetched teachers:', teach); // Debug log
          setTeachers(teach);
        }
      };
    

      

      const formsubmithandler = async(e) => {
        e.preventDefault() ;
        
        console.log("e is" , e)
        const data = {
          class : e.target.class.value ,
          teacher : selectedTeacher?.name ,
          students : selstudent?.name
        }
        console.log(data)


        const response = await axios.post('http://localhost:5000/api/classrooms' , { className: e.target.class.value ,
          teacher : selectedTeacher?.name ,
          students : selstudent?.name });
        console.log("response aaya h bhaisab" , response)
        setClassroom(response.data);
      
    
        
      
        
        setClassroom(data) ;
        e.target.reset() ;

        navigator('/dashboard/principal')
      }
    
    
    
      const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/api/users/delete/${id}`)
        .then((result) => {
          fetchTeachers() ;
          fetchStudents() ;
        }).catch((err) => {
          
        });
      }
    
    
    
      useEffect(() => {
        fetchStudents() ;
        fetchTeachers() ;
      },[users])
    

      const handleTeacherSelect = (teacher) => {
        setSelectedTeacher(teacher);
        setIsDropdownOpen(false); // Close the dropdown
      };

      const handle = (teacher) => {
        setselected(teacher);
        setDrop(false); // Close the dropdown
      };


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Create Classroom</h2>
  
      <form onSubmit={formsubmithandler}>
        <div className='mb-4'>
          <label htmlFor="className" className='block text-sm font-medium text-gray-700 mb-2'>Name of the Class</label>
          <input
            type="text"
            id="class"
            name='class'
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter class name"
            required
          />
        </div>
  
        <div className='mb-4'>
          <label htmlFor="teacherSelect" className='block text-sm font-medium text-gray-700 mb-2'>Assign Teacher to this Class</label>
          <div className="relative">
            <button
            name='teacher'
              type="button"
              onClick={toggleDropdown}
              className="bg-gray-200 px-4 py-2 rounded-md border border-gray-300 w-full text-left focus:outline-none"
            >
              {selectedTeacher ? selectedTeacher.name : "Select Teacher"}
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {teachers.map((teacher, i) => (
                  <li
                    key={i}
                    onClick={() => handleTeacherSelect(teacher)}
                    className={`px-4 py-2 cursor-pointer ${
                      selectedTeacher?.id === teacher.id ? "bg-green-200" : "hover:bg-gray-100"
                    }`}
                  >
                    {teacher.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
  
        <div className='mb-4'>
          <label htmlFor="studentSelect" className='block text-sm font-medium text-gray-700 mb-2'>Add Students to this Class</label>
          <div className="relative">
            <button
              type="button"
              onClick={toggle}
              className="bg-gray-200 px-4 py-2 rounded-md border border-gray-300 w-full text-left focus:outline-none"
            >
              {selstudent ? selstudent.name : "Select Student"}
            </button>
            {drop && (
              <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {students.map((student, i) => (
                  <li
                    key={i}
                    onClick={() => handle(student)}
                    className={`px-4 py-2 cursor-pointer ${
                      selstudent?.id === student.id ? "bg-green-200" : "hover:bg-gray-100"
                    }`}
                  >
                    {student.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
  
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Classroom
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default CreateClassroom