const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Organisation = require('./organisation');
const UserOrganisation = require('./userOrganisation');

// Define the User model
const User = sequelize.define('User', {
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

// Establish associations
// User.belongsToMany(Organisation, { through: UserOrganisation, foreignKey: 'userId' });


module.exports = User;
