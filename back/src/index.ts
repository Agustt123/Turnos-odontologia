import express from 'express';
import dotenv from 'dotenv';
import server from './server/server';

dotenv.config();

const app = express();

// Configurar el middleware para analizar el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Inicializar el servidor
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  
    console.log(`Server listening on http://localhost:${PORT}`);
});

// Exportar la aplicación para poder usarla en otros archivos si es necesario
export default app;
