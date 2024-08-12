// // frontend/src/services/authService.js
// import api from './api';
// import jwtDecode from 'jwt-decode';


// const login = async (email, password) => {
//   const { data } = await api.post('/auth/login', { email, password });
//   localStorage.setItem('token', data.token);
//   return jwtDecode(data.token);  // Assuming you're using jwt-decode to parse the token
// };

// export default {
//   login
// };
