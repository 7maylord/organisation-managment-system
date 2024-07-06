const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');
const Organisation = require('../models/organisation');

//Registers a new user and creates a default organisation.
const registerUser = async (userData) => {
  const { firstName, lastName, email, password, phone } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userId: uuidv4(),
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phone,
  });

  const organisation = await Organisation.create({
    orgId: uuidv4(),
    name: `${firstName}'s Organisation`,
    description: '',
  });

  // Add user to organisation (many-to-many relationship)

  const accessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { accessToken, user };
};


//Logs in a user
const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const accessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { accessToken, user };
};

module.exports = {
  registerUser,
  loginUser,
};
