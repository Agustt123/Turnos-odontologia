// src/models/appointment.ts

export interface Appointment {
    id: number;
    userId: number;
    date: string; // Usaremos el formato ISO para las fechas (YYYY-MM-DD)
    time: string; // Usaremos el formato de 24 horas HH:mm
    status: 'scheduled' | 'cancelled';
  }
  