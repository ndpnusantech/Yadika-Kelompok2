import express from "express";
import {getUsers , createUser , updateUser , deleteUser} from "../controllers/UserController.js"

const router = express.Router();

router.get('/user',getUsers)
router.get('/user/:id',createUser)
router.post('/user',createUser)
router.patch('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

export default router       