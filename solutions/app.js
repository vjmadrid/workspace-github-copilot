/*
Crea un API básico en Node.js utilizando el framework Express
- Define un endpoint que responda : "Hola mundo desde mi API"
- Muestra información por consola del arranque del API (como puede ser el puerto)
*/
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo desde mi API');
});

app.listen(PORT, () => {
  console.log(`API arrancada en el puerto ${PORT}`);
});