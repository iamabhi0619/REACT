const jwt = require("jsonwebtoken");
const scretKey = 'abhishek';

function generateToken(user) {
  const paylode = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(paylode, scretKey, { expiresIn: "1hr" });
}

module.exports = {
  generateToken,
};
