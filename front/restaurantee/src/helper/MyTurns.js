const myTurns = [
    {
      id: 1,
      userId: 1,
      fechaHora: new Date('2024-05-10T09:00:00'),
      status: "ACTIVE"
    },
    {
      id: 2,
      userId: 2,
      fechaHora: new Date('2024-05-12T10:30:00'),
      status: "CANCELED",
      fechaCancelacion: new Date('2024-05-11T12:00:00')
    },
    // Agrega más objetos de turno según sea necesario, asegurándote de mantener la misma estructura que en tu backend
  ];
  
  export default myTurns;
  