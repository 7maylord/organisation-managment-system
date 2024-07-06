const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

//Route to get user details by ID [PROTECTED]
router.get('/:id', authenticateToken, userController.getUser);

module.exports = router;
