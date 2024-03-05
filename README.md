# Notes App

## Description

The Notes App is a web application built with Node.js and Express for managing and organizing notes. It uses MongoDB as the database and integrates with Google OAuth for user authentication.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Set up a MongoDB database and update the connection details in a `.env` file.
4. Obtain OAuth credentials from Google API and update the configuration in the application.

## Usage

- Run the app using `npm start`.
- Access the app in a web browser at the specified port.

## Dependencies

- Bootstrap, Bootstrap Icons, and EJS for front-end design and layout.
- Express, Connect-Mongo, and Express Session for server-side logic.
- Mongoose for MongoDB database interaction.
- Passport and Passport Google OAuth 2.0 for user authentication.

## Functionality

- The app uses Express for routing and middleware handling.
- It initializes sessions for user authentication with Passport and stores session data in MongoDB using MongoStore.
- The app serves static files for images and JavaScript.
- It uses EJS as the template engine for rendering dynamic content.

## Development

- Use `npm run dev` to run the app in development mode using Nodemon for automatic server restart.

## License

This project is licensed under the ISC License.

## Contact

For any inquiries, please contact [author's email here].
