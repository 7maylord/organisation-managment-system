const express = require('express');
const authController = require('../controllers/authController');
const { validateRegistration } = require('../utils/validator');

const router = express.Router();


//Route to register a new user.
router.post('/register', validateRegistration, authController.register);

//Route to log in a user.
router.post('/login', authController.login);

module.exports = router;
