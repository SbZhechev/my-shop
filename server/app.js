const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env'});

const app = express();
const port = 3000;

const UserModel = require('./models/UserModel');

app.use(express.json());

app.post('/sign-up', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) return res.status(400).send('Email is required!');
  if (!password) return res.status(400).send('Password is required!');
  
  let user = new UserModel({ email, password });

  user.save().then(() => {
    res.status(200).send('User created!');
  })
});

app.post('/login', async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) return res.status(400).send('Email is required!');
  if (!password) return res.status(400).send('Password is required!');
  
  let user = await UserModel.findByEmail(email);
  if (!user) return res.status(400).send('User does not exist!');
  if (user.password !== password) return res.status(400).send('Wrong password!');

  res.status(200).send('Login Successful!');
});

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
  const connectionString = process.env.DB_CONNECTION_STRING;
  mongoose.connect(connectionString).then(() => console.log('Connection Established'));
});