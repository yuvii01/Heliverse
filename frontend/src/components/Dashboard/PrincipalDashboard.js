// frontend/src/components/Dashboard/PrincipalDashboard.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const PrincipalDashboard = () => {

  const {users , classroom, setClassroom } = useContext(AuthContext) ;

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);



  const [id , setId] = useState(null);

  const fetchStudents = () => {
    if (users) {
      const stud = users.filter((user) => user.role === 'student');
   
      setStudents(stud);
    }
  };

  const fetchTeachers = () => {
    if (users) {
      const teach = users.filter((user) => user.role === 'teacher');
      setTeachers(teach);
    }
  };

  const [editform , setEditform] = useState(false) ;
  const EditUser = (id) => {
setEditform(!editform) ;
setId(id)
  }

const updateUser = (e) => {
e.preventDefault() ;
  const user = {
    name : e.target.name.value , 
    email : e.target.email.value ,
    password : e.target.password.value ,
    role : e.target.role.value ,
  }
  axios.put(`http://localhost:5000/api/users/update/${id}` ,{name : e.target.name.value , 
    email : e.target.email.value ,
    password : e.target.password.value ,
    role : e.target.role.value ,})
 .then((result) => {
  
 }).catch((err) => {
  
 });
}

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/api/users/delete/${id}`)
    .then((result) => {
      setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher._id !== id));
      fetchStudents() ;
    }).catch((err) => {
      
    });
  }


 


  useEffect(() => {
    console.log("classroom is " , classroom)
    fetchStudents() ;
    fetchTeachers() ;
  },[users])

  const navigator = useNavigate() ;


  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Principal Dashboard</h2>
      <Link
        to="/classrooms/create"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 inline-block"
      >
        Create Classroom
      </Link>
      <div className="grid grid-cols-1 gap-4">
        {classroom?.map((classroom, i) => {
         return <div
            key={i}
            className="p-4 bg-white rounded-lg shadow-md flex items-center gap-3"
          >
            <FaArrowRight className='flex items-center' />
           <div>
           <h3 className="text-lg font-semibold">{classroom.class}</h3>
           <p className='px-6'>Teacher: {classroom?.teacher || 'Unassigned'}</p>
            </div>
          

        
          </div>
})}
      </div>



<div className={`${editform ? 'relative scale-100' : 'hidden scale-0'} duration-500 text-center `}>
<form onSubmit={
  updateUser
}>)
  <input type='text' placeholder='Name' name='name'/>
  <input type='email' placeholder='email' name='email'/>
  <input type='password' placeholder='password' name='password'/>
  {/* <input type='text' placeholder='password' name='confirm-password'/> */}
  <input type='text' placeholder='role' name='role'/>
  <input type='submit' placeholder='Update User'/>
  
</form>
</div>

      <div className="grid grid-cols-1 gap-4">

<div className='flex justify-between'><div className='font-semibold text-xl'> Teacher's List</div> </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
         Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Role
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
   {
    teachers?.map((student, i) => (
      <tr key={i} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {student.name}
        </th>
        <td className="px-6 py-4">{student.email}</td>
        <td className="px-6 py-4">{student.role}</td>
        <td className="px-6 py-4 flex gap-5 text-2xl ">
         
        <div className='cursor-pointer ' onClick={() =>
        EditUser(student._id)}>  <CiEdit /> </div>
        <div className='cursor-pointer ' onClick = {() => {
        deleteStudent(student._id)
        }}>   <MdDelete /> </div>
          

            </td>
            </tr>
    ))
   }
    
    </tbody>
  </table>
</div>

      </div>





      <div className="grid grid-cols-1 gap-4">

<div className='flex justify-between'><div className='font-semibold text-xl'> Student's List</div> </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
         Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Role
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
   {
    students?.map((student, i) => (
      <tr key={i} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {student.name}
        </th>
        <td className="px-6 py-4">{student.email}</td>
        <td className="px-6 py-4">{student.role}</td>
        <td className="px-6 py-4 flex gap-5 text-2xl ">
         
        <div className='cursor-pointer ' onClick={() =>
        EditUser(student._id)}>  <CiEdit /> </div>
        <div className='cursor-pointer ' onClick = {() => {
        deleteStudent(student._id)
        }}>   <MdDelete /> </div>
          

            </td>
            </tr>
    ))
   }
    
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default PrincipalDashboard;
