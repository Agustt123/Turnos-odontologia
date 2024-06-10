// App.jsx
import React from 'react';
import Home from './views/home/Home';
import Appointment from './views/appointment/Appointment';
import Login from './views/login/Login';
import Register from './views/register/Register';

function App() {
  return (
    <>
      <Home />
      <Appointment />
      <Login/>
      <Register/>
    </>
  );
}

export default App;
