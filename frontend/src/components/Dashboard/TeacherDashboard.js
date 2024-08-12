// frontend/src/components/Dashboard/TeacherDashboard.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const [timeTable, setTimeTable] = useState(false);

  const { users , fetchTeacher } = useContext(AuthContext) ;
  const navigator = useNavigate() ;


  const fetchStudents = () => {
    if (users) {
      const stud = users.filter((user) => user.role === 'student');
      setStudents(stud);
    }
  };

useEffect(() => {  fetchStudents() }, [users])



  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/api/users/delete/${id}`)
    .then((result) => {
      fetchTeacher() ;
      fetchStudents() ;
    }).catch((err) => {
      
    });
  }
  return (
    <div className="p-8">
      <div className="text-2xl font-bold mb-4">Teacher Dashboard</div>


      <div className={`${timeTable == true ? 'visible relative ' : 'hidden'} h-full w-screen z-[10] `}>
      <form onSubmit={(e) => {
        setTimeTable(!timeTable)}} className="max-w-md mx-auto">

      <div className='font-semibold text-xl'>Create TimeTable</div>
 <div className='flex gap-3'>
 <div className="relative z-0 w-full mb-5 group">

    
<input
  type="text"
  name="floating_email"
  id="floating_email"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_email"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Period Number-1 Name
</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input
  type="number"
  name="floating_password"
  id="floating_password"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_password"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Duration (in hrs)
</label>
</div>
 </div>


 <div className='flex gap-3'>
 <div className="relative z-0 w-full mb-5 group">

    
<input
  type="text"
  name="floating_email"
  id="floating_email"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_email"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Period Number-2 Name
</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input
  type="number"
  name="floating_password"
  id="floating_password"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_password"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Duration (in hrs)
</label>
</div>
 </div>


 <div className='flex gap-3'>
 <div className="relative z-0 w-full mb-5 group">

    
<input
  type="text"
  name="floating_email"
  id="floating_email"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_email"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Period Number-3 Name
</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input
  type="number"
  name="floating_password"
  id="floating_password"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_password"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Duration (in hrs)
</label>
</div>
 </div>

 <div className='flex gap-3'>
 <div className="relative z-0 w-full mb-5 group">

    
<input
  type="text"
  name="floating_email"
  id="floating_email"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_email"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Period Number-4 Name
</label>
</div>
<div className="relative z-0 w-full mb-5 group">
<input
  type="number"
  name="floating_password"
  id="floating_password"
  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  required=""
/>
<label
  htmlFor="floating_password"
  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
>
  Duration (in hrs)
</label>
</div>
 </div>

  
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

      </div>
      <div className="grid grid-cols-1 gap-4">

<div className='flex justify-between'><div className='font-semibold text-xl'> Student's List</div> <div onClick={() => {setTimeTable(!timeTable)}} className='flex gap-1 font-semibold'>Create Time-Table <span className='text-2xl font-bold'><IoAddOutline /></span> </div></div>
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
         
        <div className='cursor-pointer ' onClick={()=> {
         navigator('/student/edit')
        }}>  <CiEdit /> </div>
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

export default TeacherDashboard;
