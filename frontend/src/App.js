// frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Shared/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'; // Import Register
import HomePage from './pages/HomePage';
import PrincipalDashboard from './components/Dashboard/PrincipalDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import ClassroomList from './components/Classroom/ClassroomList';
import ClassroomDetail from './components/Classroom/ClassroomDetail';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/Shared/ProtectedRoute';
import './styles/global.css';
import CreateClassroom from './components/Classroom/CreateClassroom';
import EditUser from './components/Auth/EditUser';

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
          <Route path="/dashboard/principal" element={<PrincipalDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/classrooms" element={<ClassroomList />} />
          <Route path="/classrooms/create" element={<CreateClassroom />} />
          <Route path="/user/edit" element={<EditUser />} />>
          <Route path="/classrooms/:id" element={<ProtectedRoute><ClassroomDetail /></ProtectedRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
