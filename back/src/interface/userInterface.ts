import { Credential } from "./credencial";

interface User {
  name: string;
  email: string;
  credentials: Credential;
  profilePicture?: string;
}

export default User;
