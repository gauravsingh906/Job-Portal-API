### Job API

## Overview
The Job API is a RESTful service that allows users to manage job postings, applications, and likes. It provides endpoints for user authentication, job management, and interaction between users and job postings.
Features



## User registration and authentication
Job posting creation and management
Job application submission
Like functionality for jobs and users
Comprehensive Swagger documentation for easy API exploration and testing

## Prerequisites

Node.js (v14 or later)
npm (v6 or later)
MongoDB (v4 or later)

## Installation

Clone the repository:
Copygit clone https://github.com/yourusername/job-api.git
cd job-api

## Install dependencies:
npm install

## Set up environment variables:
Create a .env file in the root directory and add the following:
CopyPORT=3000
MONGODB_URI=mongodb://localhost:27017/jobapi
JWT_SECRET=your_jwt_secret_key

## Start the server:
npm start


## API Documentation
The Job API comes with built-in Swagger documentation, which provides a comprehensive and interactive way to explore and test the API endpoints.
To access the Swagger documentation:

Start the server as described in the Installation section.
Open a web browser and navigate to:
Copyhttp://localhost:3000/api-docs


## Features of the Swagger Documentation:

Interactive UI: Explore all available endpoints, their parameters, and response schemas.
Try it out: Test API calls directly from the browser.
Authentication: Easily add your JWT token to test authenticated endpoints.
Models: View detailed schemas for all data models used in the API.

## Using Swagger UI:

Navigate through the different endpoints grouped by tags (Users, Jobs, Likes).
Click on an endpoint to expand its details.
Click the "Try it out" button to prepare a test call.
Fill in any required parameters.
For authenticated endpoints, click the "Authorize" button at the top and enter your JWT token.
Click "Execute" to send the request and see the response.

This documentation serves as both a reference and a testing tool, making it easier to understand and integrate with the Job API.
## Main Endpoints

/api/users: User registration, login, and profile management
/api/jobs: Job posting creation, retrieval, and management
/api/likes: Like functionality for jobs and users

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. To access protected routes, include the JWT token in the Authorization header of your requests:
CopyAuthorization: Bearer your_jwt_token
Error Handling
The API returns appropriate HTTP status codes along with error messages in JSON format for any errors encountered during request processing.
Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.
## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
