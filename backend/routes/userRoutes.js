import express from "express";
import { register, login, updateStreak } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/streak", isAuthenticated, updateStreak);

export default router;
