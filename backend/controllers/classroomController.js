// backend/controllers/classroomController.js
const Classroom = require('../models/Classroom');

exports.createClassroom = async (req, res) => {
  const {className , teacher} = req.body ;

  console.log("hello") ;
  console.log(className)
  console.log(teacher)

  try {
    const classroom = await Classroom.create({ class:className ,teacher});
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.assignTeacher = async (req, res) => {
  const { classroomId, teacherId } = req.body;

  try {
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    classroom.teacher = teacherId;
    await classroom.save();
    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.assignStudent = async (req, res) => {
  const { classroomId, studentId } = req.body;

  try {
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    classroom.students.push(studentId);
    await classroom.save();
    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    console.log('Classroom' , classrooms)
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
