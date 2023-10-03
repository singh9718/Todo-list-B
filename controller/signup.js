const User = require("../models/userModel");
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
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

    // Respond with a success message
    res.json({ message: "Signup successful" });
  } catch (error) {
    // Handle errors (e.g., database errors, hashing errors)
    console.error(error);
    res.status(500).json({ error: "Signup failed" });
  }
};
