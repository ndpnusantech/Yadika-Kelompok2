import express from "express";
import {
  getHargaProduk,
  createHargaProduk,
  updateHargaProduk,
  deleteHargaProduk,
  getHargaProdukById,
} from "../controllers/HargaProdukController.js";

const router = express.Router();

router.get("/hargaProduk", getHargaProduk);
router.get("/hargaProduk/:id", getHargaProdukById);
router.post("/hargaProduk", createHargaProduk);
router.patch("/hargaProduk/:id", updateHargaProduk);
router.delete("/hargaProduk/:id", deleteHargaProduk);

export default router;
