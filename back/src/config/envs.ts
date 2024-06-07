<<<<<<< HEAD
import dotenv from "dotenv"; 

dotenv.config({ path: "./src/config/.env" });

const { ENVIRONMENT } = process.env;
const PORT = Number(process.env.PORT) ;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_TYPE=process.env.DB_TYPE || "postgres";
const DB_HOST=process.env.DB_HOST || "localhost";
const DB_PORT=Number(process.env.DB_PORT) || 5432;
const DB_USERNAME=process.env.DB_USERNAME || "test";
const DB_PASSWORD=process.env.DB_PASSWORD || "test";
const DB_DATABASE =process.env.DB_DATABASE||"test";


export {
    PORT,
    PROTO,
    HOST,
    ENVIRONMENT,
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE


};
=======
export const PORT = Number(process.env.PORT) || 3005;
export const PROTO = process.env.PROTO || "http";
export const HOST = process.env.HOST || "localhost";
export const DB_TYPE = process.env.DB_TYPE || "postgres";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = Number(process.env.DB_PORT) || 5432;
export const DB_USERNAME = process.env.DB_USERNAME || "test";
export const DB_PASSWORD = process.env.DB_PASSWORD || "test";
export const DB_DATABASE = process.env.DB_DATABASE || "test";
>>>>>>> 4798aac
