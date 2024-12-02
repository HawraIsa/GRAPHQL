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
    res.redirect('../html/index.html');

    const { username, password } = req.body;
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    //console.log(username, password);
    res.redirect('../html/profile.html');
});


//Route to serve profile.html
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/profile.html'));
});

// 404 error handler
app.use((req, res) => {
    const filePath = path.join(__dirname, 'html', '404.html');
    console.log('Serving 404 page from:', filePath); // Log the file path
    res.status(404).sendFile(filePath);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
