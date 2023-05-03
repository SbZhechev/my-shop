const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env'});

const app = express();
const port = 3030;

const AuthenticationRouter = require('./routes/AuthenticationRouter');

app.use(express.json());

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set("Access-Control-Allow-Methods", "POST, GET, UPDATE, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/authentication', AuthenticationRouter);

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
  const connectionString = process.env.DB_CONNECTION_STRING;
  mongoose.connect(connectionString).then(() => console.log('Connection Established'));
});