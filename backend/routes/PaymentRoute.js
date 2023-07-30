import express from "express";
import { createPayment, deletePayment, getPayment, getPaymentById, updatePayment } from "../controllers/PaymentController.js";

const router = express.Router();

router.get("/payment", getPayment);
router.get("/payment/:id", getPaymentById);
router.post("/payment", createPayment);
router.patch("/payment/:id", updatePayment);
router.delete("/payment/:id", deletePayment);

export default router;
