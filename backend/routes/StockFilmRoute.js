import express from "express";
import { createStockFilm, deleteStockFilm, getStockFilm, getStockFilmId, updateStockFilm } from "../controllers/StockFilmController.js";

const router = express.Router();

router.get("/stockFilm", getStockFilm);
router.get("/stockFilm/:id", getStockFilmId);
router.post("/stockFilm", createStockFilm);
router.patch("/stockFilm/:id", updateStockFilm);
router.delete("/stockFilm/:id", deleteStockFilm);

export default router;
