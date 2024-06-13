import React from 'react';
import styles from './Abaut.module.css'; // Importa los estilos

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Acerca de Nosotros</h1>
      <p className={styles.description}>
        Somos una consultora odontológica con muchos años de experiencia, ofreciendo los mejores servicios para el cuidado de tu salud dental. Nuestro equipo está formado por profesionales altamente capacitados y comprometidos con tu bienestar.
      </p>
      <h2 className={styles.servicesTitle}>Nuestros Servicios</h2>
      <ul className={styles.servicesList}>
        <li>Revisiones y limpiezas dentales</li>
        <li>Blanqueamiento dental</li>
        <li>Ortodoncia (Brackets y alineadores invisibles)</li>
        <li>Implantes dentales</li>
        <li>Odontopediatría</li>
      </ul>
      <h2 className={styles.doctorsTitle}>Nuestros Doctores</h2>
      <ul className={styles.doctorsList}>
        <li>Dr. Juan Pérez</li>
        <li>Dra. María García</li>
        <li>Dr. Carlos Martínez</li>
        <li>Dra. Laura Rodríguez</li>
      </ul>
    </div>
  );
}

export default About;
