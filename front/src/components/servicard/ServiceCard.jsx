import React from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.content}>
                <h2 className={styles.title}>Nuestros Servicios</h2>
                <ul className={styles.servicesList}>
                    <li><strong>Revisiones y limpiezas dentales:</strong> Realizamos revisiones exhaustivas y limpiezas profesionales para mantener tus dientes y encías saludables.</li>
                    <li><strong>Blanqueamiento dental:</strong> Disponemos de tratamientos de blanqueamiento dental para mejorar el color y la luminosidad de tus dientes.</li>
                    <li><strong>Ortodoncia (Brackets y alineadores invisibles):</strong> Ofrecemos opciones de ortodoncia tradicional con brackets o alineadores invisibles para corregir la alineación de tus dientes y mejorar tu sonrisa.</li>
                    <li><strong>Implantes dentales:</strong> Realizamos implantes dentales para reemplazar dientes perdidos y restaurar la función y estética de tu sonrisa.</li>
                    <li><strong>Odontopediatría:</strong> Nos especializamos en el cuidado dental de niños, brindando un enfoque amigable y suave para asegurar una experiencia positiva en el dentista desde una edad temprana.</li>
                </ul>
            </div>
        </div>
    );
}
