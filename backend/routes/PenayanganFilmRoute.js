import express from "express";
import { createPenayangan, deletePenayangan, getPenayangan, getPenayanganById, updatePenayangan } from "../controllers/PenayanganFilmController.js";


const router = express.Router();

router.get("/penayanganFilm", getPenayangan);
router.get("/penayanganFilm/:id", getPenayanganById);
router.post("/penayanganFilm", createPenayangan);
router.patch("/penayanganFilm/:id", updatePenayangan);
router.delete("/penayanganFilm/:id", deletePenayangan);

export default router;
