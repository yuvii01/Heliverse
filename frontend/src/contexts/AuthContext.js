// frontend/src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [classroom, setClassroom] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  // Fetch user data from server or localStorage


  const fetchTeacher = async () => {
      
    
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      localStorage.removeItem('token'); // Clear token if error occurs
      setUser(null);
    }
  
};

const getClassroom = async () => { 
  axios.get('http://localhost:5000/api/classrooms')
  .then((result) => {
    // console.log("result is classroom of" , result.data)
    setClassroom(result.data);
  }).catch((err) => {
    console.log("error")
  });
}


  useEffect(() => {
    getClassroom();
    const fetchUser = async () => {
      
        const token = localStorage.getItem('token');
        if (token) {
          try {


            const response = await axios.get('http://localhost:5000/api/auth/me', {
              headers: { 'Authorization': `Bearer ${token}` }
            });
           
            setUser(response.data);
          } catch (error) {  localStorage.removeItem('token'); // Clear token if error occurs
            setUser(null);
          }
        }
      };

    fetchUser();

 
fetchTeacher();



    
  }, []);



  






  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      // console.log("hello bhai")
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      setUser(response.data);

      
      if(response.data?.role == 'student'){
        window.location.href = '/dashboard';
      }
      else if(response.data?.role == 'teacher'){
        window.location.href = '/dashboard/teacher';
      }
      else{
        window.location.href = '/dashboard/principal' ;
      }
      // navigate('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Register function
  const register = async (name ,email, password , role) => {
    try {

            axios.post('http://localhost:5000/api/auth/register', {name ,email, password , role})
      .then(async(result) => {
     
      //   const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      // localStorage.setItem('token', response.data.token); // Store token
      window.location.href = '/';
      
      }).catch((err) => {
        console.log("error is" , err)
    
      });
     // Automatically log in after registration
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout'); // Optional: Call server-side logout if implemented
      localStorage.removeItem('token'); // Remove token from localStorage
      setUser(null);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout , student , users , fetchTeacher , classroom , setClassroom }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
