const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve barcode.html as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'barcode.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});