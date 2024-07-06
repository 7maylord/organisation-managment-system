const organisationService = require('../services/orgService');


//Fetches organisations by user ID
const getOrganisations = async (req, res) => {
  try {
    const organisations = await organisationService.getOrganisationsByUserId(req.user.userId);
    res.status(200).json({
      status: 'success',
      message: 'Organisations retrieved successfully',
      data: { organisations },
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: 'Server error',
      statusCode: 500,
    });
  }
};

//Fetches an organisation by ID
const getOrganisation = async (req, res) => {
  try {
    const organisation = await organisationService.getOrganisationById(req.params.orgId);
    if (organisation) {
      res.status(200).json({
        status: 'success',
        message: 'Organisation retrieved successfully',
        data: organisation,
      });
    } else {
      res.status(404).json({
        status: 'Not Found',
        message: 'Organisation not found',
        statusCode: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: 'Server error',
      statusCode: 500,
    });
  }
};


//Creates a new organisation
const createOrganisation = async (req, res) => {
  try {
    const organisation = await organisationService.createOrganisation(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Organisation created successfully',
      data: organisation,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Bad Request',
      message: 'Client error',
      statusCode: 400,
    });
  }
};


//Adds a user to an organisation
const addUserToOrganisation = async (req, res) => {
  try {
    await organisationService.addUserToOrganisation(req.params.orgId, req.body.userId);
    res.status(200).json({
      status: 'success',
      message: 'User added to organisation successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Bad Request',
      message: 'Client error',
      statusCode: 400,
    });
  }
};

module.exports = {
  getOrganisations,
  getOrganisation,
  createOrganisation,
  addUserToOrganisation,
};
