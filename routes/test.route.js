import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../Controllers/test.controller.js";

const router = express.Router();

router.get("/should-be-logged-in", shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

export default router; // Corrected export
