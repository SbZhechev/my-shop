const UserModel = require('../models/UserModel');

const handleSignUp = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) return res.status(400).send('Email is required!');
  if (!password) return res.status(400).send('Password is required!');

  let user = await UserModel.findByEmail(email);
  if (user) return res.status(400).send('Email is used already!');
  
  user = new UserModel({ email, password });

  user.save().then(() => {
    res.status(200).send('User created!');
  })
};

const handleLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) return res.status(400).send('Email is required!');
  if (!password) return res.status(400).send('Password is required!');
  
  let user = await UserModel.findByEmail(email);
  if (!user) return res.status(400).send('User does not exist!');
  if (user.password !== password) return res.status(400).send('Wrong password!');

  req.session.user = user;
  req.session.save(err => {
    if (err) console.error(err);
  });

  res.status(200).send('Login Successful!');
};

module.exports = { handleSignUp, handleLogin };