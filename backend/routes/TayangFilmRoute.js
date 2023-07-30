import express from "express";
import { createTayang, deleteTayang, getTayang, getTayangById, updateTayang } from "../controllers/TayangFilmController.js";


const router = express.Router();

router.get("/tayangFilm", getTayang);
router.get("/tayangFilm/:id", getTayangById);
router.post("/tayangFilm", createTayang);
router.patch("/tayangFilm/:id", updateTayang);
router.delete("/tayangFilm/:id", deleteTayang);

export default router;
