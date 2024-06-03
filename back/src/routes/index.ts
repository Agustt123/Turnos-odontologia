import express from "express";
import userRoutes from "./user/user";
import appointmentRoutes from "./appointment/appointment";

const router = express.Router();

// Montar los enrutadores de usuario y turnos en el enrutador principal
router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);

export default router;
