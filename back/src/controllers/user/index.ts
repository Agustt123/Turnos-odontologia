// user.controller.ts

import { Request, Response } from "express";
import User from "../../interface/userInterface"; 

// Arreglo de usuarios precargados
const users: User[] = [];

function getAllUsers(req: Request, res: Response): void {
    res.send("Listado de todos los usuarios obtenido correctamente.");
};

function getUserById(req: Request, res: Response): void {
    const userId: number = parseInt(req.params.id, 10); // Convertir a número
    res.send(`Detalle del usuario con ID ${userId} obtenido correctamente.`);
};

function registerUser(req: Request, res: Response): void {
    res.send("Usuario registrado correctamente.");
};

function loginUser(req: Request, res: Response): void {
    res.send("Inicio de sesión exitoso.");
};

export { getAllUsers, getUserById, registerUser, loginUser };
