const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if not token
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    // Extract token in case it's in format "Bearer <token>"
    const tokenPart = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
    
    // Verify token
    const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET || "fallback_secret");
    
    // Set user payload to req
    req.admin = decoded.admin;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};
