// turnosRoutes.ts

import express from "express";
import * as turnosController from "../../controllers/turnos";

const router = express.Router();

// Rutas de turnos
router.get("/turnos", turnosController.getAllTurnos); // Obtener todos los turnos
router.get("/turnos/:id", turnosController.getTurnoById); // Obtener un turno por ID
router.post("/turnos", turnosController.scheduleTurno); // Agendar un nuevo turno
router.put("/turnos/", turnosController.cancelTurno); // Cancelar un turno

export default router;
