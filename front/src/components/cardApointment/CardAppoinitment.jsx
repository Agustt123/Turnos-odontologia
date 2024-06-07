// components/cardApointment/CardAppoinitment.jsx
import React from 'react';
import styles from "./CardAppointment.module.css";

export default function CardAppointment({ id, userId, date, time, status }) {
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
  const handleClick = () => {
    alert(`¿Desea cancelar el turno del día ${formattedDate} a las ${time}?`);
  };

  return (
    <div className={styles.container}>
      <span className={styles.date}>{formattedDate}</span>
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

