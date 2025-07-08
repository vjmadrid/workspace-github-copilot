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
    console.log(`API escuchando en el puerto ${PORT}`);
});

// Verifica que el API funciona correctamente
// Puedes probarlo accediendo a http://localhost:3000 desde tu navegador o utilizando herramientas como Postman o cURL
// Si todo está correcto, deberías ver el mensaje "Hola mundo desde mi API" en la respuesta
// Si no funciona, revisa el código y asegúrate de que no hay errores en la consola
// Si hay algún error, revisa el código y corrige los problemas que encuentres
// Una vez que todo esté funcionando correctamente,
// puedes proceder a hacer un commit de los cambios realizados
// y continuar con el siguiente ejercicio
// Recuerda que es importante hacer commits frecuentes para mantener un buen control de versiones
// y facilitar la colaboración en equipo
// Si tienes dudas o necesitas ayuda, no dudes en preguntar a tus compañeros o buscar información en la documentación oficial de Express
// ¡Buena suerte con el ejercicio!