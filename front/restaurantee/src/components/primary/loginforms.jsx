import React, { useState } from 'react';
import Button from '../secondary/Button';
import './loginforms.css'; // Importa el archivo CSS correspondiente
import myTurns from '../../helper/MyTurns'; // Importa el arreglo de turnos desde el archivo helper

function LoginForm() {
  // Inicializa el estado con los datos del helper
  const [username, setUsername] = useState(myTurns.username || '');
  const [password, setPassword] = useState(myTurns.password || '');
  const [email, setEmail] = useState(myTurns.email || '');

  const handleLogin = () => {
    // Registra los datos de inicio de sesión en la consola
    console.log('Datos de inicio de sesión:', { username, password, email });
  };

  return (
    <div className="login-form">
      {/* Formulario de inicio de sesión */}
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="login-button" onClick={handleLogin}>Iniciar sesión</Button>
    </div>
  );
}

export default LoginForm;
