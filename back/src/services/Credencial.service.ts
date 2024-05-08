import { v4 as uuidv4 } from 'uuid'; // Importar la función uuidv4 para generar identificadores únicos
import Credential from '../interface/credencial';

// Objeto para simular una base de datos de usuarios y credenciales
const users: Record<string, Credential> = {};

// Función para generar una credencial única
const generateCredential = (): string => {
    return uuidv4(); // Devuelve un identificador único generado aleatoriamente
};

// Verificar si las credenciales son válidas
const isValidCredentials = (username: string, password: string): boolean => {
    const user = users[username];
    return user ? user.password === password : false;
};

// Agregar un nuevo usuario y sus credenciales
const addUser = (username: string, password: string): void => {
    const credential = generateCredential(); // Generar una nueva credencial
    users[username] = { username, password,Credencial.}; // Corregir el nombre de la propiedad a 'credential'
};

// Eliminar un usuario y sus credenciales
const removeUser = (username: string): void => {
    delete users[username];
};

export { generateCredential, isValidCredentials, addUser, removeUser };
