/*
Crea un API básico en Node.js utilizando el framework Express
- Define un endpoint que responda : "Hola mundo desde mi API"
- Muestra información por consola del arranque del API (como puede ser el puerto)
- Cambia el puerto por el 5000
*/

const express = require('express');
const app = express();
const PORT = 5000;

// Define el endpoint raíz
app.get('/', (req, res) => {
    res.send('Hola mundo desde mi API');
});

// Inicia el servidor y muestra información por consola
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
}); 