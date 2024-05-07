import { Request, Response } from "express";

// Obtener el listado de todos los turnos
const getAllTurnos = (req: Request, res: Response): void => {
    res.send("Listado de todos los turnos obtenido correctamente.");
};

// Obtener el detalle de un turno específico por ID
const getTurnoById = (req: Request, res: Response): void => {
    const turnoId: string = req.params.id;
    res.send(`Detalle del turno con ID ${turnoId} obtenido correctamente.`);
};

// Agendar un nuevo turno
const scheduleTurno = (req: Request, res: Response): void => {
    res.send("Turno agendado correctamente.");
};

// Cambiar el estado de un turno a "cancelled"
const cancelTurno = (req: Request, res: Response): void => {
    res.send("Turno cancelado correctamente.");
};

export { getAllTurnos, getTurnoById, scheduleTurno, cancelTurno };
