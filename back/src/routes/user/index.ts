// userRoutes.ts

import express from "express";
import { getAllUsers, getUserById, registerUser, loginUser } from "../../controllers/user/index";


const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
