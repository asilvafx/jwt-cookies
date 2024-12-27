# jwt-cookies
Simple Node.js Secure Authentication using JWT & Cookies

## Description
This repository demonstrates a simple and secure authentication mechanism using JSON Web Tokens (JWT) and cookies in a Node.js environment.

## Features
- User registration and login
- JWT-based authentication
- Secure cookie handling
- Token validation and expiration

## Installation
1. Clone the repository:
  ```
  git clone https://github.com/asilvafx/jwt-cookies.git
  cd jwt-cookies
  ```
2. Install dependencies:
  ```
  npm install
  ```

## Usage
1. Start the application:
  ```
  npm start
  ```
2. Access the application at http://localhost:3000

## Endpoints
- POST /register: Register a new user
- POST /login: Authenticate a user and obtain a JWT
- GET /profile: Access the authenticated user's profile (requires JWT in cookies)

## Environment Variables
Create a .env file in the root directory and add the following environment variables:
  ```
  PORT=3000
  JWT_SECRET=your_jwt_secret
  COOKIE_SECRET=your_cookie_secret
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
