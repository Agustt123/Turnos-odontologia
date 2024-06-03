import { DataSource } from "typeorm";
import {
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} from "./envs";
import { Credential } from "../entities/credencial";
import { User } from "../entities/user";
import { Turno } from "../entities/turnos";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
});
