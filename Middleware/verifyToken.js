import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log("Received Token:", token); // Debug log

  if (!token) {
    console.error("Token Missing!");
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      console.error("JWT Verification Error:", err.message); // Debug log
      return res.status(403).json({ message: "Token is not Valid!" });
    }

    console.log("Decoded Payload:", payload); // Debug log
    req.userId = payload.id; // Attach user ID
    next();
  });
};
