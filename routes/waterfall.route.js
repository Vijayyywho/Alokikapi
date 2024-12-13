import express from "express";
import {
  getWaterfallDetails,
  getAllWaterfalls,
} from "../Controller/waterfall.controller.js";

const router = express.Router();

// Route to get details of a specific waterfall
router.get("/:waterfallId", getWaterfallDetails);

// Route to get all waterfalls
router.get("/", getAllWaterfalls);

export default router;
