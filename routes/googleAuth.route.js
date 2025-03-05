import express from "express";
import passport from "passport";

const router = express.Router();

// Google OAuth Login Route
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Callback Route
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "http://localhost:5173/profile", // Redirect to frontend
  })
);

export default router;
