import React from 'react';
import PropTypes from 'prop-types';
import './turnos.css'; // Importa el archivo CSS correspondiente

function Turno({ id, fechaHora, status, fechaCancelacion }) {
  return (
    <div className="turno">
      <h2>Turno ID: {id}</h2>
      <p>Fecha y Hora: {fechaHora.toString()}</p>
      <p>Estado: {status}</p>
      {status === 'CANCELED' && (
        <p>Fecha de Cancelación: {fechaCancelacion.toString()}</p>
      )}
    </div>
  );
}

Turno.propTypes = {
  id: PropTypes.number.isRequired,
  fechaHora: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  fechaCancelacion: PropTypes.instanceOf(Date),
};

export default Turno;
