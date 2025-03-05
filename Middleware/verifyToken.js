import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // Check for token in cookies
  const token = req.cookies?.token;
  console.log("All Cookies:", req.cookies); // Debug log
  console.log("Received Token:", token); // Debug log

  if (!token) {
    console.error("Token Missing!"); // Debug log
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      console.error("JWT Verification Error:", err.message); // Debug log
      return res.status(403).json({ message: "Token is not Valid!" });
    }

    console.log("Decoded Payload:", payload); // Debug log
    req.userId = payload.id; // Attach user ID to the request
    next();
  });
};
