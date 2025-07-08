const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON body
app.use(express.json());

// Basic endpoint that responds with "Hola mundo desde mi API"
app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo desde mi API' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}`);
});