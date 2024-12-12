const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON from incoming requests
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to provide access to JSON files
app.get('/data/:fileName', (req, res) => {
    const fileName = req.params.fileName; // Get the file name from the URL
    const filePath = path.join(__dirname, 'data', fileName); // Path to the JSON file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Send the JSON file
        res.sendFile(filePath);
    });
});

// API route to write JSON data to saves.json
app.post('/data/saves', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'saves.json');
    const jsonContent = JSON.stringify(req.body, null, 2); // Format JSON

    // Write the JSON content to saves.json
    fs.writeFile(filePath, jsonContent, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).json({ error: 'Failed to write to file' });
        }

        res.status(200).json({ message: 'File written successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
