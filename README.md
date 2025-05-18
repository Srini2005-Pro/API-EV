 API-EV: Electric Vehicle API

A comprehensive RESTful API service for electric vehicle data management, charging station information, and EV-related services built with JavaScript.

## 📋 Features

- **EV Data Management**: Vehicle specifications, range information, and battery details

- **Authentication**: Secure JWT-based authentication
- **Payment Integration**: Support for charging session payments
- **Real-time Updates**: WebSocket support for live charging status
- **Documentation**: Comprehensive API documentation with examples

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Postgrel SQL
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest and Supertest
- **Deployment**: Docker support

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Srini2005-Pro/API-EV.git
cd API-EV

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run the application
npm start

# For development with hot-reload
npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`APP_PORT`

`DB_USERNAME`

`DB_PASSWORD`

`DB_NAME`

`DB_HOST`

`DB_PORT`

`JWT_SECRET_KEY`

`JWT_EXPIRES_IN`

`ADMIN_EMAIL`

`ADMIN_PASSWORD`


## Installation

Install my-project with npm

```bash
  npm run install
  npm run migrate
  npm run seed:all




