import express from "express";
import { createHistoryTrans, deleteHistoryTrans, getHistoryTrans, getHistoryTransById, updateHistoryTrans } from "../controllers/HistoryTransaksiController.js";


const router = express.Router();

router.get("/historyTransaksi", getHistoryTrans);
router.get("/historyTransaksi/:id", getHistoryTransById);
router.post("/historyTransaksi", createHistoryTrans);
router.patch("/historyTransaksi/:id", updateHistoryTrans);
router.delete("/historyTransaksi/:id", deleteHistoryTrans);

export default router;
