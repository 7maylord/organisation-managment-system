const { validationResult, body } = require('express-validator');


//middleware for validating user registration input
const validateRegistration = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').notEmpty().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array().map(err => ({ field: err.param, message: err.msg })) });
    }
    next();
  },
];

module.exports = {
  validateRegistration,
};
