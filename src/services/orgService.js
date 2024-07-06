const { v4: uuidv4 } = require('uuid');
const Organisation = require('../models/organisation');
const User = require('../models/user');
const UserOrganisation = require('../models/userOrganisation')


//Fetches organisations by user ID.
const getOrganisationsByUserId = async (userId) => {
    const user = await User.findByPk(userId, {
        include: Organisation,
      });
      return user ? user.Organisations : [];
};


//Fetches an organisation by org ID.
const getOrganisationById = async (orgId) => {
  return Organisation.findOne({ where: { orgId } });
};


//Creates a new organisation.
const createOrganisation = async (orgData) => {
  const organisation = await Organisation.create({
    orgId: uuidv4(),
    name: orgData.name,
    description: orgData.description,
  });

  await UserOrganisation.create({
    userId,
    orgId: organisation.orgId,
  });

  return organisation;
};


//Adds a user to an organisation
const addUserToOrganisation = async (orgId, userId) => {
  const organisation = await getOrganisationById(orgId);
  const user = await User.findOne({ where: { userId } });

  if (organisation && user) {
    await UserOrganisation.create({
      userId,
      orgId,
    });
  }
};

module.exports = {
  getOrganisationsByUserId,
  getOrganisationById,
  createOrganisation,
  addUserToOrganisation,
};
