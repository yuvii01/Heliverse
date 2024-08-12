// models/Classroom.js
const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  class: String,
  teacher : String ,
  student : String
});

const Classroom = mongoose.model('Classroom', ClassroomSchema);

module.exports = Classroom;