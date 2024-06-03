// src/models/user.ts
import { Credential } from './credencial';

export interface User {
  id: number;
  name: string;
  email: string;
  credentials: Credential;
  profilePicture?: string; // Este campo es opcional
}
