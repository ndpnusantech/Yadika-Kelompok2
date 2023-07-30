import express from "express";
import { createLokasi, deleteLokasi, getLokasi, getLokasiById, updateLokasi } from "../controllers/LokasiController.js";

const router = express.Router();

router.get("/lokasi", getLokasi);
router.get("/lokasi/:id", getLokasiById);
router.post("/lokasi", createLokasi);
router.patch("/lokasi/:id", updateLokasi);
router.delete("/lokasi/:id", deleteLokasi);

export default router;
