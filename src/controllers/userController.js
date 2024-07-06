const userService = require('../services/userService');


//Fetches user details by ID
const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.status(200).json({
        status: 'success',
        message: 'User retrieved successfully',
        data: user,
      });
    } else {
      res.status(404).json({
        status: 'Not Found',
        message: 'User not found',
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

module.exports = {
  getUser,
};
