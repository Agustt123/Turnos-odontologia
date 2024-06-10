import React from "react";
import foto from "../../assets/FOTO.png";
import styles from "./Card.module.css";
export default function Card (){
    return (
        <div >

        <img src={foto} alt="foto" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolore, quibusdam neque voluptates distinctio voluptatem eligendi reprehenderit? Non porro, atque odit dolorum eveniet alias, vel numquam adipisci esse vitae nisi?</p>
        </div>
    )
}