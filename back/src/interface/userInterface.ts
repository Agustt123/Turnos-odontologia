// src/interfaces/user.interface.ts

import Credential from "./credencial";

interface User {
  id: number;
  username: string; // Cambiado de "name" a "username"
  password: string;
  email: string;
  turnos: [],
  credentialId: Credential["id"]; // Agregado para reflejar la relación con las credenciales
}

export default User;
