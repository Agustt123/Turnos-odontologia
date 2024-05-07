import { HOST, PORT } from "../config";
import server from "./server";

import "reflect-metadata";

export function serverInitializer(){

    server.listen(PORT, HOST, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
};
