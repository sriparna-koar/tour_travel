const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');



exports.signup = async (req, res) => {
  try {
    const { username, email, password, phone, location } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, phone, location });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, 'secret');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
};
exports.logout = async (req, res) => {
  try {
    res.status(200).send('Logged out successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging out');
  }
};