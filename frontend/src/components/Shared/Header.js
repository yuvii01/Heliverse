// frontend/src/components/Shared/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);


  console.log(user)
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/">Classroom Management</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
        
            {user ? (
              <>
               <li>
         <Link to={user.role == 'student' ? '/dashboard' : user.role =='teacher' ? '/dashboard/teacher' : '/dashboard/principal'}>Dashboard</Link>
         </li>
                <li>
                  <span>Welcome, {user.name}</span>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Logout
                  </button>
                </li>

                <li>
                <Link to="/register" className={`hover:underline ${user?.name == 'Principal' ? 'visible' : 'hidden'}`}>
                Register new Users
                </Link>
                </li>
              </>
            ) : (
              <li className='flex gap-2'>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>

  
              
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
