import express from "express";
import { createPesanan, deletePesanan, getPesanan, getPesananById, updatePesanan } from "../controllers/TanggalPesanController.js";


const router = express.Router();

router.get("/tanggalPesan", getPesanan);
router.get("/tanggalPesan/:id", getPesananById);
router.post("/tanggalPesan", createPesanan);
router.patch("/tanggalPesan/:id", updatePesanan);
router.delete("/tanggalPesan/:id", deletePesanan);

export default router;
