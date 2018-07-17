const express = require('express');
const app = express();

const db = require('./db/db');

// Applying middleware to allow CORS to React App
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

app.get('/data', (req, res) => {
  res.json(JSON.parse(JSON.stringify(db)))
});

// Changed the port since react serves on the same port (3000) out of the box
app.listen(3001, () => console.log('Example app listening on port 3001!'));
