// views/appointment/Appointment.jsx
import React, { useEffect, useState } from 'react';

import CardAppointment from '../../components/cardApointment/CardAppoinitment';
import axios from 'axios';

const GETTAPONIMENTURL="http://localhost:3000/appointments/ ";

export default function Appointment() {
  const [appointments, setAppointment] = useState([]);

  useEffect(()=> {
    axios.get(GETTAPONIMENTURL)
    .then(response => response.data)
    .then(appointmentsFromDB=>setAppointment(appointmentsFromDB))

  },[])
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
