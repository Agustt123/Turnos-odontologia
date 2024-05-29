import React from 'react';
import './App.css';
import LoginForm from './components/primary/loginforms';
import Navbar from "./components/primary/Navbar";
import MisTurnos from "./views/MisTurnos"
import Button from './components/secondary/Button';
function App() {
  const handleButtonClick = () => {
    console.log('Botón clickeado en App');
  };

  return (
    <div className="app">
      <Navbar />
      <h1>Bienvenido a mi aplicación</h1>
      <LoginForm />
      <Button className="app-button" onClick={handleButtonClick}>Mi Botón</Button>
      <MisTurnos />
    </div>
  );
}

export default App;
