<<<<<<< HEAD
import express from "express";
import morgan from "morgan";
import cors from "cors"; // Importa el paquete cors
import router from "../routes";

const server = express();

// Configura el middleware cors
server.use(cors());

// Configura el middleware de registro de solicitudes HTTP con Morgan
server.use(morgan("dev"));

// Configura el middleware para analizar el cuerpo de las solicitudes con formato JSON
server.use(express.json());

// Configura el enrutador principal de la aplicación
server.use(router);

export default server;
=======
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../routes/index';  
export const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use('/', router);  

export default server;
>>>>>>> 4798aac
