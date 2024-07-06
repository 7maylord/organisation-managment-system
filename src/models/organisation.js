const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const UserOrganisation = require('./userOrganisation');

// Define the Organisation model
const Organisation = sequelize.define('Organisation', {
  orgId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Establish associations
// Organisation.belongsToMany(User, { through: UserOrganisation, foreignKey: 'orgId' });


module.exports = Organisation;
