# MERN E-COMMERCE

This project is a fully functional E-commerce website built using the MERN stack (MongoDB, Express, React, Node.js). It provides a complete solution for creating an online store with features such as product listing, shopping cart, user authentication, payment integration, and more.


To access the platform, users can either register with a new email address or use the demo account credentials: 
Email: demoaccount@gmail.com 
Password: demo1234
card :- 424242424242
expire :- 12/34
cvv :- 123

## Prerequisites

Before getting started, make sure you have the following knowledge and tools:

- Basic understanding of Node.js, React, Express, and MongoDB.
- Node.js installed on your machine.

## Installation

To set up the project, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies for the backend:

   ```bash
   cd ecommerce
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

## Environment Variables

Ensure that you have created a `config.env` file in the `backend/config` directory and added the appropriate variables to use the application. Below are the essential variables that need to be defined:

```dotenv
# Essential Variables

PORT=<port-number>

DB_URI=<mongodb-uri>

STRIPE_API_KEY=<stripe-api-key>

STRIPE_SECRET_KEY=<stripe-secret-key>

JWT_SECRET=<jwt-secret>

JWT_EXPIRE=<jwt-expiration-time>

COOKIE_EXPIRE=<cookie-expiration-time>

SMTP_SERVICE=<smtp-service>

SMTP_MAIL=<smtp-mail>

SMTP_PASSWORD=<smtp-password>

SMTP_HOST=<smtp-host>

SMTP_PORT=<smtp-port>

CLOUDINARY_NAME=<cloudinary-name>

CLOUDINARY_API_KEY=<cloudinary-api-key>

CLOUDINARY_API_SECRET=<cloudinary-api-secret>
```

Make sure to replace the placeholders with your own information.

## Package.json

Here is an overview of the `package.json` files for the backend and frontend:

### Backend

```json
{
  "name": "ecommerce",
  "version": "1.0.0",
  "main": "backend/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node backend/server.js",
    "dev": "nodemon backend/server.js",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false && npm install --prefix frontend && npm run build --prefix frontend"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "description": "",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cloudinary": "^1.26.3",
    "cookie-parser": "^1.4.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.1",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^5.6.0",
    "mongoose": "^5.13.5",
    "nodemailer": "^6.6.3",
    "react-rating-stars-component": "^2.2.0",
    "stripe": "^8.174.0",
    "validator": "^13.6.0"
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
  }
}
```

### Frontend

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://192.168.29.137:4000",
  "dependencies": {
    "@material-ui/core": "^4.12.3",
    "@material-ui/data-grid": "^4.0.0-alpha.37",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/lab": "^4.0.0-alpha.60",
    "@mui/icons-material": "^5.11.16",
    "@stripe/react-stripe-js": "^1.4.1",
    "@stripe/stripe-js": "^1.17.1",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "chart.js": "^3.5.1",
    "country-state-city": "^3.0.1",
    "overlay-navbar": "^1.0.4",
    "react": "^17.0.2",
    "react-alert": "^7.0.3",
    "react-alert-template-basic": "^1.0.2",
    "react-chartjs-2": "^3.0.4",
    "react-dom": "^17.0.2",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.2.0",
    "react-js-pagination": "^3.0.3",
    "react-material-ui-carousel": "^2.3.1",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
    "web-vitals": "^1.1.2",
    "webfontloader": "^1.6.28"
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
  }
}
```

For more detailed information about the dependencies, dev dependencies, and scripts, refer to the respective `package.json` files in the backend and frontend directories.

## Usage

To start the development server, run the following command in the project root directory:

```bash
npm run dev
```

This will start the backend server and the frontend development server concurrently.

## Authors

- [GitHub](https://github.com/octokatherine)
- [Instagram](https://www.instagram.com/this.is_gaurav.gupta) - @this.is_gaurav.gupta
- [Facebook](https://www.facebook.com/Gourav.Indian) - Gourav.Indian
- [LinkedIn](https://www.linkedin.com/in/gupta4gaurav) - @gupta
