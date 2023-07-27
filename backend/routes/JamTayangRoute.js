import express  from "express";
import { createJamTayang, deleteJamTayang, getJamTayang, getJamTayangById, updateJamTayang } from "../controllers/JamTayang.js";

const router = express.Router();


router.get("/jamTayang", getJamTayang);
router.get("/jamTayang/:id", getJamTayangById);
router.post("/jamTayang", createJamTayang);
router.patch("/jamTayang/:id", updateJamTayang);
router.delete("/jamTayang/:id", deleteJamTayang);

export default router;
