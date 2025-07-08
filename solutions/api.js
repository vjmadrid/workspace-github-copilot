// Importa el framework Express
const express = require('express');
const app = express();

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Endpoint básico
app.get('/', (req, res) => {
  res.send('Hola mundo desde mi API');
});

// Arranque del servidor y mensaje en consola
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
