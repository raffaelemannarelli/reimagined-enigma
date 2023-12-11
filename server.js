// app.js

// Require the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the server to listen on port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
