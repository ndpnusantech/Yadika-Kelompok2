import express from "express";
import { createPemesanan, deletePemesanan, getPemesanan, getPemesananById, updatePemesanan } from "../controllers/PemesananFilmController.js";


const router = express.Router();

router.get("/pemesananFilm", getPemesanan);
router.get("/pemesananFilm/:id", getPemesananById);
router.post("/pemesananFilm", createPemesanan);
router.patch("/pemesananFilm/:id", updatePemesanan);
router.delete("/pemesananFilm/:id", deletePemesanan);

export default router;
