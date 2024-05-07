import { Request, Response } from "express";
import Iuser from "../interface/userInterface";
import { generateCredential,checkCredential } from "./Credencial.service";
import { AppDataSource } from "../config";
import { User } from "../entities/user";

// Arreglo de usuarios precargados
const users: User[] = [
    { id: 1, name: "usuario1", password: "password1", email: "usuario1@example.com", birthdate: new Date(), credencialid: 1, turno: [] },
    { id: 2, name: "usuario2", password: "password2", email: "usuario2@example.com", birthdate: new Date(), credencialid: 2, turno: [] },
    { id: 3, name: "usuario3", password: "password3", email: "usuario3@example.com", birthdate: new Date(), credencialid: 3, turno: [] }
];

async function getAllUsersService(): Promise<User[]> {
   try {
    const user= await AppDataSource.manager.find(User);
    return users;
   } catch (error:any) {
    throw new Error(error);
    
   } 
}

function getUserByIdService(id: number): User | undefined {
    return users.find(user => user.id === id);
}

function postUserRegisterService(user: User): void {
    users.push(user);
}

async function postUserLoginService(username: string, password: string): Promise<User | undefined> {
    // Implementa la lógica de inicio de sesión aquí
    return undefined;
}

async function getAllUsersController(req: Request, res: Response): Promise<void> {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

async function getUserByIdController(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id, 10);
        const user = await getUserByIdService(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

async function postUserRegisterController(req: Request, res: Response): Promise<void> {
    try {
        const user: User = req.body;
        postUserRegisterService(user);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

async function postUserLoginController(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;
        const user = await postUserLoginService(username, password);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getAllUsersController,
    getUserByIdController,
    postUserRegisterController,
    postUserLoginController
};
