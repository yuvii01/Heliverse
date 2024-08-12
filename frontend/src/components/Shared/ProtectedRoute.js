import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
// import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Routes
      {...rest}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
