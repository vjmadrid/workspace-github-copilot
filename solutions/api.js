const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo desde mi API');
});

app.listen(PORT, () => {
  console.log(`API iniciada en puerto ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});