// src/controllers/appointmentController.ts
import { Request, Response } from 'express';
import { Appointment } from '../interface/appointment';

let appointments: Appointment[] = [];

export const getAppointments = (req: Request, res: Response) => {
  res.json(appointments);
};

export const getAppointmentById = (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment = appointments.find(appointment => appointment.id === parseInt(id));
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).send('Turno no encontrado');
  }
};

export const scheduleAppointment = (req: Request, res: Response) => {
  const { userId, date, time } = req.body;
  const newAppointment: Appointment = {
    id: appointments.length + 1,
    userId,
    date,
    time,
    status: 'scheduled'
  };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
};

export const cancelAppointment = (req: Request, res: Response) => {
  const { id } = req.body;
  const appointment = appointments.find(appointment => appointment.id === parseInt(id));
  if (appointment) {
    appointment.status = 'cancelled';
    res.send('Turno cancelado');
  } else {
    res.status(404).send('Turno no encontrado');
  }
};
