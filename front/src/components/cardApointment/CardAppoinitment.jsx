import React from 'react';
import styles from "./CardAppointment.module.css";

export default function CardAppointment({ id, userId, date, time, status }) {
  // Convierte la cadena de texto 'date' en un objeto de tipo 'Date'
  const formattedDate = new Date(date);
  // Verifica si 'formattedDate' es un objeto de tipo 'Date' válido
  if (isNaN(formattedDate.getTime())) {
    // Si no es un objeto de tipo 'Date' válido, devuelve un mensaje de error
    return <div>Error: Fecha inválida</div>;
  }
  // Si 'formattedDate' es un objeto de tipo 'Date' válido, continúa con el formato de la fecha
  const formattedDateString = `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
  
  const handleClick = () => {
    alert(`¿Desea cancelar el turno del día ${formattedDateString} a las ${time}?`);
  };

  return (
    <div className={styles.container}>
      <span className={styles.date}>{formattedDateString}</span>
      <span className={styles.time}>{time}</span>
      <span 
        className={`${styles.status} ${status === 'active' ? styles.active : styles.cancelled}`}
        onClick={status === 'active' ? handleClick : undefined}
      >
        {status === 'active' ? 'Activo' : 'Cancelado'}
      </span>
    </div>
  );
}
