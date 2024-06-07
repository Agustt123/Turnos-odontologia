// views/appointment/Appointment.jsx
import React, { useState } from 'react';
import allAppointment from '../../helpers/allApointment';
import CardAppointment from '../../components/cardApointment/CardAppoinitment';

export default function Appointment() {
  const [appointments, setAppointment] = useState(allAppointment);

  return (
    <div>
      <h1>Reserva</h1>
      {
        appointments.map(appointment => (
          <CardAppointment
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            userId={appointment.userId}
            status={appointment.status}
          />
        ))
      }
    </div>
  );
}
