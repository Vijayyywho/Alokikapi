import express from "express";
import {
  getHistoricPlaceDetails,
  getAllHistoricPlaces,
} from "../Controller/HistoricPlace.controller.js"; // Update with your actual file path

const router = express.Router();

// Route to get details of a specific historic place
router.get("/:historicPlaceId", getHistoricPlaceDetails);

// Route to get all historic places
router.get("/", getAllHistoricPlaces);

export default router;
