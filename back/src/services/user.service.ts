import { Request, Response } from "express";
import IUser from "../interface/userInterface";
import { AppDataSource } from "../config";
import { User } from "../entities/user";
import { generateCredential } from "./Credencial.service";
export {generateCredential} from "../services/Credencial.service"

async function getAllUsersService(): Promise<User[]> {
   try {
    const users = await AppDataSource.manager.find(User);
    return users;
   } catch (error:any) {
    throw new Error(error);
   } 
}



async function getUserByIdService(id: number): Promise<User | undefined> {
    try {
        const user = await AppDataSource.manager.findOne(User, { where: { id } });
        return user || undefined;
    } catch (error:any) {
        throw new Error(error.message);
    }
}


async function postUserRegisterService(user: User): Promise<void> {
    try {
        const credentialId = generateCredential(); // Generar un identificador único para la credencial
        user.credential = credentialId; // Asignar el identificador único al usuario
        await AppDataSource.manager.save(User, user);
    } catch (error:any) {
        throw new Error(error.message); // Propagar el error con un mensaje descriptivo
    }
}


async function postUserLoginService(username: string, password: string): Promise<User | undefined> {
    // Implementar lógica de inicio de sesión aquí
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
        await postUserRegisterService(user);
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
