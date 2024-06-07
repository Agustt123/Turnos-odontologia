import React from 'react';
import logo from "../../assets/LOGO.png";
import foto from "../../assets/FOTO.png";
import usuario from "../../assets/USUARIO.png";
import styles from "./Navbar.module.css"; // Importa los estilos

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
           <div className={styles.logoSection}>
            <img src={logo} alt="logo" />
            </div> 
            <div className={styles.linkSection}>

            
                <span>PRINCIPAL</span>
                <span>RESERVAR</span>
                <span>ACERCA</span>
                <span>CONTACTO</span>
            </div>
           <div className={styles.avatarSection}>
             <img src={usuario} alt="usuario" />
            </div>
         
        </nav>
    );
}
