const authService = require('../services/authService');
const { validationResult } = require('express-validator');

//Registers a new user and returns the user details and access token
const register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Registration successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Bad request',
      message: 'Registration unsuccessful',
      statusCode: 400,
    });
  }
};

//Logs in a user and returns the user details and access token
const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body.email, req.body.password);
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      status: 'Bad request',
      message: 'Authentication failed',
      statusCode: 401,
    });
  }
};

module.exports = {
  register,
  login,
};
