import { DataSource } from "typeorm";
<<<<<<< HEAD
import {PORT,PROTO,HOST,ENVIRONMENT,DB_TYPE,DB_HOST,DB_PORT,DB_USERNAME,
DB_PASSWORD,DB_DATABASE

} from "./"
import { Credential } from "../entities/credencial";
import { User } from "../entities/user";
import { Turno } from "../entities/turnos";

export const AppDataSource = new DataSource({
    type: "postgres",
=======
import { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "../config/envs";
import { Credential } from "../entities/Credential";
import { User } from "../entities/user"; // Cambiado a "User"
import { Turno } from "../entities/appointment"; // Cambiado a "Appointment"

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
>>>>>>> 4798aac
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
<<<<<<< HEAD
    logging: true,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
})
=======
    logging: false,
    entities: [Credential, User, Turno], // Actualizado a "User" y "Appointment"
    subscribers:[],
    migrations:[],
});

export const credentialModel = AppDataSource.getRepository(Credential);
export const userModel = AppDataSource.getRepository(User);
export const appointmentsModel = AppDataSource.getRepository(Turno);
>>>>>>> 4798aac
