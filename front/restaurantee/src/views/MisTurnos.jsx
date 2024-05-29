import React, { useState } from 'react';
import Turno from '../components/primary/Turnos'; // Importa el componente Turno desde la ruta correcta
import myTurns from '../helper/MyTurns'; // Importa el arreglo de turnos desde la ruta correcta

function MisTurnos() {
  // Inicializa el estado con el arreglo de turnos
  const [turnos, setTurnos] = useState([]);

  function getTurnos() {
    // Actualiza el estado con el arreglo de turnos importado
    setTurnos(myTurns);
  }

  return (
    <div className="mis-turnos">
      <h1>Mis Turnos</h1>
      <button onClick={getTurnos}>Llenar turnos</button>

      {/* Mapea el arreglo de turnos y renderiza un componente Turno por cada uno */}
      {turnos.map((turno, index) => (
        <Turno
          key={index}
          id={turno.id}
          fecha={turno.fecha}
          hora={turno.hora}
          cliente={turno.cliente}
          servicio={turno.servicio}
          estado={turno.estado}
        />
      ))}
    </div>
  );
}

export default MisTurnos;
