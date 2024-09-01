const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const app = express();

const PORT = process.env.PORT || 3000;

// Log the directory for verification
console.log('Serving static files from:', path.join(__dirname));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route to serve login.html at the root URL
app.get('/', (req, res) => {
    res.redirect('/assets/html/login.html');

    const { username, password } = req.body;
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/html/login.html'));
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.redirect('/assets/html/profile.html');
});


//Route to serve profile.html
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/html/profile.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
