// userController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth'); // Import your token generation utility

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Passwords don't match
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // If email and password are correct, generate a JWT token
    const token = generateToken(user);

    // Send the token to the client
    res.json({ token });
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({ error: 'Login failed' });
  }
};
