import express from "express";
import { createPembayaran, deletePembayaran, getPembayaran, getPembayaranById, updatePembayaran } from "../controllers/PembayaranFilmController.js";


const router = express.Router();

router.get("/pembayaran", getPembayaran);
router.get("/pembayaran/:id", getPembayaranById);
router.post("/pembayaran", createPembayaran);
router.patch("/pembayaran/:id", updatePembayaran);
router.delete("/pembayaran/:id", deletePembayaran);

export default router;
