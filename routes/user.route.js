import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  savePost,
  profilePosts,
  getNotificationNumber,
} from "../Controller/user.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

const router = express.Router();

router.get("/notification", verifyToken, getNotificationNumber); // More specific route
router.get("/profilePosts", verifyToken, profilePosts);
router.get("/:id", verifyToken, getUser); // Less specific dynamic route
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/save", verifyToken, savePost);

export default router;
