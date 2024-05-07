import express from "express";
import userRouter from "./user";
import turnosRouter from "./turno";

const router = express.Router();

// Montar los enrutadores de usuario y turnos en el enrutador principal
router.use(userRouter);
router.use(turnosRouter);

export default router;
