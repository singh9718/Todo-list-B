// userController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');

exports.signup = async (req, res) => {
  try {
    const { email, password, confirmPassword  } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    
    // Check if the passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = generateToken(newUser);

    // Log the generated token
    console.log('Generated Token:', token);

    // Respond with a success message and the token
    res.json({ message: "Signup successful", token });
  } catch (error) {
    // Handle errors (e.g., database errors, hashing errors)
    console.error(error);
    res.status(500).json({ error: "Signup failed" });
  }
};
