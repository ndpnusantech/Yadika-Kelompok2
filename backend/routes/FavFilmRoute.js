import express from "express";
import { createFavFilm, deleteFavFilm, getFavFilm, getFavFilmById, updateFavFilm } from "../controllers/FavFilmController.js";

const router = express.Router();

router.get("/favFilm", getFavFilm);
router.get("/favFilm/:id", getFavFilmById);
router.post("/favFilm", createFavFilm);
router.patch("/favFilm/:id", updateFavFilm);
router.delete("/favFilm/:id", deleteFavFilm);

export default router;
