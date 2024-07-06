const express = require('express');
const orgController = require('../controllers/orgController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

//Route to get all organisations for a user [PROTECTED]
router.get('/', authenticateToken, orgController.getOrganisations);

//Route to get an organisation by ID [PROTECTED]
router.get('/:orgId', authenticateToken, orgController.getOrganisation);

//Route to create a new organisation [PROTECTED]
router.post('/', authenticateToken, orgController.createOrganisation);

//Route to add a user to an organisation [PROTECTED]
router.post('/:orgId/users', authenticateToken, orgController.addUserToOrganisation);

module.exports = router;
