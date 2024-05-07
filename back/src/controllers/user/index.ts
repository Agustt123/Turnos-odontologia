import { Request, Response } from "express";

// Obtener el listado de todos los usuarios
const getAllUsers = (req: Request, res: Response): void => {
    res.send("Listado de todos los usuarios obtenido correctamente.");
};

// Obtener el detalle de un usuario específico por ID
// Obtener el detalle de un usuario específico por ID
const getUserById = (req: Request, res: Response): void => {
    const userId: number = parseInt(req.params.id, 10); // Convertir a número
    res.send(`Detalle del usuario con ID ${userId} obtenido correctamente.`);
};


// Registro de un nuevo usuario
const registerUser = (req: Request, res: Response): void => {
    res.send("Usuario registrado correctamente.");
};

// Login del usuario a la aplicación
const loginUser = (req: Request, res: Response): void => {
    res.send("Inicio de sesión exitoso.");
};

export { getAllUsers, getUserById, registerUser, loginUser };
