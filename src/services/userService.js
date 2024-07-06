const User = require('../models/user');

//Fetches user details by ID
const getUserById = async (userId) => {
  return User.findOne({ where: { userId } });
};

module.exports = {
  getUserById,
};
