// app.js

// Require the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
