// utils/auth.js
const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
    // Add other user-related data if needed
  };

  const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
  return token;
}

module.exports = { generateToken };
