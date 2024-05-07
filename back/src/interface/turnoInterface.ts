// src/interfaces/turno.interface.ts
import User from "./userInterface";
export enum Status{
  ACTIVE="ACTIVE",
  CANCELED="CANCELED"
}
export interface Turno {
  id: number;
  userId: number;
  fechaHora: Date;
  fechaCancelacion?: Date; // La fecha de cancelación es opcional si el turno ha sido cancelado
  status: Status; // Agrega la propiedad 'status' si es necesaria
}

export default Turno;
