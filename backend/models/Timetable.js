// models/Timetable.js
const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  periods: [{ startTime: String, endTime: String, subject: String }]
});

const Timetable = mongoose.model('Timetable', TimetableSchema);

module.exports = Timetable;