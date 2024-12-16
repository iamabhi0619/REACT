const jwt = require("jsonwebtoken");


const secretKey = 'abhishek';

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ status: 401, message: "Unauthorized: Missing token" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "bearer" || !token) {
    return res.status(401).json({ status: 401, message: "Unauthorized: Invalid token" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).json({ status: 403, message: "Forbidden: Invalid token" });
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
