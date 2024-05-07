// Simulación de una base de datos de usuarios y contraseñas
import Credential from "../interface/credencial"

const users: Record<string, Credential> = {
    "usuario1": { username: "usuario1", password: "password1" },
    "usuario2": { username: "usuario2", password: "password2" },
    "usuario3": { username: "usuario3", password: "password3" }
};

// Verificar si las credenciales son válidas
const isValidCredentials = (username: string, password: string): boolean => {
    const user = users[username];
    return user ? user.password === password : false;
};

// Agregar un nuevo usuario y sus credenciales
const addUser = (username: string, password: string): void => {
    users[username] = { username, password };
};

// Eliminar un usuario y sus credenciales
const removeUser = (username: string): void => {
    delete users[username];
};

export { isValidCredentials, addUser, removeUser };