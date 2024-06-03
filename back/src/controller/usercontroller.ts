import { Request, Response } from 'express';
import  {User} from '../interface/user';
import { Credential } from '../interface/credencial';

let users: User[] = [];

export const getUsers = async (req: Request, res: Response) => {
  res.json(users);
  

};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Usuario no encontrado');
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, username, password, profilePicture } = req.body;
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    credentials: { username, password },
    profilePicture
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const loginUser =  async  (req: Request, res: Response) => {
  const { username, password } = req.body as Credential;
  const user = users.find(user => user.credentials.username === username && user.credentials.password === password);
  if (user) {
    res.send('Login exitoso');
  } else {
    res.status(401).send('Credenciales incorrectas');
  }
};
