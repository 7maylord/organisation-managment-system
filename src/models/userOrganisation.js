const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Organisation = require('./organisation');

// Define the UserOrganisation model for the many-to-many relationship
const UserOrganisation = sequelize.define('UserOrganisation', {
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'userId',
    },
  },
  orgId: {
    type: DataTypes.STRING,
    references: {
      model: Organisation,
      key: 'orgId',
    },
  },
});

module.exports = UserOrganisation;
