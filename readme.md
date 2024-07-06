# Organisation Management System

## Overview

This is an Organisation Management System built with Node.js, Express, and PostgreSQL using Sequelize ORM. The system allows users to register, log in, and manage organisations. Users can belong to multiple organisations and each organisation can contain multiple users.

## Features

- User registration and login with JWT authentication
- Organisation management (create, view, and manage organisations)
- Users can belong to multiple organisations
- Validation and error handling
- Secure password hashing with bcrypt

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

1.  Clone the Repository

    ```bash
    git clone https://github.com/your-username/organisation-management-system.git
    cd organisation-management-system
    ```

2.  Install Dependencies

    ```bash
    npm install
    ```

3.  Create a .env file in the root directory and add the following configuration variables:

    ```plaintext
    # Database configuration
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password

    # JWT configuration
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRES_IN=1h

    # Server configuration
    PORT=3000
    ```

    Replace the placeholder values with your actual database credentials and desired configuration settings.

4.  Database Setup:
    Make sure your PostgreSQL server is running and create a new database:

    ```bash
    psql -U your_database_user -c "CREATE DATABASE your_database_name;"
    ```

5.  Running the Application:

    To start the application in development mode:

    ```bash
    npm run dev
    ```

    To start the application in production mode:

    ```bash
    npm start
    ```

6.  Running Tests
    To run the test suite:

        ```bash
        npm test
        ```

## API Endpoints

### Auth Endpoints

- POST /auth/register - Register a new user
- POST /auth/login - Login a user

### User Endpoints

- GET /api/users/:id - Get user details (protected)

### Organisation Endpoints

- GET /api/organisations - Get all organisations the user belongs to (protected)
- GET /api/organisations/:orgId - Get a single organisation by ID (protected)
- POST /api/organisations - Create a new organisation (protected)
- POST /api/organisations/:orgId/users - Add a user to an organisation (protected)

## Project Structure

```plaintext
organisation-management-system/
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── organisationController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Organisation.js
│   │   ├── User.js
│   │   └── UserOrganisation.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── organisations.js
│   │   └── users.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── organisationService.js
│   │   └── userService.js
│   └── app.js
│
├── tests/
│   ├── auth.spec.js
│   ├── organisation.spec.js
│   └── user.spec.js
│
├── .env
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
