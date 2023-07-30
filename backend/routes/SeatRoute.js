import express from "express";
import { createSeatFilm, deleteSeatFilm, getSeatFilm, getSeatFilmById, updateSeatFilm } from "../controllers/SeatController.js";


const router = express.Router();

router.get("/seatFilm", getSeatFilm);
router.get("/seatFilm/:id", getSeatFilmById);
router.post("/seatFilm", createSeatFilm);
router.patch("/seatFilm/:id", updateSeatFilm);
router.delete("/seatFilm/:id", deleteSeatFilm);

export default router;
