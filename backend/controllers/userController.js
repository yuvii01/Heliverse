// backend/controllers/userController.js
const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {

    // let user_role = req.headers.user_role ;
  

    // if(!user_role) {
    //   user_role = 'student' ;
    // }
    const users = await User.find() ;
   

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // console.log(req.params.id)
    const finduser = await User.findById(req.params.id);
console.log(finduser)
    if (finduser) {
      await User.deleteOne({ _id : req.params.id}) ;
console.log("delete hogya")
      res.json({ message: 'User removed' });
    } else {
      console.log("unable to delete ")
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
