// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String ,
  name : String ,
  admin : Boolean
});

const User = mongoose.model('User', UserSchema);

module.exports = User;