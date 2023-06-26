import express from "express";
import {getProduk , createProduk , updateProduk , deleteProduk} from "../controllers/ProdukController.js"

const router = express.Router();

router.get('/produk',getProduk)
router.get('/produk/:id',createProduk)
router.post('/produk',createProduk)
router.patch('/produk/:id',updateProduk)
router.delete('/produk/:id',deleteProduk)

export default router       