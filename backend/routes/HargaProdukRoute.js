import express from "express";
import {getHargaProduk , createHargaProduk , updateHargaProduk , deleteHargaProduk} from "../controllers/HargaProdukController.js"

const router = express.Router();

router.get('/hargaProduk',getHargaProduk)
router.get('/hargaProduk/:id',createHargaProduk)
router.post('/hargaProduk',createHargaProduk)
router.patch('/hargaProduk/:id',updateHargaProduk)
router.delete('/hargaProduk/:id',deleteHargaProduk)

export default router       