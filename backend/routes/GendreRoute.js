import express from "express";
import {
  createGendre,
  deleteGendre,
  getGendre,
  getGendreById,
  updateGendre,
} from "../controllers/GendreController.js";

const router = express.Router();

router.get("/gendre", getGendre);
router.get("/gendre/:id", getGendreById);
router.post("/gendre", createGendre);
router.patch("/gendre/:id", updateGendre);
router.delete("/gendre/:id", deleteGendre);

export default router;
