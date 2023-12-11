// app.js

// Require the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // send index.html
  res.sendFile(__dirname + '/index.html');
});

// Set the server to listen on port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
