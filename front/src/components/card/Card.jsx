import React from "react";
import foto from "../../assets/FOTO.png";
import styles from "./Card.module.css";

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <img src={foto} alt="foto" className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>Bienvenido a Nuestra Clínica Dental</h2>
                <p className={styles.description}>
                    En nuestra clínica dental, nos comprometemos a brindarte el mejor cuidado para tu salud bucal. Contamos con un equipo de profesionales altamente capacitados y la última tecnología para garantizarte una sonrisa perfecta.
                </p>
            </div>
        </div>
    );
}
