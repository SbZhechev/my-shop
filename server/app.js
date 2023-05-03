const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env'});

const app = express();
const port = 3000;

const AuthenticationController = require('./controllers/AuthenticationController');

app.use(express.json());

app.post('/sign-up', AuthenticationController.handleSignUp);

app.post('/login', AuthenticationController.handleLogin);

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
  const connectionString = process.env.DB_CONNECTION_STRING;
  mongoose.connect(connectionString).then(() => console.log('Connection Established'));
});