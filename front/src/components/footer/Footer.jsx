import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.copyRight}>Derechos de autor © 2024 Clínica Dental XYZ</p>
                <p className={styles.contact}>Para consultas, contáctanos en <a href="mailto:info@clinicadentalxyz.com" className={styles.contactLink}>info@clinicadentalxyz.com</a></p>
            </div>
        </div>
    );
}
