// backend/controllers/authController.js
const User = require('../models/User'); // Ensure this is the correct path to your User model
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.registerUser = async (req, res) => {
  const {name, email, password , role} = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(200).json({ message: 'User already exists' });

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name : name ,
      email: email,
      password: password, 
      role : role
    });

    console.log("User created:", newUser);

    // Respond with success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)

  try {
    const user = await User.findOne({ email });
   
console.log(user)
    if (user && user.password == password ) {
      
 
console.log("match password")
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token : generateToken(user._id)
      });
    } else {
      console.log("Invalid email or password")
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.logoutUser = (req, res) => {
  // const token = req.headers.authorization?.split(' ')[1]; // Extract token from Bearer header

  // if (token) {
  //   addTokenToBlacklist(token); // Add token to blacklist
  // }

  res.status(200).json({ message: 'Logged out successfully' });
};



exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // `req.user` is set by the `authorize` middleware
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};