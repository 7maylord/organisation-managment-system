const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const organisationRoutes = require('./routes/organisation');
const { User, Organisation, UserOrganisation } = require('./models');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/organisations', organisationRoutes);

// Test route to check server status
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Sync the database
sequelize.sync().then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Database connection error:', err);
});

module.exports = app;
