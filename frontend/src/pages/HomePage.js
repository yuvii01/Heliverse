// frontend/src/pages/HomePage.js
import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Classroom Management System</h2>
      {user ? (
        <p>You are logged in as {user.name}.</p>
      ) : (
        <p>Please login to access your dashboard.</p>
      )}
    </div>
  );
};

export default HomePage;
