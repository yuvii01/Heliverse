// backend/routes/classroomRoutes.js
const express = require('express');
const {
  createClassroom,
  assignTeacher,
  assignStudent,
  getClassrooms,
} = require('../controllers/classroomController');
const { protect } = require('../middleware/authMiddleware');
const { roleMiddleware } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', createClassroom);
router.put('/assign-teacher', protect, roleMiddleware(['principal']), assignTeacher);
router.put('/assign-student', protect, roleMiddleware(['principal', 'teacher']), assignStudent);
router.get('/', getClassrooms);

module.exports = router;
