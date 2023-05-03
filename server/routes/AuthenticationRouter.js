const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');

const AuthenticationRouter = express.Router();

AuthenticationRouter.post('/sign-up', AuthenticationController.handleSignUp);

AuthenticationRouter.post('/login', AuthenticationController.handleLogin);

module.exports = AuthenticationRouter;