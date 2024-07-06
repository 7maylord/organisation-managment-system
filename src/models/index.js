const User = require('./user');
const Organisation = require('./organisation');
const UserOrganisation = require('./userOrganisation');

// Define associations
User.belongsToMany(Organisation, { through: UserOrganisation, foreignKey: 'userId' });
Organisation.belongsToMany(User, { through: UserOrganisation, foreignKey: 'orgId' });

module.exports = {
  User,
  Organisation,
  UserOrganisation
};
