// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser , logoutUser, authenticateToken, getMe} = require('../controllers/authController');
const { authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser); // Added logout route
router.get('/me', authorize, getMe); // Protect this route with the authorize middleware
module.exports = router;
