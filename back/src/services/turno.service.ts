import Turno from "../interface/turnoInterface";

// Arreglo de turnos precargados
const turnos: Turno[] = [
    { id: 1, userId: 1, fechaHora: new Date(), fechaCancelacion: undefined, status: "active" },
    { id: 2, userId: 2, fechaHora: new Date(), fechaCancelacion: undefined, status: "active" },
    { id: 3, userId: 3, fechaHora: new Date(), fechaCancelacion: undefined, status: "active" }
];

const getAllTurnos = (): Turno[] => turnos;

const getTurnoById = (id: number): Turno | undefined => turnos.find(turno => turno.id === id);

const createTurno = (turno: Turno, userId: number): void => {
    // Asignar el ID del usuario al turno
    turno.userId = userId;
    // Agregar el turno al arreglo de turnos
    turnos.push(turno);
};

const cancelTurnoById = (id: number): void => {
    // Encontrar el turno correspondiente por ID y cambiar su estado a "cancelled"
    const turno = turnos.find(turno => turno.id === id);
    if (turno) {
        turno.status = 'cancelled';
    }
};

export const turnoService = {
    getAllTurnos,
    getTurnoById,
    createTurno,
    cancelTurnoById
    

};
